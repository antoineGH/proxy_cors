const express = require('express')
const request = require('request')

const app = express()

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*')
	next()
})

// City Falcon Endpoint
app.get('/cityfalcon/:identifiers/:language/:token', (req, res) => {
	const identifiers = req.params.identifiers
	const language = req.params.language
	const token = req.params.token
	request(
		{
			url: `https://sandbox-api.cityfalcon.com/v0.2/stories?identifier_type=assets&identifiers=${identifiers}&time_filter=mth1&categories=mp%2Cop&min_cityfalcon_score=0&order_by=top&languages=${language}&all_languages=false&access_token=${token}`,
		},
		(error, response, body) => {
			if (error || response.statusCode !== 200) {
				return res.status(500).json({ type: 'error', message: err.message })
			}

			res.json(JSON.parse(body))
		}
	)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`listening on ${PORT}`))