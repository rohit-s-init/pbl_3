// Download the helper library from https://www.twilio.com/docs/node/install
const twilio = require("twilio"); // Or, for ESM: import twilio from "twilio";
require("dotenv").config();
console.log(process.env.TWILIO_ACCOUNT_SID)
console.log(process.env.TWILIO_AUTH_TOKEN)


// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

async function createCall() {
    const call = await client.calls.create({
        from: "+17018952445",
        to: "+918459781390",
        twiml: `
            <Response>
                <Gather input="speech" action="/process-speech" method="POST">
                    <Say>Hello Rohit, please say something after the beep.</Say>
                </Gather>
                <Say>We did not receive any input. Goodbye!</Say>
            </Response>
        `,
    });

    console.log(call.sid);
}

module.exports = {
    createCall
};