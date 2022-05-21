require('dotenv').config();

module.exports = {
    seeds: {
        directory: './data/seeds'
    },
    development: {
        client: process.env.AUTHDATABASE,
        connection: {
            host : process.env.HOST,
            port : process.env.PORT_DATABASE,
            user : process.env.USER,
            password : process.env.PASSWORD,
            database : process.env.DATABASE
        },
    },




};