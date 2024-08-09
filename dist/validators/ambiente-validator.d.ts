declare const _exports: typeof AmbienteValidator;
export = _exports;
declare class AmbienteValidator {
    /**
     *
     * @param {Object} config
     * @param {'1' | '2'} config.tpAmb
     */
    constructor(config: {
        tpAmb: "1" | "2";
    });
    tpAmb: "1" | "2";
    error: string;
    isValid(): boolean;
    getValues(): {
        tpAmb: "1" | "2";
    };
    getError(): string;
}
