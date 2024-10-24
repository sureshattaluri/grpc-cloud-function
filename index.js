const express = require('express');
const app = express();

app.use(express.json()); // To parse JSON body

// Cloud Function that takes input and returns a response
app.post('/', (req, res) => {
    const userInput = req.body.queryResult.parameters.input_text;

    // Create a response string with concatenated input
    const responseString = `Hello, you said: ${userInput}`;

    // Send the response back to the chatbot
    res.json({
        fulfillmentText: responseString
    });
});

// Export the app so it can be deployed
exports.helloWorld = app;
