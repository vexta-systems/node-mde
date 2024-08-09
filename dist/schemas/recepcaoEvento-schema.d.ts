declare const _exports: typeof RecepcaoSchema;
export = _exports;
declare class RecepcaoSchema {
    static montarSchema(options: any): {
        nfeDadosMsg: {
            envEvento: {
                idLote: any;
                evento: {
                    infEvento: {
                        cOrgao: any;
                        tpAmb: any;
                    };
                    '@_versao': string;
                };
                '@_xmlns': string;
                '@_versao': string;
            };
            '@_xmlns': string;
        };
    };
}
