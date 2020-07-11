<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link class="navbar-brand" to="/">Home</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/administracion">Administración</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/articulos">Articulos</router-link>
            </li>
            </ul>
        </div>
    </nav>
  </div>
</template>

<script>
export default {
    name: 'Navegacion'
}
</script>

<style>

</style>