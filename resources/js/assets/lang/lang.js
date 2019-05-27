let json = require('./../lang/en.json');

function trans (lang = 'en') {

    try {

       // json = require(`/de.json`);
       json = require(`./../lang/${lang}.json`);

    } catch (e) {}

    return json;

}

module.exports = trans;