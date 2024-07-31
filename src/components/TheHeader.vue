<template>
    <div class="container-fluid header mb-3">
        <header class="container p-3">
            <div class="row">
                <div class="col-4">
                    <RouterLink to="/"
                        ><img src="../assets/Carmotor-no-bg.png" alt="logo" width="100"
                    /></RouterLink>
                </div>
                <div class="col-8 align-self-center">
                    <nav class="nav justify-content-end">
                        <RouterLink to="/" class="nav-link menu-link">Início</RouterLink>
                        <RouterLink to="/cadastrar-veiculo" class="nav-link menu-link"
                            >Cadastrar</RouterLink
                        >
                        <RouterLink to="/estoque" class="nav-link menu-link">Estoque</RouterLink>
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
.menu-link {
    color: var(--bs-heading-color);
}
</style>
