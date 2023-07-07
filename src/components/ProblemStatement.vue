<template>
  <div class="problem-statement">
    <p>{{ statement }}</p>
  </div>
</template>

<script>
export default {
  props: {
    challenge: Object,
  },
  data() {
    return {
      statement: "",
      challenges: {
        create: {
          beginner:
            "Create a JavaScript function that accepts a name and age as input, and returns a new user object with those properties. The function should also add this new user to an existing array of users. Make sure to export your function so it can be used in other files.",
          intermediate:
            "You are building a registration form for a website. Create a form that takes in user's name, email, and password. When the form is submitted, it should display the user's details on the screen.",
          expert:
            "You've been tasked to build a feature for a forum website where users can create new posts. When a user submits a new post, send a POST request to /api/posts with the post data. Display a success message when the post is successfully created.",
        },
        read: {
          beginner:
            "Write a function that accepts an array of numbers as a parameter and returns the sum of all numbers in the array.",
          intermediate:
            "Create a photo gallery for a website. You're given a list of photo URLs. Display all the photos on the page in a grid-like format.",
          expert:
            "Your application's users need to be able to browse through a catalog of products. Retrieve the list of products from a GET /api/products endpoint, and display them in a grid layout. Each product has a name, description, price, and imageUrl.",
        },
        update: {
          beginner:
            "Write a function that accepts an array and an index as parameters. The function should update the value at the given index in the array to be Updated.",
          intermediate:
            "You're building a settings page for a user profile on a website. When the user updates their settings, display the updated settings on the screen.",
          expert:
            "You're adding a feature to a blogging platform where authors can edit their posts. When the author submits their changes, send a PUT request to /api/posts/:id with the updated data. Display the updated post in the user interface without refreshing the page.",
        },
        delete: {
          beginner: "Write a function that takes an array and an index...",
          intermediate:
            "You have been tasked with creating a shopping cart for an online store. Add functionality for users to remove items from their cart.",

          expert:
            "You're adding a feature to a project management app where users can delete tasks. When the user clicks on a Delete button, send a DELETE request to /api/tasks/:id. Once the request is successful, remove the task from the user interface without refreshing the page.",
        },
      },
    };
  },
  watch: {
    challenge: function (newChallenge) {
      if (newChallenge) {
        this.statement = `${newChallenge.operation} ${
          newChallenge.level
        } Problem:\n\n${
          this.challenges[newChallenge.operation.toLowerCase()][
            newChallenge.level.toLowerCase()
          ]
        }`;
      } else {
        this.statement = "";
      }
    },
  },
};
</script>

<style scoped>
.problem-statement {
  width: 50%;
  padding: 20px;
  box-sizing: border-box;
}
</style>
