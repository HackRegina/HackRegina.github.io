const clientId = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET
const axios = require('axios')

exports.handler = (event, context, callback) => {

  axios.post('https://github.com/login/oauth/access_token', {
    client_id: clientId,
    client_secret: clientSecret,
    code: event.code,
  }, {
    headers: {
      'X-OAuth-Scopes': 'public_repo',
      'X-Accepted-OAuth-Scopes': 'public_repo',
      'Accept': 'application/json'
    }
  }).then(({data}) => {
    callback(null, data)
  }).catch(({response}) => {
    callback(response.data)
  })
}
