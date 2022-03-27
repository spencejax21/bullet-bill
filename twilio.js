require('dotenv').config()
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

let send_text = ((msg, number) =>{
    client.messages.create({
     body: msg,
     from: '+14422504664',
     to: number
   })
  //.then(message => console.log(message.sid));
});

module.exports = send_text;
    