const axios = require('axios');

let send_receipt = (async (url) => {
    try{
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
                    url: url,
                    headers: {
                        'x-custom-key': 'string'
                    }
                }
            }
        );
        console.log(res.data.text.text);
    }catch(e){
        console.log(e);
    }
});

//send_receipt("https://www.patriotsoftware.com/wp-content/uploads/2019/12/invoice-vs.-receipt-image-of-receipt.jpg");
module.exports = send_receipt;