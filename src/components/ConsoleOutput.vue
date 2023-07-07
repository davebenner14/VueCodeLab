<template>
  <div class="console-output">
    <pre>{{ output }}</pre>
  </div>
</template>

<script>
export default {
  props: {
    code: String,
  },
  data() {
    return {
      output: "",
    };
  },
  methods: {
    executeCode() {
      // Capture console.log
      const log = console.log;
      let consoleOutput = "";
      console.log = (message) => {
        consoleOutput += message + "\n";
      };

      try {
        // Insecure code execution
        eval(this.code);
      } catch (error) {
        consoleOutput += error;
      }

      // Restore console.log
      console.log = log;

      this.output = consoleOutput;
    },
  },
  watch: {
    code: {
      immediate: true,
      handler(newCode) {
        console.log("New code: ", newCode); // Add this line
        this.executeCode(); // This line was updated
      },
    },
  }, // remove comma from here
};
</script>

<style scoped>
@import "./ConsoleOutput.css";
</style>
