import React from 'react'
import ReactDOM from 'react-dom'
import Vue from 'vue'

import {HelloElm} from './HelloElm.elm'
import HelloVue from './HelloVue.vue'
import HelloReact from './HelloReact'

new Vue({
  el: '#embed-vue',
  render: h => h(HelloVue),
})

ReactDOM.render(<HelloReact/>, document.querySelector('#embed-react'))

HelloElm.embed(document.querySelector('#embed-elm'))
