<template>
  <div class="editor">
    <div class="editor-header">
      <span class="editor-label">JS</span>
      <CopyButton @copy="copyToClipboard" :copied="copied" />
    </div>
    <codemirror v-model="code" :options="options" />
  </div>
</template>

<script>
import CopyButton from "./CopyButton";
import "@/components/CodeEditor.css";

export default {
  data() {
    return {
      code: "",
      copied: false, // add this new data property
      options: {
        lineNumbers: true,
        mode: "javascript",
        theme: "monokai",
      },
    };
  },
  methods: {
    copyToClipboard() {
      navigator.clipboard.writeText(this.code).then(
        () => {
          // Success
          this.copied = true; // set copied to true on success
          setTimeout(() => {
            this.copied = false; // reset copied status after 2 seconds
          }, 2000);
        },
        () => {
          // Failure
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
};
</script>
