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
      <p class="description">
        This app is a Vue.js code editor that allows you to practice the
        <span class="crud">CRUD</span> operations. To get started, select one of
        the CRUD operations below along with the level of difficulty. You will
        be presented with a problem to solve and provided with starter code to
        help you get started. Use the code editor to write your solution and see
        the results in the console output.
      </p>
      <ChallengeSelector @challenge-selected="selectChallenge" />
      <div class="app-content">
        <ProblemStatement :challenge="currentChallenge" />
        <CodeEditor
          :challenge="currentChallenge"
          @code-updated="updateCode"
          :current-code="currentCode"
        />
      </div>
      <ConsoleOutput :code="currentCode" />
    </div>
  </div>
</template>
s

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
      starterCode: {
        create: {
          beginner: `// Existing users
let users = [];

// Function to create a new user
function createUser(name, age) {
  // Your code here
}

// Remember to export your function
        `,
          intermediate: `// Starter code for Create Intermediate

/*
  You are building a registration form for a website.
  The form should take in a user's name, email, and password.
  When the form is submitted, it should display the user's details on the screen.

  Hints:
  1. You'll need a data object to hold the user's details.
  2. You'll also need a method to handle form submission.
*/

// Create a data object to store user details
let user = {
  name: '',
  email: '',
  password: '',
};

// Create a boolean to check if form is submitted
let submitted = false;

// Write a method to handle form submission

function handleFormSubmission() {
  // Your code here
}

// Now create a form that takes user's name, email, and password
          `,
          expert: `// Existing posts
let posts = [];

// Function to create a new post
async function createPost(title, content) {
  // Your post object
  const post = {
    title,
    content,
  };

  try {
    const response = await fetch('/api/posts', {
      method: 'POST', // This is a "Create" operation in CRUD
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post), // We send the new post data to the server
    });

    // TODO: Check if the response is ok (response.ok)
    // TODO: If the response is ok, parse the response as JSON (response.json)
    // TODO: Add the new post to the 'posts' array
    // TODO: Display a success message

  } catch (error) {
    // TODO: Handle any errors that occur while trying to create a new post
  }
}

          `,
        },
        read: {
          beginner: `// Function to calculate the sum of an array of numbers
function sumOfArray(numbers) {
  // Initialize a variable "sum" to 0

  // Use a for loop or array method to iterate over each number in the array

  // For each number, add it to "sum"

  // After the loop finishes, return "sum"
}
          `,
          intermediate: `<template>
  <div class="photo-gallery">
    <!-- TODO: Use v-for to iterate over the photos array and generate image elements -->
  </div>
<\\/template>

<script>
export default {
  data() {
    return {
      photos: [
        // TODO: Add the provided photo URLs here
      ],
    };
  },
};
<\\/script>

<style>
.photo-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
}

.photo {
  width: 100%;
  height: auto;
}
<\\/style>
`,

          expert: `<template>
  <div>
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
<\\/template>

<script>
import ProductCard from './ProductCard.vue';

export default {
  name: 'ProductGrid',
  components: {
    ProductCard
  },
  data() {
    return {
      products: []
    };
  },
  methods: {
    getProducts() {
      // TODO: Fetch product data from API and assign to this.products
    }
  },
  mounted() {
    this.getProducts();
  }
};
<\\/script>
          `,
        },
        update: {
          beginner: `// Existing array
let array = ['First', 'Second', 'Third', 'Fourth'];

// Function to update an array element
function updateArrayValue(index) {
  // Your code here
}

// Remember to export your function
export { updateArrayValue };

          `,
          intermediate: `// Existing user settings
let settings = {
  name: 'John Doe',
  email: 'john@example.com',
  password: 'password123',
};

// Function to update settings
function updateSettings(field, newValue) {
  // Your code here
}

// Remember to export your function
export { updateSettings };
`,
          expert: `// Existing posts
let posts = [];

// Function to update a post
async function updatePost(id, updatedData) {
  // Your code here
}

// Remember to export your function
export { updatePost };
`,
        },
        delete: {
          beginner: `// Existing array
let array = ['First', 'Second', 'Third', 'Fourth'];

// Function to delete an element from the array
function deleteElementFromArray(index) {
  // Your code here
}

// Remember to export your function
export { deleteElementFromArray };
`,
          intermediate: `
          // Existing shopping cart
let cart = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 },
];

// Function to remove an item from the shopping cart
function removeCartItem(productId) {
  // Your code here
}

// Remember to export your function
export { removeCartItem };
`,
          expert: `// Function to delete a task
async function deleteTask(taskId) {
  try {
    const response = await fetch("/api/tasks/" + taskId, {
      method: 'DELETE', // This is a "Delete" operation in CRUD
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      // TODO: Remove the deleted task from the user interface without refreshing the page
    } else {
      // TODO: Handle the case where the delete request was not successful
    }
  } catch (error) {
    // TODO: Handle any errors that occur while trying to delete a task
  }
}

// Remember to export your function
export { deleteTask };

`,
        },
      },
    };
  },
  methods: {
    updateCode(newCode) {
      this.currentCode = newCode;
    },
    selectChallenge(challenge) {
      this.currentChallenge = {
        operation: challenge.operation.toLowerCase(),
        level: challenge.level.toLowerCase(),
      };
      this.currentCode =
        this.starterCode[this.currentChallenge.operation][
          this.currentChallenge.level
        ];
    },
  },
};
</script>
