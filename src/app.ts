import * as path from 'path';
import AutoLoad, { AutoloadPluginOptions } from '@fastify/autoload';
import { FastifyPluginAsync } from 'fastify';
import { fileURLToPath } from 'url'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export type AppOptions = {
  https?: {
    key: string,
    cert: string
  }
} & Partial<AutoloadPluginOptions>;


// Pass --options via CLI arguments in command to enable these options.
const options: AppOptions = {
}

if (process.env.NODE_ENV === 'production') {
  options.https = {
    key: '~/ssl/cineplex/key.pem',
    cert: '~/ssl/cineplex/cert.pem'
  }
}


const app: FastifyPluginAsync<AppOptions> = async (
  fastify,
  opts
): Promise<void> => {
  // Place here your custom code!


  // Do not touch the following lines 

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  void fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: opts,
    forceESM: true
  })

  fastify.register(import('fastify-graceful-shutdown'))

  // This loads all plugins defined in routes
  // define your routes in one of these
  void fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: opts,
    forceESM: true
  })


  // fastify.ready(async err => {
  //   if (err) throw err
  //   await fastify.swagger()
  // })
};

export default app;
export { app, options }
