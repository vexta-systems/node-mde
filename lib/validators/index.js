let AmbienteValidator = require("./ambiente-validator"), CertificadoValidator = require("./certificado-validator"), ChaveValidator = require("./chave-validator"), CnpjCpfValidator = require("./cnpjCpf-validator"), EventoValidator = require("./evento-validator"), LoteValidator = require("./lote-validator"), NsuValidator = require("./nsu-validator"), UfValidator = require("./uf-validator"), ZoneValidator = require("./zone-validator"), validator = Object.freeze({
    AmbienteValidator: AmbienteValidator,
    CertificadoValidator: CertificadoValidator,
    ChaveValidator: ChaveValidator,
    CnpjCpfValidator: CnpjCpfValidator,
    EventoValidator: EventoValidator,
    LoteValidator: LoteValidator,
    NsuValidator: NsuValidator,
    UfValidator: UfValidator,
    ZoneValidator: ZoneValidator
});

module.exports = validator;