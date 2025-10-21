'use strict'

const axios = require('axios').default
const https = require('https')
const httpsAgent = https.Agent
const httpAgent = require('http').Agent

const { VERSION } = require('../env')

class Instance {
  constructor(opts) {
    const { baseURL, ca, cert, key } = opts

    const AgentOptions = {
      ...{
        cert: cert,
        key: key,
        ca: ca,
        rejectUnauthorized: false,
      },
      ...opts.httpsOptions,
      keepAlive: false,
    }

    const httpsAgent = new https.Agent(AgentOptions)

    const requestOptions = {
      ...opts.requestOptions,
      ...{
        baseURL: baseURL,
        headers: {
          'User-Agent': `@Vexta/node-mde/${VERSION}`,
          'Content-Type': 'application/soap+xml; charset=utf-8',
        },
        httpsAgent: httpsAgent,
        timeout: 60000,
      },
    }
    // if (baseURL.startsWith('https')) {
    //   axios.defaults.httpAgent = new httpsAgent(AgentOptions)
    // } else {
    //   axios.defaults.httpAgent = new httpAgent(AgentOptions)
    // }
    // console.error('REQUESToPTIONS', {
    //   ...requestOptions,
    // })
    const instance = axios.create({
      ...requestOptions,
    })

    this.instance = instance
  }

  /**
   * @returns {Promise<{status: number, data: string}>}
   */
  async request(config) {
    try {
      const response = await this.instance(config)

      const { status, data } = response

      return { status, data }
    } catch (error) {
      /*
      console.error('Vexta/node-mde', error.message || error.mensagem || '?')

      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('response.data =>', error.response.data)
        console.error('response.status =>', error.response.status)
        console.error('response.headers =>', error.response.headers)
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.error('request =>', error.request._currentUrl || error.request)
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error.message =>', error.message)
      }
      console.error('error.config =>', error.config)
      */
      if (error.response) {
        const { status, data } = error.response

        return { status, data }
      } else if (error.request) {
        if (error.code === 'ECONNABORTED') {
          const retorno = {
            status: 504,
            data: `<error>${error.message || error}</error>`,
          }

          return retorno
        }

        const retorno = {
          status: 502,
          data: `<error>${error.message || error}</error>`,
        }

        return retorno
      } else {
        const retorno = {
          status: 500,
          data: `<error>${error.message || error}</error>`,
        }

        return retorno
      }
    }
  }
}

module.exports = Instance
