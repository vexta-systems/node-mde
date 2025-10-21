'use strict'

const assert = require('assert')
const fs = require('fs')
const SefazService = require('../src/services/sefaz-service')
const { CA, DISTRIBUICAONFE, RECEPCAO, DISTRIBUICAOCTE } = require('../src/env')

const certificado = {
  cert: fs.readFileSync('certs/cert.pem', 'utf8'),
  key: fs.readFileSync('certs/key.pem', 'utf8'),
}
let tpAmb

describe('SefazService', function () {
  describe('#requestNFe()', function () {
    it('DistribuicaoNFe sem informar a Cadeia de Certificados', async function () {
      tpAmb = '2'
      const baseURL = DISTRIBUICAONFE[tpAmb]
      const requestOptions = {}
      const httpsOptions = {}

      const client = new SefazService({
        baseURL: baseURL,
        requestOptions: requestOptions,
        httpsOptions: httpsOptions,
      })

      const config = { method: 'GET' }

      const retorno = await client.request(config)
      assert.equal(retorno.status, 403)
      // assert.equal(
      //   retorno.data,
      //   '<error>unable to get local issuer certificate</error>'
      // )
    })

    it('DistribuicaoNFe sem informar cert.pem e key.pem', async function () {
      tpAmb = '2'
      const baseURL = DISTRIBUICAONFE[tpAmb]
      const requestOptions = {}
      const httpsOptions = {}

      const client = new SefazService({
        baseURL: baseURL,
        ca: CA,
        requestOptions: requestOptions,
        httpsOptions: httpsOptions,
      })

      const config = { method: 'GET' }

      const retorno = await client.request(config)

      assert.equal(retorno.status, 403)
    })

    it('DistribuicaoNFe tpAmb = "1"', async function () {
      tpAmb = '1'
      const baseURL = DISTRIBUICAONFE[tpAmb]
      const requestOptions = {}
      const httpsOptions = {}

      const client = new SefazService({
        baseURL: baseURL,
        ca: CA,
        cert: certificado.cert,
        key: certificado.key,
        tpAmb: tpAmb,
        requestOptions: requestOptions,
        httpsOptions: httpsOptions,
      })

      const config = { method: 'GET' }
      const retorno = await client.request(config)

      assert.equal(retorno.status, 200)
    })

    it('DistribuicaoNFe tpAmb = "2"', async function () {
      tpAmb = '2'
      const baseURL = DISTRIBUICAONFE[tpAmb]
      const requestOptions = {}
      const httpsOptions = {}

      const client = new SefazService({
        baseURL: baseURL,
        ca: CA,
        cert: certificado.cert,
        key: certificado.key,
        tpAmb: tpAmb,
        requestOptions: requestOptions,
        httpsOptions: httpsOptions,
      })

      const config = { method: 'GET' }

      const retorno = await client.request(config)
      // console.error('retorno.data=>', retorno.data)
      assert.equal(retorno.status, 200)
    })

    it('NFeRecepcaoEvento4 sem informar a Cadeia de Certificados', async function () {
      tpAmb = '2'
      const baseURL = RECEPCAO[tpAmb]
      const requestOptions = {}
      const httpsOptions = {}

      const client = new SefazService({
        baseURL: baseURL,
        requestOptions: requestOptions,
        httpsOptions: httpsOptions,
      })

      const config = { method: 'GET' }

      const retorno = await client.request(config)

      assert.equal(retorno.status, 403)
      // assert.equal(retorno.data,'<error>unable to get local issuer certificate</error>')
    })

    it('NFeRecepcaoEvento4 sem informar cert.pem e key.pem', async function () {
      tpAmb = '2'
      const baseURL = RECEPCAO[tpAmb]
      const requestOptions = {}
      const httpsOptions = {}

      const client = new SefazService({
        baseURL: baseURL,
        ca: CA,
        requestOptions: requestOptions,
        httpsOptions: httpsOptions,
      })

      const config = { method: 'GET' }

      const retorno = await client.request(config)

      assert.equal(retorno.status, 403)
    })

    it('NFeRecepcaoEvento4 tpAmb = "1"', async function () {
      tpAmb = '1'
      const baseURL = RECEPCAO[tpAmb]
      const requestOptions = {}
      const httpsOptions = {}

      const client = new SefazService({
        baseURL: baseURL,
        ca: CA,
        cert: certificado.cert,
        key: certificado.key,
        tpAmb: tpAmb,
        requestOptions: requestOptions,
        httpsOptions: httpsOptions,
      })

      const config = { method: 'GET' }

      const retorno = await client.request(config)

      assert.equal(retorno.status, 200)
    })

    it('NFeRecepcaoEvento4 tpAmb = "2"', async function () {
      tpAmb = '2'
      const baseURL = RECEPCAO[tpAmb]
      const requestOptions = {}
      const httpsOptions = {}

      const client = new SefazService({
        baseURL: baseURL,
        ca: CA,
        cert: certificado.cert,
        key: certificado.key,
        tpAmb: tpAmb,
        requestOptions: requestOptions,
        httpsOptions: httpsOptions,
      })

      const config = { method: 'GET' }

      const retorno = await client.request(config)

      assert.equal(retorno.status, 200)
    })
  })

  describe('#requestCTe()', function () {
    it('DistribuicaoCTe sem informar a Cadeia de Certificados', async function () {
      const baseURL = DISTRIBUICAOCTE['2']
      const requestOptions = {}
      const httpsOptions = {}

      const client = new SefazService({
        baseURL: baseURL,
        requestOptions: requestOptions,
        httpsOptions: httpsOptions,
      })

      const config = { method: 'GET' }

      const retorno = await client.request(config)
      assert.equal(retorno.status, 403)
      // assert.equal(
      //   retorno.data,
      //   '<error>unable to get local issuer certificate</error>'
      // )
    })

    it('DistribuicaoCTe sem informar cert.pem e key.pem', async function () {
      const baseURL = DISTRIBUICAOCTE['2']
      const requestOptions = {}
      const httpsOptions = {}

      const client = new SefazService({
        baseURL: baseURL,
        ca: CA,
        requestOptions: requestOptions,
        httpsOptions: httpsOptions,
      })

      const config = { method: 'GET' }

      const retorno = await client.request(config)

      assert.equal(retorno.status, 403)
    })

    it('DistribuicaoCTe', async function () {
      tpAmb = '2'
      const baseURL = DISTRIBUICAOCTE[tpAmb]
      const requestOptions = {}
      const httpsOptions = {}

      const client = new SefazService({
        baseURL: baseURL,
        ca: CA,
        cert: certificado.cert,
        key: certificado.key,
        tpAmb: tpAmb,
        requestOptions: requestOptions,
        httpsOptions: httpsOptions,
      })

      const config = { method: 'GET' }
      const retorno = await client.request(config)

      assert.equal(retorno.status, 200)
    })

    it('CTeRecepcaoEvento4 sem informar a Cadeia de Certificados', async function () {
      const baseURL = RECEPCAO['2']
      const requestOptions = {}
      const httpsOptions = {}

      const client = new SefazService({
        baseURL: baseURL,
        requestOptions: requestOptions,
        httpsOptions: httpsOptions,
      })

      const config = { method: 'GET' }

      const retorno = await client.request(config)

      assert.equal(retorno.status, 403)
      // assert.equal(
      //   retorno.data,
      //   '<error>unable to get local issuer certificate</error>'
      // )
    })

    it('CTeRecepcaoEvento4 sem informar cert.pem e key.pem', async function () {
      const baseURL = RECEPCAO['2']
      const requestOptions = {}
      const httpsOptions = {}

      const client = new SefazService({
        baseURL: baseURL,
        ca: CA,
        requestOptions: requestOptions,
        httpsOptions: httpsOptions,
      })

      const config = { method: 'GET' }

      const retorno = await client.request(config)

      assert.equal(retorno.status, 403)
    })

    it('CTeRecepcaoEvento4', async function () {
      const baseURL = RECEPCAO['2']
      const requestOptions = {}
      const httpsOptions = {}

      const client = new SefazService({
        baseURL: baseURL,
        ca: CA,
        cert: certificado.cert,
        key: certificado.key,
        requestOptions: requestOptions,
        httpsOptions: httpsOptions,
      })

      const config = { method: 'GET' }

      const retorno = await client.request(config)

      assert.equal(retorno.status, 200)
    })
  })
})
