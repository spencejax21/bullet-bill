const axios = require('axios');

let send_receipt = (async () => {
    try{
        const response = await axios(
            {
                url: '/receipt/v1/verbose/url',
                method: 'post',
                baseURL: 'https:://api.taggun.io/api',
                headers: {
                    'Content-Type' : 'application/json',
                    'apikey': '6d2fb860ad2211ec8215c512ccf27e54'
                },
                data: {
                    url: "https://www.patriotsoftware.com/wp-content/uploads/2019/12/invoice-vs.-receipt-image-of-receipt.jpg",
                    headers: {
                        'x-custom-key': 'string'
                    }
                }
            }
        );
        return response;
    }catch(e){
        console.log(e);
    }
});

let res = send_receipt();
console.log(res);

module.exports = send_receipt;