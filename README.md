<p align="center">
  <img src="https://raw.githubusercontent.com/vuefrag/vue-use-last-changed/main/banner.svg" alt="vue-use-last-changed" width="100%" />
</p>

<h1 align="center">vue-use-last-changed</h1>

<p align="center">A Vue 3 composition API utility that tracks and returns a reactive timestamp (Date.now()) of when a watched value last changed.</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vue-use-last-changed"><img src="https://img.shields.io/npm/v/vue-use-last-changed.svg" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/vue-use-last-changed"><img src="https://img.shields.io/npm/dm/vue-use-last-changed.svg" alt="npm downloads" /></a>
</p>

## Installation

```bash
npm install vue-use-last-changed
```

## Usage

```ts
import { useLastChanged } from 'vue-use-last-changed'
import { ref } from 'vue'

const value = ref('initial')
const lastChanged = useLastChanged(value)

console.log(lastChanged.value) // null (not changed yet)

value.value = 'updated'
setTimeout(() => {
  console.log(lastChanged.value) // timestamp
}, 100)
```

## License

MIT

Extracted from [VueUse](https://vueuse.org/) for standalone use.
