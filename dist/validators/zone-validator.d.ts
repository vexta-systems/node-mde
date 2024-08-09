declare const _exports: typeof ZoneValidator;
export = _exports;
declare class ZoneValidator {
    /**
     *
     * @param {Object} config
     * @param {'America/Araguaina' | 'America/Bahia' | 'America/Belem' | 'America/Boa_Vista' | 'America/Campo_Grande' | 'America/Cuiaba' | 'America/Fortaleza' | 'America/Maceio' | 'America/Manaus' | 'America/Noronha' | 'America/Porto_Velho' | 'America/Recife' | 'America/Rio_Branco' | 'America/Sao_Paulo'} [config.timezone = 'America/Sao_Paulo']
     */
    constructor(config: {
        timezone?: "America/Araguaina" | "America/Bahia" | "America/Belem" | "America/Boa_Vista" | "America/Campo_Grande" | "America/Cuiaba" | "America/Fortaleza" | "America/Maceio" | "America/Manaus" | "America/Noronha" | "America/Porto_Velho" | "America/Recife" | "America/Rio_Branco" | "America/Sao_Paulo";
    });
    timezone: "America/Araguaina" | "America/Bahia" | "America/Belem" | "America/Boa_Vista" | "America/Campo_Grande" | "America/Cuiaba" | "America/Fortaleza" | "America/Maceio" | "America/Manaus" | "America/Noronha" | "America/Porto_Velho" | "America/Recife" | "America/Rio_Branco" | "America/Sao_Paulo";
    error: string;
    isValid(): boolean;
    getValues(): {
        timezone: "America/Araguaina" | "America/Bahia" | "America/Belem" | "America/Boa_Vista" | "America/Campo_Grande" | "America/Cuiaba" | "America/Fortaleza" | "America/Maceio" | "America/Manaus" | "America/Noronha" | "America/Porto_Velho" | "America/Recife" | "America/Rio_Branco" | "America/Sao_Paulo";
    };
    getError(): string;
}
