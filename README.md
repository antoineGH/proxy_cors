## Proxy Cors

### Introduction

Proxy server to help frontends running in the browser beat the same origin policy.

The proxy act as an express middleware to apply `res.header('Access-Control-Allow-Origin', '*');` and deal requests as from server-to-server.

That way, a server-to-server request could be completed, where the browser's same-origin policy would block it.

### Configuration

Customize the endpoint URL and pass custom parameters if needed.

```
app.get('/cityfalcon/:identifiers/:language/:token', (req, res) => {
	const identifiers = req.params.identifiers
	const language = req.params.language
	const token = req.params.token
```

Update the request URL

```
request(
		{
			url: `https://sandbox-api.cityfalcon.com/v0.2/stories?identifier_type=assets&identifiers=${identifiers}&time_filter=mth1&categories=mp%2Cop&min_cityfalcon_score=0&order_by=top&languages=${language}&all_languages=false&access_token=${token}`,
		},
```

### Run the server

```
npm install
npm start
```

Then visit `localhost:3000/endpoint:slug`.

```

#### Enjoy!
```
