<template>
  <div class="container">
    <h1>Articulo</h1>
    <div class="card">
      <img :src="comentarioActual[0].img" class="card-img-top" alt="imagen">
      <div class="card-body">
        <h5 class="card-title">{{comentarioActual[0].name}}</h5>
        <p class="card-text">{{comentarioActual[0].comentario}}</p>
        <a href="#" class="btn btn-primary">Me gusta</a>
    </div>
</div>
  </div>
</template>

<script>
export default {
  name: "Articulos",
  data() {
    return {
      url: this.$route.params.url
    }
  },
  computed: {
    comentarioActual(){
      return this.$store.getters.enviarListaComentarios.filter(data => data.url == this.url);
    }
  },
}
</script>

<style lang="scss">

</style>