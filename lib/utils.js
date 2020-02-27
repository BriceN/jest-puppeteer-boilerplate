var faker = require('faker');

module.exports = {
    generateID: function () {
        return faker.alphaNumeric(15);
    },
    generateEmail: function () {
        return faker.exampleEmail();
    }
}