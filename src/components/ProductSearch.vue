<!-- Show all product from api/products.json, use route -->

<script setup>
import { onMounted, ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const products = ref([])
const {product} = defineProps(['product'])
// const route = useRoute()
const search = ref(product || '')
const router = useRouter()



console.log('Search query:', search)

watchEffect(() => {
    router.replace({ // replcae to avoid adding new history entry
    // router.push({ // push for new history entry
        name: 'product-search',
        query: { product: search.value }
    })
    fetch('/api/products.json')
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        return response.json()
    })
    .then((data) => {
        if(search){
            products.value = data.filter(product => 
                product.name.toLowerCase().includes(search.value.toLowerCase()) || 
                product.description.toLowerCase().includes(search.value.toLowerCase())
            )
        } else {
            products.value = data
        }
    })
    .catch(err => {
        console.error('There was a problem with the fetch operation:', err)
        products.value = []
    })
})
</script>

<template>
    <!-- Form input search -->
    <form>
        <input 
            type="text" 
            v-model="search" 
            name="product"
            placeholder="Search products..." 
            style="padding: 8px; width: 300px; margin: 20px 0; border-radius: 4px; border: 1px solid #ccc;"
        />
    </form>

    <div class="product-search-container">
        <h1>Product Search Results for "{{ search }}"</h1>
        <div v-if="products.length === 0">
            <p>No products found.</p>
        </div>
        <ul v-else>
            <li v-for="product in products" :key="product.id">
                <h2>{{ product.name }}</h2>
                <p>Price: ${{ product.price }}</p>
                <p>{{ product.description }}</p>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.product-search-container {
    max-width: 600px;
    margin: 32px auto;
    padding: 24px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.07);
    text-align: left;
}
.product-search-container h1 {
    font-size: 2rem;
    color: #2c3e50;
    margin-bottom: 20px;
    text-align: left;
}
.product-search-container ul {
    list-style: none;
    padding: 0;
}
.product-search-container li {
    margin-bottom: 24px;
    border-bottom: 1px solid #eee;
    padding-bottom: 16px;
    text-align: left;
}
.product-search-container h2 {
    margin: 0 0 8px 0;
    color: #34495e;
    font-size: 1.3rem;
    text-align: left;
}
.product-search-container p {
    margin: 4px 0;
    color: #555;
    text-align: left;
}
</style>