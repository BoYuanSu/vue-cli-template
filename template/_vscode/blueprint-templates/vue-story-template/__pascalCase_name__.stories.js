import Vue from 'vue'
import {{pascalCase name}} from './index.vue'

Vue.component('{{pascalCase name}}', {{pascalCase name}})

export default { title: '{{pascalCase name}}' }

export const withText = () => '<{{pascalCase name}}>with text</{{pascalCase name}}>'

export const withEmoji = () => '<{{pascalCase name}}>😀 😎 👍 💯{{pascalCase name}}</{{pascalCase name}}>'

export const asAComponent = () => ({
  name: 'asAComponent',
  components: { {{pascalCase name}} },
  render: h => <{{pascalCase name}} ></{{pascalCase name}}>
})
