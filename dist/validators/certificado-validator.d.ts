declare const _exports: typeof CertificadoValidator;
export = _exports;
declare class CertificadoValidator {
    /**
     *
     * @param {Object} config
     * @param {Buffer} [config.pfx]
     * @param {string} [config.passphrase]
     * @param {Buffer | string} [config.cert]
     * @param {Buffer | string} [config.key]
     */
    constructor(config: {
        pfx?: Buffer;
        passphrase?: string;
        cert?: Buffer | string;
        key?: Buffer | string;
    });
    pfx: Buffer<ArrayBufferLike>;
    passphrase: string;
    cert: string | Buffer<ArrayBufferLike>;
    key: string | Buffer<ArrayBufferLike>;
    error: string;
    isValid(): boolean;
    getValues(): {
        cert: string;
        key: string;
    };
    getError(): string;
}
