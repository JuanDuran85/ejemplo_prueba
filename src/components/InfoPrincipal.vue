<template>
  <div class="container">
    <h1 class="text-center my-3">Info Principal</h1>
    <div class="row">
      <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-4" v-for="(item,index) in datosApi" :key="index">
        <div class="card">
          <img :src="item.image[3]['#text']" class="card-img-top" :alt="item.index">
          <div class="card-body">
            <h5 class="card-title">{{item.name}}</h5>
            <p class="card-text">{{item.listeners}} - {{item.playcount}}</p>
            <a class="btn btn-primary mx-3" @click.prevent="enviarInfoComentario(index)">Comentario</a>
            <a :href="item.url" class="btn btn-primary" target="_blank">Ir al Sitio</a>
        </div>
    </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoPrincipal',
  data() {
    return {

    }
  },
  computed: {
    datosApi(){
      return this.$store.getters.enviarInfoApi;
    }
  },
  methods: {
    enviarInfoComentario(index){
      this.$router.push(`/comentarios/${index}`);
    }
  }
}
</script>

<style scoped lang="scss">

</style>
