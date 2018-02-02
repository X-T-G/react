import config from './config'
import * as data from './data'

export default {
	name: "mk-app-stock-card",
	version: "1.0.3",
	description: "mk-app-stock-card",
	meta: data.getMeta(),
	components: [],
	dependencies: ['mk-aar-grid'], //需要在网站项目手动npm install --save mk-aar-grid(aar的意思：action and reducer)
	config: config,
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'), require('./action'), require('./reducer'))
		}, "mk-app-stock-card")
	}
}