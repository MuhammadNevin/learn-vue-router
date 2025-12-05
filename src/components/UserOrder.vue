<script setup>
import { ref } from 'vue';

const orders = ref([
    { id: 1, item: 'Laptop', quantity: 1, price: 1200 },
    { id: 2, item: 'Headphones', quantity: 2, price: 200 },
    { id: 3, item: 'Keyboard', quantity: 1, price: 100 },
]);
</script>

<template>
    <div class="user-order">
        <h1>User Orders</h1>
        <table>
            <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in orders" :key="order.id">
                    <td>{{ order.id }}</td>
                    <td>{{ order.item }}</td>
                    <td>{{ order.quantity }}</td>
                    <td>${{ order.price }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.user-order {
    padding: 20px;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

th {
    background-color: #f4f4f4;
}
</style>