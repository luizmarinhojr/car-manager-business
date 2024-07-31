<template>
    <div class="container pt-5 pb-5">
        <h1>Cadastro de Cliente</h1>
        <form>
            <fieldset class="mt-3">
                <legend>Dados do cliente</legend>
                <div class="row">
                    <div class="col-md form-floating mb-3">
                        <input
                            type="text"
                            :class="`form-control ${clientName.length > 1 ? 'is-valid' : ''}`"
                            id="clientName"
                            placeholder="Campo Obrigatório"
                            v-model="clientName"
                            required
                        />
                        <label class="input_label" for="clientName">Nome</label>
                    </div>

                    <div class="col-md form-floating mb-3">
                        <input
                            type="text"
                            :class="`form-control ${clientLastName.length > 3 ? 'is-valid' : ''}`"
                            id="clientLastName"
                            placeholder="Campo Obrigatório"
                            v-model="clientLastName"
                            required
                        />
                        <label class="input_label" for="clientLastName">Sobrenome</label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md form-floating mb-3">
                        <input
                            type="tel"
                            :class="`form-control ${cellphone.length == 15 ? 'is-valid' : ''}`"
                            id="celular"
                            v-maska="'(##) #####-####'"
                            placeholder="Campo Obrigatório"
                            v-model="cellphone"
                            required
                        />
                        <label class="input_label" for="celular">Celular</label>
                    </div>

                    <div class="col-md form-floating mb-3">
                        <input
                            type="email"
                            :class="`form-control ${email.includes('@') && email.includes('.') ? 'is-valid' : ''}`"
                            id="email"
                            placeholder="Campo Obrigatório"
                            v-model="email"
                            required
                        />
                        <label class="input_label" for="email">E-mail</label>
                    </div>
                </div>
                <div class="form-check">
                    <input
                        class="form-check-input"
                        type="checkbox"
                        value="true"
                        id="moreData"
                        v-model="moreData"
                    />
                    <label class="form-check-label" for="moreData">
                        Inserir dados para emissão de nota? (opcional)
                    </label>
                </div>

                <Transition>
                    <div v-if="moreData == true" id="moreUserData" class="pt-3" v-cloak>
                        <div class="row">
                            <div class="col-md form-floating mb-3">
                                <input
                                    type="text"
                                    :class="`form-control ${validation.cpf == null ? '' : validation.cpf ? 'is-valid' : 'is-invalid'}`"
                                    id="cpf"
                                    v-maska="'###.###.###-##'"
                                    placeholder="Campo Obrigatório"
                                    v-model="cpf"
                                    @blur="validateCpf"
                                    required
                                />
                                <label class="input_label" for="celular">CPF</label>
                            </div>

                            <div class="col-md form-floating mb-3">
                                <input
                                    type="date"
                                    :class="`form-control ${dateBirth.length == 10 ? 'is-valid' : ''}`"
                                    id="dateBirth"
                                    placeholder="Campo Obrigatório"
                                    v-model="dateBirth"
                                    required
                                />
                                <label class="input_label" for="dateBirth">Nascimento</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4 form-floating mb-3">
                                <input
                                    type="text"
                                    :class="`form-control ${validation.zip_code == null ? '' : validation.zip_code ? 'is-valid' : 'is-invalid'}`"
                                    id="zip_code"
                                    v-maska="'#####-###'"
                                    placeholder="Campo Obrigatório"
                                    v-model="address.zip_code"
                                    @blur="fetchAddress"
                                    required
                                />
                                <label class="input_label" for="zip_code">CEP</label>
                            </div>

                            <div class="col-md-8 form-floating mb-3">
                                <input
                                    type="text"
                                    :class="`form-control ${address.street.length > 5 ? 'is-valid' : ''}`"
                                    id="street"
                                    maxlength="30"
                                    placeholder="Campo Obrigatório"
                                    v-model="address.street"
                                    required
                                />
                                <label class="input_label" for="street">Rua</label>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-8 form-floating mb-3">
                                <input
                                    type="text"
                                    :class="`form-control ${address.neighborhood.length > 5 ? 'is-valid' : ''}`"
                                    id="neighborhood"
                                    maxlength="30"
                                    placeholder="Campo Obrigatório"
                                    v-model="address.neighborhood"
                                    required
                                />
                                <label class="input_label" for="neighborhood">Bairro</label>
                            </div>
                            <div class="col-md-4 form-floating mb-3">
                                <input
                                    type="text"
                                    :class="`form-control ${address.number.length > 0 ? 'is-valid' : ''}`"
                                    id="number"
                                    maxlength="5"
                                    placeholder="Campo Obrigatório"
                                    v-model="address.number"
                                    required
                                />
                                <label class="input_label" for="number">Número</label>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-8 form-floating mb-3">
                                <input
                                    type="text"
                                    :class="`form-control ${address.city.length > 5 ? 'is-valid' : ''}`"
                                    id="city"
                                    maxlength="30"
                                    placeholder="Campo Obrigatório"
                                    v-model="address.city"
                                    required
                                />
                                <label class="input_label" for="city">Cidade</label>
                            </div>

                            <div class="col-md-4 form-floating mb-3">
                                <input
                                    type="text"
                                    :class="`form-control ${address.state.length == 2 ? 'is-valid' : ''}`"
                                    id="state"
                                    maxlength="30"
                                    v-maska="'@@'"
                                    placeholder="Campo Obrigatório"
                                    v-model="address.state"
                                    required
                                />
                                <label class="input_label" for="state">Estado</label>
                            </div>
                        </div>
                    </div>
                </Transition>
            </fieldset>
            <fieldset class="mt-3">
                <legend>Dados do veículo</legend>

                <div class="form-check form-check-inline">
                    <input
                        class="form-check-input"
                        type="radio"
                        id="car"
                        name="vehicle"
                        value="carros"
                        v-model="vehicle.type"
                        @change="fetchBrands"
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
                    />
                    <label class="form-check-label" for="truck">Caminhão</label>
                </div>

                <div class="row mt-4">
                    <div class="col-md-4 form-floating mb-3">
                        <select
                            class="form-select"
                            id="brands"
                            name="brands"
                            v-model="vehicle.brand"
                            :disabled="allBrands == null"
                            @change="fetchModels"
                        >
                            <option value="0" selected>Selecione uma marca</option>
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
                            :disabled="allModels == null"
                            @change="fetchYears"
                        >
                            <option value="0" selected>Selecione um modelo</option>
                            <option
                                :value="`${m.codigo}`"
                                v-for="m in allModels"
                                :key="m.codigo"
                                v-text="m.nome"
                            ></option>
                        </select>
                        <label class="select_label" for="models">Modelo do veículoo</label>
                    </div>

                    <div class="col-md-4 form-floating mb-3">
                        <select
                            class="form-select"
                            id="years"
                            name="years"
                            v-model="vehicle.year"
                            :disabled="allYears == null"
                            @change="fetchFipe"
                        >
                            <option value="0" selected>Selecione um ano</option>
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
            </fieldset>

            <div class="resultadoPrecoMedioFipe" v-if="vehicle.fipe != null" v-cloak>
                <p></p>
                <p>{{ vehicle.fipe.Marca }}</p>
                <h4 style="margin-top: -15px">{{ vehicle.fipe.Modelo }}</h4>
                <p style="margin-top: -5px">{{ vehicle.fipe.AnoModelo }}</p>
                <h4>
                    Preço:
                    <span class="price" style="color: greenyellow">{{ vehicle.fipe.Valor }}</span>
                </h4>
            </div>
            <input type="submit" class="btn btn-primary mt-3 mb-3" style="width: 100%" />
        </form>
    </div>
</template>

<script>
import 'cpf/dist/cpf'
import cpf from 'cpf/dist/cpf'

export default {
    data() {
        return {
            clientName: '',
            clientLastName: '',
            cellphone: '',
            email: '',
            moreData: '',
            cpf: '',
            dateBirth: '',
            address: {
                zip_code: '',
                street: '',
                number: '',
                neighborhood: '',
                city: '',
                state: ''
            },
            vehicle: {
                type: '',
                brand: '0',
                model: '0',
                year: '0',
                fipe: null
            },
            allBrands: null,
            allModels: null,
            allYears: null,
            validation: {
                cpf: null,
                zip_code: null
            }
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
        fetchAddress() {
            if (this.address.zip_code.length == 9) {
                fetch(`https://viacep.com.br/ws/${this.address.zip_code}/json/`)
                    .then((response) => response.json())
                    .then((json) => {
                        if ('erro' in json) {
                            this.validation.zip_code = false
                            console.error('O CEP informado não existe')
                        } else {
                            this.validation.zip_code = true
                            this.address.street = json.logradouro || ''
                            this.address.neighborhood = json.bairro || ''
                            this.address.city = json.localidade || ''
                            this.address.state = json.uf || ''
                        }
                    })
            }
        },
        fetchBrands() {
            this.fetchData(
                `https://parallelum.com.br/fipe/api/v1/${this.vehicle.type}/marcas`
            ).then((json) => {
                this.allBrands = json
            })
        },
        fetchModels() {
            this.fetchData(
                `https://parallelum.com.br/fipe/api/v1/${this.vehicle.type}/marcas/${this.vehicle.brand}/modelos`
            ).then((json) => {
                this.allModels = json.modelos
            })
        },
        fetchYears() {
            this.fetchData(
                `https://parallelum.com.br/fipe/api/v1/${this.vehicle.type}/marcas/${this.vehicle.brand}/modelos/${this.vehicle.model}/anos`
            ).then((json) => {
                this.allYears = json
            })
        },
        fetchFipe() {
            this.fetchData(
                `https://parallelum.com.br/fipe/api/v1/${this.vehicle.type}/marcas/${this.vehicle.brand}/modelos/${this.vehicle.model}/anos/${this.vehicle.year}`
            ).then((json) => {
                this.vehicle.fipe = json
            })
        },
        validateCpf() {
            this.validation.cpf = cpf.isValid(this.cpf)
        },
        validateZipCode() {
            this.fetchAddress()
        }
    }
}
</script>

<style scoped>
.input_label {
    padding: 1rem 1.5rem;
}
.form-floating > .form-control:focus ~ label::after,
.form-floating > .form-control:not(:placeholder-shown) ~ label::after,
.form-floating > .form-control-plaintext ~ label::after,
.form-floating > .form-select ~ label {
    background-color: #fff0 !important;
}
.v-enter-active,
.v-leave-active {
    transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.select_label {
    padding: 1rem 1.5rem;
}

.form-floating > .form-select ~ label::after {
    background-color: #fff0 !important;
}

.resultadoPrecoMedioFipe {
    border: solid rgba(255, 255, 255, 0.26) 1px;
    border-radius: 10px;
    padding: 15px;
}
</style>
