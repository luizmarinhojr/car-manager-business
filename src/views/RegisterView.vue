<template>
    <main class="container pt-5 pb-5">
        <h1>Cadastro de Cliente</h1>
        <RegisterForm ref="registerForm">
            <template v-slot:results>
                <div
                    class="resultadoPrecoMedioFipe"
                    v-if="vehicle.result.fipe_price != null"
                    v-cloak
                >
                    <p>{{ vehicle.result.brand }}</p>
                    <h4 style="margin-top: -15px">{{ vehicle.result.model }}</h4>
                    <p style="margin-top: -5px">{{ vehicle.result.year }}</p>
                    <h4>
                        Preço:
                        <span class="price" style="color: greenyellow"
                            >R$ {{ vehicle.result.fipe_price }}</span
                        >
                    </h4>
                    <p style="font-size: 15px; margin-top: 15px">
                        Ref: <span>{{ vehicle.result.reference_month }}</span>
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
                result: {
                    fipe_price: null,
                    license_plate: '',
                    brand: null,
                    model: null,
                    year: null,
                    fuel: null,
                    fipe_code: null,
                    reference_month: null
                }
            }
        }
    },
    mounted() {
        this.vehicle = this.$refs.registerForm.$refs.VehicleForm.vehicle
        console.log(this.vehicle.result)
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
