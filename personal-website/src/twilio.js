import {TWILIO_ACCT_ID, TWILIO_AUTH, PHONE_NUM, TWILIO_PHONE}  from './credentials'
const client = require("twilio");
const twilio = new client(TWILIO_ACCT_ID, TWILIO_AUTH)
const axios = require('axios')
const qs = require('qs')
export const Message= async (message)=> {
    await(axios.post("https://api.twilio.com/2010-04-01/Accounts/" + TWILIO_ACCT_ID + "/Messages.json", qs.stringify({
        Body: message,
        From: TWILIO_PHONE,
        To: PHONE_NUM
      }), {
        auth: {
          username: TWILIO_ACCT_ID,
          password: TWILIO_AUTH
        }
      }));
}