<template>
    <div class="form-check form-check-inline">
        <input
            class="form-check-input"
            type="radio"
            id="car"
            name="vehicle"
            value="carros"
            v-model="vehicle.type"
            @change="fetchBrands"
            required
        />
        <label class="form-check-label" for="car">Carros</label><br />
    </div>
    <div class="form-check form-check-inline">
        <input
            class="form-check-input"
            type="radio"
            id="moto"
            name="vehicle"
            value="motos"
            v-model="vehicle.type"
            @change="fetchBrands"
            required
        />
        <label class="form-check-label" for="moto">Moto</label><br />
    </div>
    <div class="form-check form-check-inline">
        <input
            class="form-check-input"
            type="radio"
            id="truck"
            name="vehicle"
            value="caminhoes"
            v-model="vehicle.type"
            @change="fetchBrands"
            required
        />
        <label class="form-check-label" for="truck">Caminhão</label>
    </div>

    <div class="row mt-4">
        <div class="col-md-2 form-floating mb-3">
            <input
                type="text"
                :class="`form-control ${vehicle.result.license_plate.length == 8 ? 'is-valid' : ''}`"
                id="license_plate"
                maxlength="8"
                v-maska="'@@@-#*##'"
                placeholder="Campo Obrigatório"
                v-model="vehicle.result.license_plate"
                required
            />
            <label class="input_label" for="license_plate">Placa</label>
        </div>

        <div class="col-md-3 form-floating mb-3">
            <select
                class="form-select"
                id="brands"
                name="brands"
                v-model="vehicle.brand"
                :disabled="vehicle.type === null"
                @change="fetchModels"
                required
            >
                <option value="" disabled>Selecione uma marca</option>
                <option
                    :value="`${b.codigo}`"
                    v-for="b in allBrands"
                    :key="b.codigo"
                    v-text="b.nome"
                ></option>
            </select>
            <label class="select_label" for="brands">Marca do veículo</label>
        </div>

        <div class="col-md-4 form-floating mb-3">
            <select
                class="form-select"
                id="models"
                name="models"
                v-model="vehicle.model"
                :disabled="vehicle.brand == 0"
                @change="fetchYears"
                required
            >
                <option value="" disabled>Selecione um modelo</option>
                <option
                    :value="`${m.codigo}`"
                    v-for="m in allModels"
                    :key="m.codigo"
                    v-text="m.nome"
                ></option>
            </select>
            <label class="select_label" for="models">Modelo do veículoo</label>
        </div>

        <div class="col-md-3 form-floating mb-3">
            <select
                class="form-select"
                id="years"
                name="years"
                v-model="vehicle.year"
                :disabled="vehicle.model == 0"
                @change="fetchFipe"
                required
            >
                <option value="" disabled>Selecione um ano</option>
                <option
                    :value="`${y.codigo}`"
                    v-for="y in allYears"
                    :key="y.codigo"
                    v-text="y.nome"
                ></option>
            </select>
            <label class="select_label" for="models">Ano do veículo</label>
        </div>
    </div>
</template>

<script>
const url = 'https://parallelum.com.br/fipe/api/v1/'
export default {
    data() {
        return {
            vehicle: {
                type: null,
                brand: '',
                model: '',
                year: '',
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
            },
            allBrands: null,
            allModels: null,
            allYears: null
        }
    },
    methods: {
        fetchData(url) {
            return fetch(url)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`)
                    }
                    return response.json()
                })
                .catch((error) => {
                    console.error('Error ao carregar os dados: ', error)
                    throw error
                })
        },
        fetchBrands() {
            this.fetchData(`${url}${this.vehicle.type}/marcas`).then((json) => {
                this.allBrands = json
            })
        },
        fetchModels() {
            this.fetchData(`${url}${this.vehicle.type}/marcas/${this.vehicle.brand}/modelos`).then(
                (json) => {
                    this.allModels = json.modelos
                }
            )
        },
        fetchYears() {
            this.fetchData(
                `${url}${this.vehicle.type}/marcas/${this.vehicle.brand}/modelos/${this.vehicle.model}/anos`
            ).then((json) => {
                this.allYears = json
            })
        },
        fetchFipe() {
            this.fetchData(
                `${url}${this.vehicle.type}/marcas/${this.vehicle.brand}/modelos/${this.vehicle.model}/anos/${this.vehicle.year}`
            )
                .then((json) => {
                    this.vehicle.result.fipe_price = this.convertToFloat(json.Valor)
                    this.vehicle.result.brand = json.Marca
                    this.vehicle.result.model = json.Modelo
                    this.vehicle.result.year = json.AnoModelo
                    this.vehicle.result.fuel = json.Combustivel
                    this.vehicle.result.fipe_code = json.CodigoFipe
                    this.vehicle.result.reference_month = json.MesReferencia
                })
                .catch((error) => console.error('Erro ao fazer a requisição:', error))
        },
        convertToFloat(value) {
            let numericValue = value.replace(/[^0-9,]/g, '')
            numericValue = numericValue.replace(',', '.')
            return parseFloat(numericValue)
        }
    }
}
</script>

<style scoped>
.select_label {
    padding: 1rem 1.5rem;
}

.form-floating > .form-select ~ label::after {
    background-color: #fff0 !important;
}
</style>
