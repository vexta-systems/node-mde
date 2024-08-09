declare const _exports: typeof DistribuicaoNFeController;
export = _exports;
declare class DistribuicaoNFeController {
    /**
     *
     * @param {Object} opts
     * @returns {Promise<{data:{tpAmb: string,verAplic: string,cStat: string,xMotivo: string,dhResp: string,ultNSU: string,maxNSU: string, docZip:[{xml: string,json: Object,nsu: string,schema: string}]}, error: string, reqXml: string, resXml: string, status: number}>}
     */
    static enviar(opts: any): Promise<{
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
    static enviarInterno(opts: any): Promise<{
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
}
