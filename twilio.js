const accountSid = 'AC9a9794053d967200e56bc5df8b1d8031'
const authToken = 'c13a3a386fea9f58e5d13f97d27a4fad'
const client = require('twilio')(accountSid, authToken);

let send_text = ((msg, number) =>{
    client.messages.create({
     body: msg,
     from: '+14422504664',
     to: number
   })
  .then(message => console.log(message.sid));
});

module.exports = send_text;
    