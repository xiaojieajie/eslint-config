/* eslint-disable @typescript-eslint/no-var-requires */
import { execSync } from 'child_process'
import fs from 'fs-extra'
import { $ } from 'zx'

execSync('pnpm exec bumpp package.json packages/*/package.json', { stdio: 'inherit' })

// const tag = await $`git tag`
// const a = tag.stdout.split('\n')
// console.log(a)

// a.forEach(async(b) => {
//   await $`git tag -d ${b}`
// })

await $`pnpm changelog`

await $`pnpm -r publish --access public --no-git-checks`

const { version } = await fs.readJSON('package.json')

await $`git add .`
await $`git commit -m "chore: release v${version}"`
await $`git tag v${version}`
await $`git push`
await $`git push origin --tags`
