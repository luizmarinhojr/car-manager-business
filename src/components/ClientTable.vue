<template>
    <table class="table table-striped my-4 align-middle">
        <colgroup>
            <col />
            <col />
            <col />
            <col style="width: 110px" />
        </colgroup>
        <thead>
            <tr>
                <th scope="col">Nome</th>
                <th scope="col">Veículo</th>
                <th scope="col">Celular</th>
                <th scope="col">Ação</th>
            </tr>
        </thead>
        <tbody v-cloak>
            <tr v-for="client in clients" :key="client.id">
                <td v-text="`${client.first_name} ${client.last_name}`"></td>
                <td v-text="client.vehicles[0].license_plate"></td>
                <td v-text="client.cellphone"></td>
                <td><a class="btn botao" :href="`/clients/${client.id}`">Detalhar</a></td>
            </tr>
        </tbody>
    </table>

    <button type="button" @click="fetchData">Teste Api Fetch</button>
</template>

<script>
export default {
    data() {
        return {
            clients: []
        }
    },
    mounted() {
        this.fetchData()
    },
    methods: {
        async fetchData() {
            fetch('http://localhost:8080/clients')
                .then((response) => response.json())
                .then((json) => {
                    this.clients = json.content
                    console.log(this.clients)
                    console.log(this.clients.vehicles)
                })
                .catch((error) => {
                    console.error('Error ao carregar os dados: ', error)
                    throw error
                })
        }
    }
}
</script>

<style scoped>
.botao {
    background-color: #c84300;
    color: white;
}
.botao:hover {
    background-color: #8d2f00;
    color: white;
}
</style>
