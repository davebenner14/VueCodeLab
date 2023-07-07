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
    currentCode: String, // declare currentCode as a prop
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
    challenge(newChallenge) {
      if (newChallenge) {
        this.code = ""; // reset the code on every new challenge
      }
    },
    currentCode(newCode) {
      // watch for changes in currentCode
      if (newCode !== this.code) {
        this.code = newCode; // update the code if currentCode changes
      }
    },
  },
};
</script>
