let ZONES = require("../env").ZONES;

class ZoneValidator {
    constructor(e) {
        e = e.timezone;
        this.timezone = e, this.error = "";
    }
    isValid() {
        if (this.timezone) {
            if (!ZONES.includes(this.timezone)) return !(this.error = "Timezone inválido.");
        } else this.timezone = "America/Sao_Paulo";
        return !0;
    }
    getValues() {
        return {
            timezone: this.timezone
        };
    }
    getError() {
        return this.error;
    }
}

module.exports = Object.freeze(ZoneValidator);