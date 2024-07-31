<template>
    <main class="container pt-5 pb-5">
        <h1>Cadastro de Cliente</h1>
        <RegisterForm ref="registerForm">
            <template v-slot:results>
                <div class="resultadoPrecoMedioFipe" v-if="vehicle.fipe != null" v-cloak>
                    <p>{{ vehicle.fipe.Marca }}</p>
                    <h4 style="margin-top: -15px">{{ vehicle.fipe.Modelo }}</h4>
                    <p style="margin-top: -5px">{{ vehicle.fipe.AnoModelo }}</p>
                    <h4>
                        Preço:
                        <span class="price" style="color: greenyellow">{{
                            vehicle.fipe.Valor
                        }}</span>
                    </h4>
                    <p style="font-size: 15px; margin-top: 15px">
                        Ref: <span>{{ vehicle.fipe.MesReferencia }}</span>
                    </p>
                </div>
            </template>
        </RegisterForm>
    </main>
</template>

<script>
import RegisterForm from '@/components/RegisterForm.vue'

export default {
    components: {
        RegisterForm
    },
    data() {
        return {
            vehicle: {
                fipe: null
            },
            client: {}
        }
    },
    mounted() {
        this.vehicle = this.$refs.registerForm.$refs.VehicleForm.vehicle
        this.client = this.$refs.registerForm.$refs.ClienfForm.client
    }
}
</script>

<style>
.resultadoPrecoMedioFipe {
    border: solid rgba(255, 255, 255, 0.26) 1px;
    border-radius: 10px;
    padding: 15px;
}
</style>
