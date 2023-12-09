import Mysql, { MySQLOptions, MySQLPromisePool } from '@fastify/mysql'
import fp from 'fastify-plugin'

export default fp<MySQLOptions>(async (fastify) => {
    void fastify.register(Mysql, {
        host: process.env.DB_HOST,
        user: process.env.DB_LOGIN,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: +(process.env.DB_PORT || 3306),
        promise: true,
    })
})

// if you passed promise = true
declare module 'fastify' {
    interface FastifyInstance {
        mysql: MySQLPromisePool
    }
}