<template>
  <div class="example">{{ msg }}</div>
</template>

<script>
export default {
  name: 'hello_View',
  data () {
    return {
      msg: 'Hello Cruel World! From Vue'
    }
  },
  mounted: ()=>{
    console.log("Vue Component is mounted")
  }
}
</script>

<style  lang="scss">
$color1: #c34b12;
.example {
  color: $color1
}
</style>

<custom1>
  This could be e.g. documentation for the component.
</custom1>