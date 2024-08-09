declare const _exports: typeof DistribuicaoCTeHelper;
export = _exports;
declare class DistribuicaoCTeHelper {
    /**
     *
     * @param {string} data
     * @param {Object} opts
     * @returns
     */
    static enviarConsulta(data: string, opts: any): Promise<{
        status: number;
        data: string;
    }>;
    /**
     *
     * @param {Object} opts
     * @returns {string}
     */
    static montarRequest(opts: any): string;
    /**
     *
     * @param {string} data
     * @returns {Promise<{tpAmb: string,verAplic: string,cStat: string,xMotivo: string,dhResp: string,ultNSU: string,maxNSU: string, docZip:[{xml: string,json: Object,nsu: string,schema: string}], error: string}>}
     */
    static montarResponse(data: string): Promise<{
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
}
