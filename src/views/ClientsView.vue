<template>
    <main class="container py-5">
        <h1 class="text-center">Clientes</h1>
        <ClientTable />
    </main>
</template>

<script>
import ClientTable from '@/components/ClientTable.vue'

export default {
    components: {
        ClientTable
    }
}
</script>

<style></style>
