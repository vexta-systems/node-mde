let axios = require("axios").default, https = require("https"), httpsAgent = https.Agent, httpAgent = require("http").Agent, VERSION = require("../env").VERSION;

class Instance {
    constructor(t) {
        var {
            baseURL: e,
            ca: s,
            cert: a,
            key: r
        } = t, a = {
            cert: a,
            key: r,
            ca: s,
            rejectUnauthorized: !1,
            ...t.httpsOptions,
            keepAlive: !1
        }, r = new https.Agent(a), s = {
            ...t.requestOptions,
            baseURL: e,
            headers: {
                "User-Agent": "@Vexta/node-mde/" + VERSION,
                "Content-Type": "application/soap+xml; charset=utf-8"
            },
            httpsAgent: r,
            timeout: 6e4
        }, a = axios.create({
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