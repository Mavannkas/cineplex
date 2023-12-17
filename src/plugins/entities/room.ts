import { FastifyEnvOptions } from "@fastify/env"
import fp from 'fastify-plugin'
import RoomManager from "../../model/room/room.manager.js"



export default fp<FastifyEnvOptions>(async (fastify) => {

    void fastify.decorate("room", new RoomManager(fastify.mysql))
})

declare module 'fastify' {
    interface FastifyInstance {
        room: RoomManager
    }
}