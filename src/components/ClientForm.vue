<template>
    <div class="row">
        <div class="col-md form-floating mb-3">
            <input
                type="text"
                :class="`form-control ${client.name.length > 1 ? 'is-valid' : ''}`"
                id="clientName"
                placeholder="Campo Obrigatório"
                v-model="client.name"
                required
            />
            <label class="input_label" for="clientName">Nome</label>
        </div>

        <div class="col-md form-floating mb-3">
            <input
                type="text"
                :class="`form-control ${client.lastName.length > 3 ? 'is-valid' : ''}`"
                id="clientLastName"
                placeholder="Campo Obrigatório"
                v-model="client.lastName"
                required
            />
            <label class="input_label" for="clientLastName">Sobrenome</label>
        </div>
    </div>
    <div class="row">
        <div class="col-md form-floating mb-3">
            <input
                type="tel"
                :class="`form-control ${client.cellphone.length == 15 ? 'is-valid' : ''}`"
                id="celular"
                v-maska="'(##) #####-####'"
                placeholder="Campo Obrigatório"
                v-model="client.cellphone"
                required
            />
            <label class="input_label" for="celular">Celular</label>
        </div>

        <div class="col-md form-floating mb-3">
            <input
                type="email"
                :class="`form-control ${client.email.includes('@') && client.email.includes('.') ? 'is-valid' : ''}`"
                id="email"
                placeholder="Campo Obrigatório"
                v-model="client.email"
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
            v-model="client.moreData"
        />
        <label class="form-check-label mb-3" for="moreData">
            Inserir dados para emissão de nota? (opcional)
        </label>
    </div>

    <Transition>
        <div v-if="client.moreData == true" id="moreUserData" class="pt-3" v-cloak>
            <div class="row">
                <div class="col-md form-floating mb-3">
                    <input
                        type="text"
                        :class="`form-control ${validation.cpf == null ? '' : validation.cpf ? 'is-valid' : 'is-invalid'}`"
                        id="cpf"
                        v-maska="'###.###.###-##'"
                        placeholder="Campo Obrigatório"
                        v-model="client.cpf"
                        @blur="validateCpf"
                        required
                    />
                    <label class="input_label" for="celular">CPF</label>
                </div>

                <div class="col-md form-floating mb-3">
                    <input
                        type="date"
                        :class="`form-control ${client.dateBirth.length == 10 ? 'is-valid' : ''}`"
                        id="dateBirth"
                        placeholder="Campo Obrigatório"
                        v-model="client.dateBirth"
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
                        v-model="client.address.zip_code"
                        @blur="fetchAddress"
                        required
                    />
                    <label class="input_label" for="zip_code">CEP</label>
                </div>

                <div class="col-md-8 form-floating mb-3">
                    <input
                        type="text"
                        :class="`form-control ${client.address.street.length > 5 ? 'is-valid' : ''}`"
                        id="street"
                        maxlength="30"
                        placeholder="Campo Obrigatório"
                        v-model="client.address.street"
                        required
                    />
                    <label class="input_label" for="street">Rua</label>
                </div>
            </div>

            <div class="row">
                <div class="col-md-8 form-floating mb-3">
                    <input
                        type="text"
                        :class="`form-control ${client.address.neighborhood.length > 5 ? 'is-valid' : ''}`"
                        id="neighborhood"
                        maxlength="30"
                        placeholder="Campo Obrigatório"
                        v-model="client.address.neighborhood"
                        required
                    />
                    <label class="input_label" for="neighborhood">Bairro</label>
                </div>
                <div class="col-md-4 form-floating mb-3">
                    <input
                        type="text"
                        :class="`form-control ${client.address.number.length > 0 ? 'is-valid' : ''}`"
                        id="number"
                        maxlength="5"
                        placeholder="Campo Obrigatório"
                        v-model="client.address.number"
                        required
                    />
                    <label class="input_label" for="number">Número</label>
                </div>
            </div>

            <div class="row">
                <div class="col-md-8 form-floating mb-3">
                    <input
                        type="text"
                        :class="`form-control ${client.address.city.length > 5 ? 'is-valid' : ''}`"
                        id="city"
                        maxlength="30"
                        placeholder="Campo Obrigatório"
                        v-model="client.address.city"
                        required
                    />
                    <label class="input_label" for="city">Cidade</label>
                </div>

                <div class="col-md-4 form-floating mb-3">
                    <input
                        type="text"
                        :class="`form-control ${client.address.state.length == 2 ? 'is-valid' : ''}`"
                        id="state"
                        maxlength="30"
                        v-maska="'@@'"
                        placeholder="Campo Obrigatório"
                        v-model="client.address.state"
                        required
                    />
                    <label class="input_label" for="state">Estado</label>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script>
import cpf from 'cpf/dist/cpf'

export default {
    data() {
        return {
            client: {
                name: '',
                lastName: '',
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
                }
            },
            validation: {
                cpf: null,
                zip_code: null
            }
        }
    },
    methods: {
        fetchAddress() {
            if (this.client.address.zip_code.length == 9) {
                fetch(`https://viacep.com.br/ws/${this.client.address.zip_code}/json/`)
                    .then((response) => response.json())
                    .then((json) => {
                        if ('erro' in json) {
                            this.validation.zip_code = false
                            console.error('O CEP informado não existe')
                        } else {
                            this.validation.zip_code = true
                            this.client.address.street = json.logradouro || ''
                            this.client.address.neighborhood = json.bairro || ''
                            this.client.address.city = json.localidade || ''
                            this.client.address.state = json.uf || ''
                        }
                    })
            }
        },
        validateCpf() {
            this.validation.cpf = cpf.isValid(this.client.cpf)
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
</style>
