<script setup>
import { ref } from 'vue';

// request-id from query parameter
const { requestId } = defineProps(['requestId']);
console.log('Request ID:', requestId);

const user = ref({
    name: 'Muhammad Nevin',
    email: 'nevin.muhammad@gmail.com',
    bio: 'A passionate developer who loves coding and sharing knowledge.'
});
</script>

<template>
    <div class="user-profile-card">
        <div class="avatar">
            <span>{{ user.name.charAt(0) }}</span>
        </div>
        <h2>{{ user.name }}</h2>
        <p class="email">{{ user.email }}</p>
        <p class="bio">{{ user.bio }}</p>
        <button class="contact-btn">Contact</button>
    </div>
</template>

<style scoped>
.user-profile-card {
    max-width: 350px;
    margin: 40px auto;
    padding: 32px 24px;
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.08);
    text-align: center;
    font-family: 'Segoe UI', Arial, sans-serif;
}
.avatar {
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, #6dd5ed, #2193b0);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 18px auto;
    font-size: 2.5rem;
    color: #fff;
    font-weight: bold;
    box-shadow: 0 2px 8px rgba(0,0,0,0.07);
}
.user-profile-card h2 {
    margin: 0 0 8px 0;
    color: #2193b0;
    font-size: 1.6rem;
}
.user-profile-card .email {
    color: #555;
    font-size: 1rem;
    margin-bottom: 12px;
}
.user-profile-card .bio {
    color: #444;
    font-size: 1.1rem;
    margin-bottom: 18px;
}
.contact-btn {
    background: #2193b0;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 10px 24px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.2s;
}
.contact-btn:hover {
    background: #6dd5ed;
    color: #2193b0;
}
</style>