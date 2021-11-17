const client = require("twilio");
const axios = require('axios')
const qs = require('qs')
export const Message= async (message)=> {
    console.log(process.env)
    await(axios.post("https://api.twilio.com/2010-04-01/Accounts/" + process.env.TWILIO_ACCT_ID + "/Messages.json", qs.stringify({
        Body: message,
        From: process.env.TWILIO_PHONE,
        To: process.env.PHONE_NUM
      }), {
        auth: {
          username: process.env.TWILIO_ACCT_ID,
          password: process.env.TWILIO_AUTH
        }
      }));
}