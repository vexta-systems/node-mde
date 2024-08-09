let Assinatura = require("./assinatura"), Certificado = require("./certificado"), Data = require("./data"), Gzip = require("./gzip"), Xml = require("./xml"), ZeroPad = require("./zeroPad"), util = Object.freeze({
    Assinatura: Assinatura,
    Certificado: Certificado,
    Data: Data,
    Gzip: Gzip,
    Xml: Xml,
    ZeroPad: ZeroPad
});

module.exports = util;