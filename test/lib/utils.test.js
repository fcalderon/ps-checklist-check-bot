import { extractChecks } from '../../lib/utils'

const mock_pr_body = `
## My mock PR template

this is the body of the PR template

## Checklist

- [ ] test have been added (required)
- [ ] performed self-review (required)
- [ ] updated documentation (if applicable)
- [ ] added cat pictures (if you're cat person)
- [ ] added dog pictures (if you're dog person)
`


// ReGex to find all checks in checklist \- \[ \]
//

describe('Test extracting checks', () => {
  beforeEach(() => {
    console.log('Testing extracting checks...')
  })

  test('test test', () => {
    const checks = extractChecks(mock_pr_body)
    expect(checks).toBe(true)
  })
})
