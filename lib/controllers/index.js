let DistribuicaoNFeController = require("./distribuicaoNFe-controller"), DistribuicaoCTeController = require("./distribuicaoCTe-controller"), RecepcaoController = require("./recepcaoEvento-controller"), controller = Object.freeze({
    DistribuicaoNFeController: DistribuicaoNFeController,
    DistribuicaoCTeController: DistribuicaoCTeController,
    RecepcaoController: RecepcaoController
});

module.exports = controller;