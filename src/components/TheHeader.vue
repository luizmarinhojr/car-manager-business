<template>
    <header class="container-fluid p-0">
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <RouterLink to="/" class="navbar-brand"
                    ><img src="../assets/Carmotor-no-bg.png" alt="logo" width="100"
                /></RouterLink>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav gap-2">
                        <li class="nav-item">
                            <RouterLink
                                to="/"
                                :class="`nav-link ${$route.name == 'inicio' ? 'active' : ''} menu-link`"
                                >Início</RouterLink
                            >
                        </li>
                        <li class="nav-item">
                            <RouterLink
                                to="/clientes"
                                :class="`nav-link ${$route.name == 'clientes' ? 'active' : ''} menu-link`"
                                >Clientes</RouterLink
                            >
                        </li>
                        <li class="nav-item">
                            <RouterLink
                                to="/servicos"
                                :class="`nav-link ${$route.name == 'servicos' ? 'active' : ''} menu-link`"
                                >Serviços</RouterLink
                            >
                        </li>
                        <li class="nav-item">
                            <RouterLink
                                to="/agendamentos"
                                :class="`nav-link ${$route.name == 'agendamentos' ? 'active' : ''} menu-link`"
                                >Agendamentos</RouterLink
                            >
                        </li>
                        <li class="nav-item">
                            <RouterLink
                                to="/estoque"
                                :class="`nav-link ${$route.name == 'estoque' ? 'active' : ''} menu-link`"
                                >Estoque</RouterLink
                            >
                        </li>
                        <li class="nav-item ps-3">
                            <RouterLink
                                to="/cadastrar-veiculo"
                                :class="`nav-link ${$route.name == 'cadastrar' ? 'active' : ''} menu-link cadastrar-botao`"
                                ><img src="./icons/circle-plus.svg" class="plus-icon" />
                                Novo</RouterLink
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {}
</script>

<style scoped>
header {
    background-color: rgb(22, 22, 22);
}
.menu-link {
    color: var(--bs-heading-color);
}
.cadastrar-botao {
    display: flex;
    align-items: center;
    gap: 4px;
    background-color: #c84300;
    border-radius: 0.375rem;
    font-weight: bold;
}
.plus-icon {
    width: 18px;
    filter: invert(100%) sepia(6%) saturate(0%) hue-rotate(115deg) brightness(108%) contrast(108%);
}
</style>
