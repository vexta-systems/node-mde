export = controller;
declare const controller: Readonly<{
    DistribuicaoNFeController: {
        new (): {};
        enviar(opts: any): Promise<{
            data: {
                tpAmb: string;
                verAplic: string;
                cStat: string;
                xMotivo: string;
                dhResp: string;
                ultNSU: string;
                maxNSU: string;
                docZip: [{
                    xml: string;
                    json: any;
                    nsu: string;
                    schema: string;
                }];
            };
            error: string;
            reqXml: string;
            resXml: string;
            status: number;
        }>;
        enviarInterno(opts: any): Promise<{
            data: {
                tpAmb: string;
                verAplic: string;
                cStat: string;
                xMotivo: string;
                dhResp: string;
                ultNSU: string;
                maxNSU: string;
                docZip: any[];
            };
            status: number;
        }>;
    };
    DistribuicaoCTeController: {
        new (): {};
        enviar(opts: any): Promise<{
            data: {
                tpAmb: string;
                verAplic: string;
                cStat: string;
                xMotivo: string;
                dhResp: string;
                ultNSU: string;
                maxNSU: string;
                docZip: [{
                    xml: string;
                    json: any;
                    nsu: string;
                    schema: string;
                }];
            };
            error: string;
            reqXml: string;
            resXml: string;
            status: number;
        }>;
        enviarInterno(opts: any): Promise<{
            data: {
                tpAmb: string;
                verAplic: string;
                cStat: string;
                xMotivo: string;
                dhResp: string;
                ultNSU: string;
                maxNSU: string;
                docZip: any[];
            };
            status: number;
        }>;
    };
    RecepcaoController: {
        new (): {};
        enviar(opts: any): Promise<{
            data: {
                idLote: string;
                tpAmb: string;
                verAplic: string;
                cOrgao: string;
                cStat: string;
                xMotivo: string;
                infEvento: [{
                    tpAmb: string;
                    verAplic: string;
                    cOrgao: string;
                    cStat: string;
                    xMotivo: string;
                    chNFe: string;
                    tpEvento: string;
                    xEvento: string;
                    nSeqEvento: string;
                    CNPJDest: string;
                    dhRegEvento: string;
                    nProt: string;
                }];
            };
            error: string;
            reqXml: string;
            resXml: string;
            status: number;
        }>;
    };
}>;
