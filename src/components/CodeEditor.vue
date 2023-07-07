<template>
  <div class="editor">
    <div class="editor-header">
      <span class="editor-label">JS</span>
      <CopyButton @copy="copyToClipboard" :copied="copied" />
    </div>
    <codemirror v-model="code" :options="options" @input="updateCode" />
  </div>
</template>

<script>
import CopyButton from "./CopyButton";
import "@/components/CodeEditor.css";

export default {
  props: {
    challenge: Object,
  },
  data() {
    return {
      code: "",
      copied: false,
      options: {
        lineNumbers: true,
        mode: "javascript",
        theme: "monokai",
      },
    };
  },
  methods: {
    updateCode(newCode) {
      this.$emit("code-updated", newCode);
    },
    copyToClipboard() {
      navigator.clipboard.writeText(this.code).then(
        () => {
          this.copied = true;
          setTimeout(() => {
            this.copied = false;
          }, 2000);
        },
        () => {
          console.error("Failed to copy!");
        }
      );
    },
  },
  components: {
    CopyButton,
  },
  mounted() {
    require("@/assets/monokai.css");
  },
  watch: {
    challenge: function (newChallenge) {
      if (newChallenge) {
        // here you could fetch code related to the new challenge from an API, or from a static resource
        this.code = ""; // resetting the code on every new challenge
      }
    },
  },
};
</script>
