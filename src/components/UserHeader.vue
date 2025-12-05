<script setup>
// Your script content here

</script>

<template>
<header class="simple-header">
            <h2>Nevin Website</h2>
            <nav class="user-nav">
                <!-- 
                RouterLink is a component provided by Vue Router that is used to create navigable links in a Vue application. 
                It works similarly to an anchor (`<a>`) tag but is specifically designed to work with Vue Router's navigation system. 
                When clicked, it triggers a route change without reloading the page, enabling seamless single-page application (SPA) navigation. 
                You can use the `to` prop to specify the target route.
                -->
                <!-- <RouterLink to="/user/profile">Profile</RouterLink>
                <RouterLink to="/user/order">Order</RouterLink>
                <RouterLink to="/user/wishlist">Wishlist</RouterLink> -->
                <!-- change to with name -->
                <RouterLink :to="{ name: 'user-profile' }">Profile</RouterLink>
                <RouterLink :to="{ name: 'user-order' }">Order</RouterLink>
                <RouterLink :to="{ name: 'user-wishlist' }">Wishlist</RouterLink>
            </nav>
        </header>
</template>


<style scoped>
/* User-link-exact-active fro navigation */
.r
html, body, #app {
    height: 100%;
    margin: 0;
    padding: 0;
}
.user-page-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
.simple-header {
    width: 100%;
    background: #007BFF;
    color: #fff;
    padding: 0px 0 0px 0;
    text-align: center;
    font-size: 2rem;
    letter-spacing: 1px;
}
.simple-main {
    flex: 1;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding: 32px 24px;
    background: #f7f9fa;
    text-align: center;
    box-sizing: border-box;
}
.simple-footer {
    width: 100%;
    background: #0056b3;
    color: #fff;
    padding: 18px 0;
    text-align: center;
    font-size: 1rem;
}
.user-nav {
    margin-top: 12px;
    display: flex;
    gap: 18px;
    justify-content: center;
}
.user-nav a {
    color: #fff;
    background: #0056b3;
    padding: 6px 18px;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 500;
    transition: background 0.2s;
}
.user-nav a.router-link-exact-active {
    background: #fff;
    color: #0056b3;
    border: 2px solid #0056b3;
    font-weight: bold;
}
.user-nav a:hover {
    background: #007BFF;
}
</style>