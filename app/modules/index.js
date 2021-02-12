const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);

const commands = {};

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file));
        const name = file.split('.')[0];
        commands[name] = model;
    });

module.exports = commands;
