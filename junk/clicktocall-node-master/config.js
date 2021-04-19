// Define app configuration in a single location, but pull in values from
// system environment variables (so we don't check them in to source control!)
module.exports = {
    // Twilio Account SID - found on your dashboard
    accountSid: 'AC5354382868db5c736cf94eebc04a7bc5',

    // Twilio Auth Token - found on your dashboard
    authToken: 'ac459c3bf9f70651d6476099b4ad6673',

    // A Twilio number that you have purchased through the twilio.com web
    // interface or API
    twilioNumber: '+1 249 501 5162',

    // The port your web application will run on
    port: process.env.PORT || 3000,
};
