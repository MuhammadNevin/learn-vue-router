<!-- Not Found Page -->

<script setup>  
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
    <div>
        <h2>404 - Page Not Found</h2>
        <p>The requested URL "{{ route.fullPath }}" was not found on this server.</p>
    </div>
</template>