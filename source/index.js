import hello_word from './hello.js'
import world_word from './world.js'
document.querySelector('#root').innerHTML = `${hello_word} ${world_word}`  

// npx webpack --entry ./source/index.js --output ./public/index_bundle.js