<template>
  <div id="app">
    <div class="main-container">
      <h1 class="title">
        Simple CodeEditor for <span class="crud">Vue.js</span>
      </h1>
      <p class="description">
        This app is used to practice Vue.js
        <span class="crud">CRUD</span> operations.
        <span class="crud">CRUD</span> stands for
        <span class="crud">Create</span>, <span class="crud">Read</span>,
        <span class="crud">Update</span>, and <span class="crud">Delete</span>.
        It refers to the basic operations performed on data:
        <span class="crud">creating</span>, <span class="crud">reading</span>,
        <span class="crud">updating</span>, and
        <span class="crud">deleting</span>.
      </p>
      <ChallengeSelector @challenge-selected="selectChallenge" />
      <div class="app-content">
        <ProblemStatement :challenge="currentChallenge" />
        <CodeEditor :challenge="currentChallenge" @code-updated="updateCode" />
      </div>
      <ConsoleOutput :code="currentCode" />
    </div>
  </div>
</template>

<script>
import CodeEditor from "./components/CodeEditor";
import ChallengeSelector from "./components/ChallengeSelector";
import ProblemStatement from "./components/ProblemStatement";
import ConsoleOutput from "./components/ConsoleOutput";
import "./App.css"; // import your CSS file here

export default {
  name: "App",
  components: {
    ChallengeSelector,
    ProblemStatement,
    CodeEditor,
    ConsoleOutput,
  },
  data() {
    return {
      currentChallenge: null,
      currentCode: "",
    };
  },
  methods: {
    updateCode(newCode) {
      this.currentCode = newCode;
    },
    selectChallenge(challenge) {
      this.currentChallenge = challenge;
    },
  },
};
</script>
