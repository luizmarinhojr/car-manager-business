<template>
    <main>
        <div class="container pt-5">
            <div class="apresentation mb-4">
                <h1>Bem vindo ao CarmotorG</h1>
                <p>O que você gostaria de fazer hoje?</p>
            </div>
            <div class="row options">
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                    <div class="card h-100 shadow-lg">
                        <div class="card-body d-flex flex-column justify-content-between">
                            <h5 class="card-title">Verificar os Clientes</h5>
                            <p class="card-text">Acessar a lista de clientes cadastrados</p>
                            <RouterLink to="/clientes" class="btn botao">Clientes</RouterLink>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                    <div class="card h-100 shadow-lg">
                        <div class="card-body d-flex flex-column justify-content-between">
                            <h5 class="card-title">Verificar o Estoque</h5>
                            <p class="card-text">Acessar a lista de produtos no estoque</p>
                            <RouterLink to="/estoque" class="btn botao">Estoque</RouterLink>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                    <div class="card h-100 shadow-lg">
                        <div class="card-body d-flex flex-column justify-content-between">
                            <h5 class="card-title">Verificar os serviços</h5>
                            <p class="card-text">Acessar os detalhes dos serviços</p>
                            <RouterLink to="/servicos" class="btn botao">Serviços</RouterLink>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                    <div class="card h-100 shadow-lg">
                        <div class="card-body d-flex flex-column justify-content-between">
                            <h5 class="card-title">Verificar os agendamentos</h5>
                            <p class="card-text">Acessar os agendamentos</p>
                            <RouterLink to="/agendamentos" class="btn botao"
                                >Agendamentos</RouterLink
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {},
    watch: {}
}
</script>

<style scoped>
.main-banner {
    display: flex;
    justify-content: center;
}
h1 {
    font-size: 27px;
}

.botao {
    background-color: #c84300;
    color: white;
}
.botao:hover {
    background-color: #8d2f00;
    color: white;
}
</style>
