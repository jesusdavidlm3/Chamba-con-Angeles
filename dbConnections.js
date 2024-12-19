import mariadb from 'mariadb'
import { v4 as idGenerator } from 'uuid'

const db = mariadb.createPool({
    host: process.env.DBHOST,
	user: 'root',
	password: process.env.DBPASSWORD,
	database: process.env.DBNAME,
	port: process.env.DBPORT,
	acquireTimeout: 10000,
	conexionLimit: 5
})