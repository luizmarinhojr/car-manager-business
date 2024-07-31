<template>
    <div class="container-fluid header mb-3">
        <header class="container p-3">
            <div class="row">
                <div class="col-4">
                    <img src="../assets/Carmotor-no-bg.png" alt="logo" width="100" />
                </div>
                <div class="col-8 align-self-center">
                    <nav class="nav justify-content-end">
                        <RouterLink to="/" class="nav-link">Início</RouterLink>
                        <RouterLink to="/cadastrar-veiculo" class="nav-link">Cadastrar</RouterLink>
                        <RouterLink to="/estoque" class="nav-link">Estoque</RouterLink>
                    </nav>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.header {
    background-color: rgb(22, 22, 22);
}
</style>
