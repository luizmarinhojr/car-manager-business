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
                <th scope="col">Sobrenome</th>
                <th scope="col">Celular</th>
                <th scope="col">Ação</th>
            </tr>
        </thead>
        <tbody v-cloak>
            <tr v-for="client in clients" :key="client.id">
                <td v-text="client.firstName"></td>
                <td v-text="client.lastName"></td>
                <td v-text="client.cellphone"></td>
                <td><a class="btn botao" :href="`/clients/${client.id}`">Detalhar</a></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    data() {
        return {
            clients: [
                {
                    id: 1,
                    firstName: 'Carlos',
                    lastName: 'Silva',
                    cellphone: '11987654321',
                    vehicle: {
                        marca: 'Toyota',
                        modelo: 'Corolla',
                        ano: '2018'
                    }
                },
                {
                    id: 2,
                    firstName: 'Mariana',
                    lastName: 'Souza',
                    cellphone: '21998765432',
                    vehicle: {
                        marca: 'Honda',
                        modelo: 'Civic',
                        ano: '2020'
                    }
                },
                {
                    id: 3,
                    firstName: 'Fernando',
                    lastName: 'Pereira',
                    cellphone: '31987654321',
                    vehicle: {
                        marca: 'Ford',
                        modelo: 'Fusion',
                        ano: '2017'
                    }
                },
                {
                    id: 4,
                    firstName: 'Aline',
                    lastName: 'Costa',
                    cellphone: '41998765432',
                    vehicle: {
                        marca: 'Chevrolet',
                        modelo: 'Onix',
                        ano: '2019'
                    }
                },
                {
                    id: 5,
                    firstName: 'Rafael',
                    lastName: 'Moura',
                    cellphone: '51987654321',
                    vehicle: {
                        marca: 'Volkswagen',
                        modelo: 'Golf',
                        ano: '2021'
                    }
                }
            ]
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
