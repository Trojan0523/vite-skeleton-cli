import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    './main',
  ],
  rollup: {
    inlineDependencies: true,
  },
  declaration: true,
  clean: true,
})
