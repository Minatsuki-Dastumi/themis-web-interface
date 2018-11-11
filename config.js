module.exports = {
	contestName: 'Themis Web Interface',
	port: 80,
	sessionSecret: 'gisjWikvZWHMiQzNmTV7',
	allowScoreboard: true,
	registration: {
		allow: true,
		recaptcha: {
			enable: true,
			// Site and Secret Key get on https://www.google.com/recaptcha
			siteKey: '6LdTcmYUAAAAAM-uWP8CLMuS3k4p64i09ta5w2xf',
			secretKey: '6LdTcmYUAAAAAMw1aSjZQwdbs5g5ka9UPMZvhoEm'
		}
	},
	contestMode: {
		// Remember disable Scoreboard
		enabled: false,
		// Month is 0 based (0 = January)
		startTime: new Date(2018, 9, 13, 13, 0, 0),
		endTime: new Date(2018, 9, 13, 17, 0, 0),
		// Hide judge logs until contest ends
		hideLogs: true
	},
	// Config the rate-limiter
	rateLimiter: {
		// every limiter has 4 parameters:
		// - free tries: The number of request that can be assigned within the time window without any wait.
		// - min wait: The minimum wait time between 2 limited requests. (in seconds)
		// - max wait: The maximum wait time between 2 limited requests.
		// - life time: The lifetime of a logged request.
		// For each site, set the rate limiter value to an array of 4 numbers to activathe the rate limiter,
		// or set to null to disable it.
		// For example, the previously used config:
		// submit: [30, 2 * 60 * 60, 2 * 60 * 60, 60 * 60],
		// register: [30, 25 * 60 * 60, 25 * 60 * 60, 24 * 60 * 60],
		// logRequest: [2400, 2 * 60 * 60, 2 * 60 * 60, 60 * 60]
		submit: null,
		register: [30, 25 * 60 * 60, 25 * 60 * 60, 24 * 60 * 60],
		logRequest: null
	}
};
