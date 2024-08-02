<template>
    <main class="container py-5">
        <h1 class="text-center">Serviços</h1>
        <ServiceTable />
    </main>
</template>

<script>
import ServiceTable from '@/components/ServiceTable.vue'

export default {
    components: {
        ServiceTable
    }
}
</script>

<style></style>
