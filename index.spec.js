/* eslint-env jest */
/* eslint-env jasmine */
const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '.env') })

const ringcentral = require('ringcentral-client')
const RingCentralClient = ringcentral.Client
const SDK = require('ringcentral')

let sdk = new SDK({
  server: process.env.server, // Optional, default is production server
  appKey: process.env.appKey,
  appSecret: process.env.appSecret
})
let client = new RingCentralClient(sdk)

beforeEach(() => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 64000
})

test('default test', async () => {
  await sdk.platform().login({
    'username': process.env.username,
    'extension': process.env.extension,
    'password': process.env.password
  })
  await client.account().get()
  await sdk.platform().logout()
  expect(1 + 1).toBe(2)
})
