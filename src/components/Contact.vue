<script setup></script>
<template>
  <div>
    <section>
      <h2 class="text-blue-500 font-bold">Contact Information</h2>
      <p>
        If you have any questions or need assistance, please feel free to
        contact us using the information below:
      </p>
      <address>
        <p>
          <strong>Email:</strong>
          <a href="mailto:contact@yourecmmercestore.com">
            contact@ecmmercestore.com</a
          >
        </p>
        <p><strong>Phone:</strong> +1 (123) 456-7890</p>
        <p><strong>Address:</strong> 123 Main Street, City, State, Zip Code</p>
      </address>
    </section>

    <section>
      <h2 class="text-blue-500 font-bold">Contact Form</h2>
      <p>You can also reach out to us using the contact form below:</p>
      <form action="submit_contact.php" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </section>
  </div>
</template>

<style scoped>
body,
h1,
h2,
p,
ul,
li {
  margin: 0;
  padding: 0;
}

body {
  background-color: #f4f4f4;
  color: #333;
  font-family: Arial, sans-serif;
}

header {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1rem 0;
}

header h1 {
  font-size: 2rem;
}

nav ul {
  list-style-type: none;
}

nav ul li {
  display: inline;
  margin-right: 20px;
}

nav ul li a {
  text-decoration: none;
  color: #fff;
}

main {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

section {
  margin-bottom: 30px;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

address {
  font-style: normal;
}

form {
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
button[type="submit"] {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

button[type="submit"]:hover {
  background-color: #555;
}

footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px 0;
}
</style>
