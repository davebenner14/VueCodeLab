<template>
  <div>
    <h2>Task Details</h2>
    <p>{{ task.description }}</p>
    <pre>{{ task.starterCode }}</pre>
    <h2>Your Code</h2>
    <pre>{{ task.userCode }}</pre>
  </div>
</template>

<script>
export default {
  props: {
    task: Object,
  },
};
</script>
