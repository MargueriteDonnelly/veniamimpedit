import assert from 'node:assert/strict'
import { relative } from 'node:path'

import { UserExtDTO } from './test.model'

import { testConfig } from '@/root.config'


const filename = relative(process.cwd(), __filename).replace(/\\/ug, '/')

describe(filename, () => {

  const path = '/user/ext/'

  it('Should work 1', async () => {
    const { httpRequest } = testConfig

    const uid = 1
    const url = `${path}${uid}`

    const resp = await httpRequest
      .get(url)
      .expect(200)
    const ret = resp.body as UserExtDTO[]
    assert(Array.isArray(ret))
    assert(ret.length === 1)

    const [user] = ret
    assert(user)
    assert(user.uid === uid)
    assert(user.address)
  })

  it('Should work 2', async () => {
    const { httpRequest } = testConfig

    const uid = 2
    const url = `${path}${uid}`

    const resp = await httpRequest
      .get(url)
      .expect(200)
    const ret = resp.body as UserExtDTO[]
    assert(Array.isArray(ret))
    assert(ret.length === 1)

    const [user] = ret
    assert(user)
    assert(user.uid === uid)
    assert(user.address)
  })

})

