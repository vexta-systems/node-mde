export = helper;
declare const helper: Readonly<{
    DistribuicaoNFeHelper: {
        new (): {};
        enviarConsulta(data: string, opts: any): Promise<{
            status: number;
            data: string;
        }>;
        montarRequest(opts: any): string;
        montarResponse(data: string): Promise<{
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
            error: string;
        }>;
    };
    DistribuicaoCTeHelper: {
        new (): {};
        enviarConsulta(data: string, opts: any): Promise<{
            status: number;
            data: string;
        }>;
        montarRequest(opts: any): string;
        montarResponse(data: string): Promise<{
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
            error: string;
        }>;
    };
    RecepcaoHelper: {
        new (): {};
        enviarEvento(data: string, opts: any): Promise<{
            status: number;
            data: string;
        }>;
        montarRequest(opts: any): string;
        montarResponse(data: string): {
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
            error: string;
        };
    };
    RetornoHelper: {
        new (): {};
        montarRetorno(options: {
            json: any;
            data: string;
            retornoSefaz: {
                data: string;
                status: number;
            };
        }): {
            data: any;
            reqXml: string;
            resXml: string;
            status: number;
        };
        juntarRetornos(retornos: any): {
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
        };
    };
}>;
