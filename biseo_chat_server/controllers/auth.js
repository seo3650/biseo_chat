const { jwtSign } = require('../utils/jwt.js');
const client = require('../utils/sso.js');

const login = (req, res) => {
	const {url, state} = client.getLoginParams()
	req.session.state = state
	res.json({
		url: url
	})
}

const loginCallback = async (req, res) => {
	const {code, state} = req.query
	const stateBefore = req.session.state
	if (stateBefore !== state){
		res.status(401).json({
			error: 'TOKEN MISMATCH: session might be hijacked!',
			status: 401,
		})
		return
	}

	const user = await client.getUserInfo(code)
	const token = jwtSign(user, req.app.get('jwt-secret'))
	
	res.status(200).json({
		token: token,
		status: 200,
	})
}

module.exports = {
	login: login,
	loginCallback: loginCallback
}
