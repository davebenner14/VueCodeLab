<template>
  <div class="editor">
    <codemirror v-model="code" :options="options" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      code: "",
      options: {
        lineNumbers: true,
        mode: "javascript",
        theme: "monokai", // set the theme here
      },
    };
  },
  mounted() {
    // Dynamically import the theme CSS file
    require("@/assets/monokai.css");
  },
};
</script>

<style>
.editor {
  height: 100%;
  width: 100%;
}

.CodeMirror {
  height: 100%;
  width: 100%;
}
</style>
