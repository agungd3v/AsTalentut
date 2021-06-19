<template>
  <nuxt />
</template>
<script>
export default {
  name: 'auth',

  middleware: 'hasToken'
}
</script>