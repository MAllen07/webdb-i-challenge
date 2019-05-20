const express = require('express');

const server = express();

Foobar.get('data/accounts-model.js', (req, res) => {
    return res.send('access to new database')
}
)

// your code here

module.exports = server;