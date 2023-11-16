const express = require('express');
const fs = require('fs');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended:false}));

router.get('/', (req, res) => {
    fs.readFile("message.txt", (err, data) => {
        if (err) {
            console.log(err);
            data = "NO DATA EXISTS";
        } else {
            console.log(data);
            res.send(`${data}<form action="/" method="POST" onsubmit="document.getElementById('username').value=localStorage.getItem('username')">
                <input type="text" name="message" id="message">
                <input type="hidden" name="username" id="username">
                <button type="submit">Send</button></form>`);
        }
    });
});

router.post('/', (req, res) => {
    // Use req.body, not res.body
    console.log(req.body);
    const username = req.body.username;
    const message = req.body.message;

    fs.writeFile("message.txt", `${username}: ${message}`, { flag: 'a' }, (err) => {
        if (err) {
            console.log(err);
        }
        res.redirect('/');
    });
});

module.exports = router;
