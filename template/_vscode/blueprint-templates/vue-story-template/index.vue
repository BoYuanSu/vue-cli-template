<template>
  <div class="{{camelCase name}}">
    {{pascalCase name}}
  </div>
</template>

<script>
export default {
  name: '{{ camelCase name }}'
}
</script>

<style lang="scss" src="./style.scss"></style>
