<!-- Product Details -->

<script setup>

import { onMounted, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const loaded = ref(false)
const error = ref(false)
const product = ref(null)
// const route = useRoute()
const {id} = defineProps(['id'])

watchEffect(() => {
    if(id){
        fetch(`/api/products/${id}.json`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.json()
        })
        .then((data) => {
            product.value = data
            loaded.value = true
        })
        .catch(err => {
            console.error('There was a problem with the fetch operation:', err)
            error.value = true
            loaded.value = true
        })
    }
})
</script>

<template>
    <template v-if="id">
        <div v-if="!loaded">
            <p>Loading product details...</p>
        </div>
        <div v-else-if="error">
            <p>Error loading product details of {{ id }}. Please try again later.</p>
        </div>
        <div v-else>
            <h1>Product Details</h1>
            <h2>{{ product.name }}</h2>
            <p>Price: ${{ product.price }}</p>
            <p>{{ product.description }}</p>
        </div>

    </template>

    <template v-else>
        <p>No product ID provided.</p>
    </template>
</template>