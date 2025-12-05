<script setup>
// Your script content here
</script>

<template>
    <div class="user-page-wrapper">
        <RouterView name="header"/>
        <main class="simple-main">
            <RouterView v-slot="{ Component }">
                <component :is="Component" :request-id="$route.query.requestId" />
            </RouterView>
        </main>
        <RouterView name="footer"/>
    </div>
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