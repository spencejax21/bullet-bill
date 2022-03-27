const axios = require('axios');

let send_receipt = (async (img) => {
    try{
        //send receipt picture to Taggun API
        let res = await axios(
            {
                url: 'https://api.taggun.io/api/receipt/v1/verbose/url',
                method: 'post',
                headers: {
                    'contentType' : 'application/json',
                    'apikey': '6d2fb860ad2211ec8215c512ccf27e54',
                    'accept': 'application/json'
                },
                data: {
                    url: img,
                    headers: {
                        'x-custom-key': 'string'
                    }
                }
            }
        );
       
        let arr = res.data.text.text.split(/\r?\n/);
        //console.log(arr);
        
        let data = []
        const time = new RegExp('(1[0-2]|0?[1-9]):([0-5][0-9])')
        const date = new RegExp('^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$');
        const months = ['january', 'february', 'march', 'april', 'may', 
            'june', 'july', 'august', 'september', 'october', 'november', 'december', 
            'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']

        //parse scanned string for useful information
        total = -1;
        subtotal = -1;
        begOfItems = -1;
        foundItemList = false;
        endOfItems = -1;
        foundFirstTotal = false;

        for(let i=0; i<arr.length; i++){
            let str = arr[i];
            let index = -1;
            for(x of months){
                if(str.toLowerCase().includes(x)){
                    index = str.toLowerCase().indexOf(x);
                    //console.log(index);
                    data.push(str.substring(index));
                    break;
                }
            }
            if(index == -1 && date.test(str)){
                data.push(str);
            }
            else if(time.test(str)){
                data.push(str);
            
            }
            else if(str.includes("$")){
                data.push(str);
                if(str.toUpperCase().substring(0,5) == 'TOTAL'){
                    dollar_index = str.indexOf('$');
                    total = parseFloat(str.substring(dollar_index+1));
                    if(!foundFirstTotal){
                        endOfItems = data.length-1;
                        foundFirstTotal = true;
                    }
                }
                else if(str.toUpperCase().substring(0,8) == 'SUBTOTAL'){
                    dollar_index = str.indexOf('$');
                    subtotal = parseFloat(str.substring(dollar_index+1));
                    if(!foundFirstTotal){
                        endOfItems = data.length-1;
                        foundFirstTotal = true;
                    }
                }
                else{
                    if(!foundItemList){
                        foundItemList = true;
                        begOfItems = data.length-1;
                    }
                }
            }
        }

        let itemsList = data.slice(begOfItems, endOfItems);
        let itemsObject = {};
        for(item of itemsList){
            index = item.indexOf('$');
            price = parseFloat(item.substring(index+1));
            let name = item.substring(0,index);
            itemsObject[name] = price;
        }
        let returnObj =  {
            dateTime: data.slice(0, begOfItems),
            items: itemsObject,
            total: total,
            subtotal: subtotal
        }
        //console.log(returnObj);
        return returnObj;

    }catch(e){
        console.log(e);
    }
});

var parsed = send_receipt('https://www.patriotsoftware.com/wp-content/uploads/2019/12/invoice-vs.-receipt-image-of-receipt.jpg');

//parsed.then(function(result){
//    console.log(result);
//})

module.exports = send_receipt;