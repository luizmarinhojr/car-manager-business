<template>
    <form @submit.prevent="submitForm">
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
            vehicle: {
                fipe: null
            },
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
            this.vehicle = this.$refs.VehicleForm.vehicle
            this.client = this.$refs.ClienfForm.client
        },
        submitForm() {
            this.updateData()
            console.log(`Nome do cliente: ${this.client.name}\nNo do modelo do carro: }`)
            alert('Cadastrado com sucesso!')
        }
    }
}
</script>

<style></style>
