<script setup>
import { ref } from 'vue';

const wishlist = ref([
    { id: 1, name: 'Item 1', description: 'Description for item 1' },
    { id: 2, name: 'Item 2', description: 'Description for item 2' },
    { id: 3, name: 'Item 3', description: 'Description for item 3' },
]);
</script>

<template>
    <div class="wishlist">
        <h1>User Wishlist</h1>
        <ul>
            <li v-for="item in wishlist" :key="item.id">
                <h2>{{ item.name }}</h2>
                <p>{{ item.description }}</p>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.wishlist {
    padding: 20px;
}

.wishlist h1 {
    color: #333;
}

.wishlist ul {
    list-style-type: none;
    padding: 0;
}

.wishlist li {
    border: 1px solid #ddd;
    margin: 10px 0;
    padding: 8px;
    border-radius: 5px;
    text-align: left;
}

.wishlist li h2 {
    margin: 0;
    color: #555;
}

.wishlist li p {
    margin: 4px 0 0 0;
    color: #666;
}
</style>