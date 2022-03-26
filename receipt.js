const axios = require('axios');

let send_receipt = (async () => {
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
                    url: "https://www.patriotsoftware.com/wp-content/uploads/2019/12/invoice-vs.-receipt-image-of-receipt.jpg",
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

send_receipt();
module.exports = send_receipt;