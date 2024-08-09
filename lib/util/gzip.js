let zlib = require("zlib");

class Gzip {
    static unzip(e) {
        let i = Buffer.from(e, "base64");
        return new Promise((t, r) => {
            zlib.unzip(i, function(e, i) {
                e && r(e);
                e = i.toString("utf8");
                t(e);
            });
        });
    }
}

module.exports = Object.freeze(Gzip);