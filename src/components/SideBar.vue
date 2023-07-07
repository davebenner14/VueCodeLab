<template>
  <div>
    <h2>Tasks</h2>
    <ul>
      <li v-for="task in tasks" :key="task.title" @click="selectTask(task)">
        {{ task.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    tasks: Array,
  },
  methods: {
    selectTask(task) {
      this.$emit("select", task);
    },
  },
};
</script>
