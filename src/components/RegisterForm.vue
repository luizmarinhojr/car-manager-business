<template>
    <form @submit.prevent="postForm">
        <fieldset>
            <legend>Dados do cliente</legend>
            <ClientForm ref="ClienfForm" />
        </fieldset>
        <fieldset>
            <legend>Dados do veículo</legend>
            <VehicleForm ref="VehicleForm" />
        </fieldset>
        <slot name="results" />
        <input
            type="submit"
            class="btn btn-primary mt-3 mb-3"
            style="width: 100%"
            value="Cadastrar"
        />
    </form>
</template>

<script>
import VehicleForm from './VehicleForm.vue'
import ClientForm from './ClientForm.vue'

export default {
    data() {
        return {
            client: {}
        }
    },
    mounted() {
        this.updateData()
    },
    components: {
        VehicleForm,
        ClientForm
    },
    methods: {
        updateData() {
            this.client = this.$refs.ClienfForm.client
            this.client.vehicle = this.$refs.VehicleForm.vehicle.result
        },
        submitForm() {
            this.updateData()
        },
        async postForm() {
            this.updateData()
            fetch('http://localhost:8080/clients', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.client)
            })
        }
    }
}
</script>

<style></style>
