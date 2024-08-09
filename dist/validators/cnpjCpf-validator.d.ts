declare const _exports: typeof CnpjCpfValidator;
export = _exports;
declare class CnpjCpfValidator {
    /**
     *
     * @param {Object} config
     * @param {string} [config.cnpj]
     * @param {string} [config.cpf]
     */
    constructor(config: {
        cnpj?: string;
        cpf?: string;
    });
    cnpj: string;
    cpf: string;
    error: string;
    isValid(): boolean;
    getValues(): {
        cnpj: string;
        cpf: string;
    };
    getError(): string;
}
