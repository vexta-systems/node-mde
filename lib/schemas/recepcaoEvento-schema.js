class RecepcaoSchema {
    static montarSchema(e) {
        var t = {
            cOrgao: e.cOrgao,
            tpAmb: e.tpAmb
        };
        return e.cnpj ? t.CNPJ = e.cnpj : t.CPF = e.cpf, t.chNFe = e.chNFe, t.dhEvento = e.dhEvento, 
        t.tpEvento = e.tpEvento, t.nSeqEvento = e.nSeqEvento, t.verEvento = "1.00", 
        t.detEvento = {
            descEvento: e.descEvento,
            "@_versao": "1.00"
        }, e.xJust && (t.detEvento.xJust = e.xJust), t["@_Id"] = e.infEventoId, 
        {
            nfeDadosMsg: {
                envEvento: {
                    idLote: e.idLote,
                    evento: {
                        infEvento: t,
                        "@_versao": "1.00"
                    },
                    "@_xmlns": "http://www.portalfiscal.inf.br/nfe",
                    "@_versao": "1.00"
                },
                "@_xmlns": "http://www.portalfiscal.inf.br/nfe/wsdl/NFeRecepcaoEvento4"
            }
        };
    }
}

module.exports = Object.freeze(RecepcaoSchema);