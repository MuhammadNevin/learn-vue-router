<script setup>
// Your script content here
const {title} = defineProps({
    title: {
        type: String,
        default: 'Home Page'
    }
});

</script>

<template>
  <div class="home-container">
    <h1>{{ title }}</h1>
    <p>Welcome to the Home Page!</p>
    <RouterLink to="/user" class="user-btn">Go to User Page</RouterLink>
  </div>
</template>

<style scoped>
.home-container {
  max-width: 700px;
  margin: 40px auto;
  padding: 32px 24px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  text-align: center;
}
.user-btn {
  display: inline-block;
  margin-top: 24px;
  padding: 12px 32px;
  background: #007BFF;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.2s;
  cursor: pointer;
}
.user-btn:hover {
  background: #0056b3;
}
</style>