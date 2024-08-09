declare const _exports: typeof Assinatura;
export = _exports;
declare class Assinatura {
    /**
     *
     * @param {string} cert
     * @param {string} key
     * @param {string} xml
     * @returns {string}
     */
    static assinarXml(cert: string, key: string, xml: string): string;
}
