<template>
    <div class="container" style="padding: 10%">
        <h1>Verificar Tabela FIPE</h1>
        <p>Qual tipo de veículo gostaria de verificar:</p>
        <div class="form-check">
            <input
                class="form-check-input"
                type="radio"
                id="car"
                name="vehicle"
                value="carros"
                v-model="vehicle"
            />
            <label class="form-check-label" for="car">Carros</label><br />
            <input
                class="form-check-input"
                type="radio"
                id="moto"
                name="vehicle"
                value="motos"
                v-model="vehicle"
            />
            <label class="form-check-label" for="moto">Moto</label><br />
            <input
                class="form-check-input"
                type="radio"
                id="truck"
                name="vehicle"
                value="caminhoes"
                v-model="vehicle"
            />
            <label class="form-check-label" for="truck">Caminhão</label>
        </div>

        <label for="brands">Marca:</label>
        <select class="form-select" id="brands" name="brands" v-model="brand">
            <option value="0" selected>Selecione uma marca</option>
            <option
                :value="`${b.codigo}`"
                v-for="b in allBrands"
                :key="b.codigo"
                v-text="b.nome"
            ></option>
        </select>

        <label for="models">Modelo:</label>
        <select class="form-select" id="models" name="models" v-model="model">
            <option value="0" selected>Selecione um modelo</option>
            <option
                :value="`${m.codigo}`"
                v-for="m in allModels"
                :key="m.codigo"
                v-text="m.nome"
            ></option>
        </select>

        <label for="years">Ano:</label>
        <select class="form-select" id="years" name="years" v-model="year">
            <option value="0" selected>Selecione um ano</option>
            <option
                :value="`${y.codigo}`"
                v-for="y in allYears"
                :key="y.codigo"
                v-text="y.nome"
            ></option>
        </select>

        <div v-if="year.length > 0 && year !== '0'" id="resultadoFipe" v-cloak>
            <h3 class="brandName">{{ fipe.Marca }}</h3>
            <h4 class="modelName">{{ fipe.Modelo }}</h4>
            <p>
                Ano Modelo: <span id="modelYear">{{ fipe.AnoModelo }}</span>
                <br />
                Valor: <span id="valueFipe">{{ fipe.Valor }}</span>
                <br />
                Combustível <span>{{ fipe.Combustivel }}</span>
            </p>

            <span class="description">Código FIPE {{ fipe.CodigoFipe }}</span>
            <br />
            <span class="description">Mês Referência {{ fipe.MesReferencia }}</span>
            <br />
            <div class="mediaPrecosPorAno">
                <div
                    v-for="price of prices"
                    :key="price.AnoModelo"
                    v-text="`${price.AnoModelo} -> ${price.Valor}`"
                ></div>
                <br />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            componentKey: 0,
            vehicle: '0',
            allBrands: null,
            brand: '0',
            allModels: null,
            model: '0',
            allYears: [],
            year: '0',
            fipe: {},
            prices: []
        }
    },
    methods: {
        fetchBrands() {
            fetch(`https://parallelum.com.br/fipe/api/v1/${this.vehicle}/marcas`)
                .then((response) => response.json())
                .then((json) => {
                    this.allBrands = json
                })
                .catch((error) => console.error('Error ao carregar os dados: ', error))
        },
        fetchModels() {
            fetch(
                `https://parallelum.com.br/fipe/api/v1/${this.vehicle}/marcas/${this.brand}/modelos`
            )
                .then((response) => response.json())
                .then((json) => {
                    this.allModels = json.modelos
                })
                .catch((error) => console.error('Error ao carregar os dados: ', error))
        },
        fetchYears() {
            fetch(
                `https://parallelum.com.br/fipe/api/v1/${this.vehicle}/marcas/${this.brand}/modelos/${this.model}/anos`
            )
                .then((response) => response.json())
                .then((json) => {
                    this.allYears = json
                })
                .catch((error) => console.error('Error ao carregar os dados: ', error))
        },
        fetchFipe() {
            fetch(
                `https://parallelum.com.br/fipe/api/v1/${this.vehicle}/marcas/${this.brand}/modelos/${this.model}/anos/${this.year}`
            )
                .then((response) => response.json())
                .then((json) => {
                    this.fipe = json
                })
                .catch((error) => console.error('Error ao carregar os dados: ', error))
        },
        async fetchPrices() {
            try {
                const promises = this.allYears.map((year) =>
                    fetch(
                        `https://parallelum.com.br/fipe/api/v1/${this.vehicle}/marcas/${this.brand}/modelos/${this.model}/anos/${year.codigo}`
                    ).then((response) => response.json())
                )

                const results = await Promise.all(promises)
                this.prices = results
            } catch (error) {
                console.error('Error ao carregar os dados: ', error)
            }
        }
    },
    watch: {
        vehicle() {
            this.fetchBrands()
        },
        brand() {
            if (this.brand !== '0') {
                console.log(this.brand)
                this.fetchModels()
            }
        },
        model() {
            if (this.model !== '0') {
                this.fetchYears()
            }
        },
        year() {
            if (this.year !== '0') {
                this.fetchFipe()
            }
        },
        fipe() {
            if (Object.keys(this.fipe).length !== 0) {
                this.fetchPrices()
            }
        }
    }
}
</script>

<style scoped></style>
