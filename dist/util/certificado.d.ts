declare const _exports: typeof Certificado;
export = _exports;
declare class Certificado {
    /**
     *
     * @param {Buffer} pfx
     * @param {string} passphrase
     * @returns {{cert: string, key: string}}
     */
    static p12ToPem(pfx: Buffer, passphrase: string): {
        cert: string;
        key: string;
    };
}
