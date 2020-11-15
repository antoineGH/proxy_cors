const express = require('express')
const request = require('request')

const app = express()

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*')
	next()
})

// City Falcon Endpoint Identifier
app.get('/cityfalcon/:identifiers/:language/:token', (req, res) => {
	const identifiers = req.params.identifiers
	const language = req.params.language
	const token = req.params.token
	request(
		{
			// url: `https://sandbox-api.cityfalcon.com/v0.2/stories?identifier_type=assets&identifiers=${identifiers}&time_filter=mth1&categories=mp%2Cop&order_by=top&languages=${language}&all_languages=false&access_token=${token}`,
			url: `https://sandbox-api.cityfalcon.com/v0.2/stories?identifier_type=assets&identifiers=Microsoft, Apple&time_filter=mth1&access_token=9e522ad481d49a67ba237d3445b5eea849576a83e8ab46f9911f30406c42f810`,
		},
		(error, response, body) => {
			if (error || response.statusCode !== 200) {
				return res.status(500).json({ type: 'error', message: err.message })
			}

			res.json(JSON.parse(body))
		}
	)
})

// City Falcon Endpoint
app.get('/tickers/:tickers/:language/:token', (req, res) => {
	const tickers = req.params.tickers
	const language = req.params.language
	const token = req.params.token
	request(
		{
			url: `https://sandbox-api.cityfalcon.com/v0.2/stories?identifier_type=assets&identifiers=${tickers}&time_filter=mth1&categories=mp%2Cop&order_by=top&languages=${language}&all_languages=false&access_token=${token}`,
		},
		(error, response, body) => {
			if (error || response.statusCode !== 200) {
				return res.status(500).json({ type: 'error', message: err.message })
			}

			res.json(JSON.parse(body))
		}
	)
})

// const PORT = process.env.PORT || 80
const PORT = process.env.PORT || 443
app.listen(PORT, () => console.log(`listening on ${PORT}`))
