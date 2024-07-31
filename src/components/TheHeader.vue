<template>
    <header class="container-fluid header">
        <div class="container p-2">
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
        </div>
    </header>
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
