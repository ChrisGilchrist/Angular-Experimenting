const express = require('express')
const app = express()
const port = 3000

const my_client_id = '';
const my_client_secret = '';
const redirect_uri = 'http://localhost:3000';

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', function(req, res) {
    var scopes = 'user-read-private user-read-email';
    res.redirect('https://accounts.spotify.com/authorize' +
        '?response_type=code' +
        '&client_id=' + my_client_id +
        (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
        '&redirect_uri=' + encodeURIComponent(redirect_uri));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})