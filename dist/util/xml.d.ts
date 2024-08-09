declare const _exports: typeof Xml;
export = _exports;
declare class Xml {
    /**
     *
     * @param {string} xml
     * @returns {string}
     */
    static envelopar(xml: string): string;
    /**
     *
     * @param {Object} json
     * @returns {string}
     */
    static jsonToXml(json: any): string;
    /**
     *
     * @param {string} xml
     * @returns {Object}
     */
    static xmlToJson(xml: string): any;
}
