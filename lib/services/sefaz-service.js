let axios = require("axios").default, https = require("https"), VERSION = require("../env").VERSION;

class Instance {
    constructor(t) {
        var {
            baseURL: e,
            ca: s,
            cert: a,
            key: r
        } = t, a = Object.assign({
            cert: a,
            key: r,
            ca: s
        }, {
            ...t.httpsOptions
        }), r = new https.Agent(a), s = Object.assign({
            baseURL: e,
            headers: {
                "User-Agent": "node-mde/" + VERSION,
                "Content-Type": "application/soap+xml; charset=utf-8"
            },
            httpsAgent: r,
            timeout: 6e4
        }, {
            ...t.requestOptions
        }), a = axios.create({
            ...s
        });
        this.instance = a;
    }
    async request(e) {
        try {
            var {
                status: s,
                data: t
            } = await this.instance(e);
            return {
                status: s,
                data: t
            };
        } catch (t) {
            return t.response ? ({
                status: e,
                data: s
            } = t.response, {
                status: e,
                data: s
            }) : t.request ? "ECONNABORTED" === t.code ? {
                status: 504,
                data: `<error>${t.message || t}</error>`
            } : {
                status: 502,
                data: `<error>${t.message || t}</error>`
            } : {
                status: 500,
                data: `<error>${t.message || t}</error>`
            };
        }
    }
}

module.exports = Instance;