<template>
  <div>
    <div v-if="!selectedCrudOperation">
      <button
        v-for="operation in crudOperations"
        :key="operation"
        @click="selectCrudOperation(operation)"
      >
        {{ operation }}
      </button>
    </div>

    <div v-else>
      <button
        v-for="level in difficultyLevels"
        :key="level"
        @click="selectDifficultyLevel(level)"
      >
        {{ level }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCrudOperation: null,
      crudOperations: ["Create", "Read", "Update", "Delete"],
      difficultyLevels: ["Beginner", "Intermediate", "Advanced"],
    };
  },
  methods: {
    selectCrudOperation(operation) {
      this.selectedCrudOperation = operation;
    },
    selectDifficultyLevel(level) {
      this.$emit("challenge-selected", {
        operation: this.selectedCrudOperation,
        level: level,
      });
      this.selectedCrudOperation = null;
    },
  },
};
</script>
