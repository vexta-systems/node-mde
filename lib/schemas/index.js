let DistribuicaoNFeSchema = require("./distribuicaoNFe-schema"), DistribuicaoCTeSchema = require("./distribuicaoCTe-schema"), RecepcaoSchema = require("./recepcaoEvento-schema"), schema = Object.freeze({
    DistribuicaoNFeSchema: DistribuicaoNFeSchema,
    DistribuicaoCTeSchema: DistribuicaoCTeSchema,
    RecepcaoSchema: RecepcaoSchema
});

module.exports = schema;