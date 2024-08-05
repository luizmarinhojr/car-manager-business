<template>
    <div class="row">
        <div class="col-md form-floating mb-3">
            <input
                type="text"
                :class="`form-control ${client.first_name.length > 1 ? 'is-valid' : ''}`"
                id="clientName"
                placeholder="Campo Obrigatório"
                v-model="client.first_name"
                required
            />
            <label class="input_label" for="clientName">Nome</label>
        </div>

        <div class="col-md form-floating mb-3">
            <input
                type="text"
                :class="`form-control ${client.last_name.length > 3 ? 'is-valid' : ''}`"
                id="clientLastName"
                placeholder="Campo Obrigatório"
                v-model="client.last_name"
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
                :class="`form-control ${client.email != null && client.email.includes('@') && client.email.includes('.') ? 'is-valid' : ''}`"
                id="email"
                placeholder="Campo Obrigatório"
                v-model="client.email"
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
                        :class="`form-control ${client.birth_date != null && client.birth_date.length == 10 ? 'is-valid' : ''}`"
                        id="dateBirth"
                        placeholder="Campo Obrigatório"
                        v-model="client.birth_date"
                        required
                    />
                    <label class="input_label" for="dateBirth">Nascimento</label>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 form-floating mb-3">
                    <input
                        type="text"
                        :class="`form-control ${validation.cep == null ? '' : validation.zip_code ? 'is-valid' : 'is-invalid'}`"
                        id="zip_code"
                        v-maska="'#####-###'"
                        placeholder="Campo Obrigatório"
                        v-model="client.address.cep"
                        @blur="fetchAddress"
                        required
                    />
                    <label class="input_label" for="zip_code">CEP</label>
                </div>

                <div class="col-md-8 form-floating mb-3">
                    <input
                        type="text"
                        :class="`form-control ${client.address.street != null && client.address.street.length > 5 ? 'is-valid' : ''}`"
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
                        :class="`form-control ${client.address.neighborhood != null && client.address.neighborhood.length > 5 ? 'is-valid' : ''}`"
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
                        :class="`form-control ${client.address.number != null && client.address.number.length > 0 ? 'is-valid' : ''}`"
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
                <div class="col-md-6 form-floating mb-3">
                    <input
                        type="text"
                        :class="`form-control ${client.address.city != null && client.address.city.length > 5 ? 'is-valid' : ''}`"
                        id="city"
                        maxlength="30"
                        placeholder="Campo Obrigatório"
                        v-model="client.address.city"
                        required
                    />
                    <label class="input_label" for="city">Cidade</label>
                </div>

                <div class="col-md-2 form-floating mb-3">
                    <input
                        type="text"
                        :class="`form-control ${client.address.state != null && client.address.state.length == 2 ? 'is-valid' : ''}`"
                        id="state"
                        maxlength="30"
                        v-maska="'@@'"
                        placeholder="Campo Obrigatório"
                        v-model="client.address.state"
                        required
                    />
                    <label class="input_label" for="state">Estado</label>
                </div>

                <div class="col-md-4 form-floating mb-3">
                    <input
                        type="text"
                        :class="`form-control ${client.address.country != null && client.address.country.length > 5 ? 'is-valid' : ''}`"
                        id="country"
                        maxlength="30"
                        placeholder="Campo Obrigatório"
                        v-model="client.address.country"
                        required
                    />
                    <label class="input_label" for="country">País</label>
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
                first_name: '',
                last_name: '',
                cellphone: '',
                email: null,
                moreData: null,
                cpf: null,
                birth_date: null,
                address: {
                    cep: null,
                    street: null,
                    number: null,
                    neighborhood: null,
                    city: null,
                    state: null,
                    country: null
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
            if (this.client.address.cep.length == 9) {
                fetch(`https://viacep.com.br/ws/${this.client.address.cep}/json/`)
                    .then((response) => response.json())
                    .then((json) => {
                        if ('erro' in json) {
                            this.validation.cep = false
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
