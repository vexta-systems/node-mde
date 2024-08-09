let DateTime = require("luxon").DateTime;

class Data {
    static toFormat(e, t) {
        return DateTime.fromJSDate(e).setZone(t).toFormat("yyyy-MM-dd'T'HH:mm:ssZZ");
    }
}

module.exports = Object.freeze(Data);