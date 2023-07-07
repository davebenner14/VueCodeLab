<template>
  <button @click="$emit('copy')" class="copy-btn">
    <span v-if="copied">Copied!</span>
    <span v-else>Copy</span>
  </button>
</template>

<script>
export default {
  props: {
    copied: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.copy-btn {
}
</style>
