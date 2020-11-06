const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('cowlist', 'jtmst', null, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

// ---------------------- test connection --------------------------
sequelize
    .authenticate()
    .then((err) => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


// ------------------------- model -----------------------------
const Cow = sequelize.define('cow', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING
    }
})

// ------------------------- Querys -----------------------------
// post - insert one cow
let createCow = (cow) => {
    return Cow.create({
        name: cow.name,
        description: cow.description
    })
}
// get - retrieve all cows
let retrieveCows = () => {
    return Cow.findAll()
}

Cow.sync({ alter: true })

// module.exports = sequelize;
// module.exports.cow = Cow;
// module.exports.createCow = createCow;
// module.exports.retrieveCows = retrieveCows;

module.exports = {
    sequelize,
    createCow,
    retrieveCows,
}