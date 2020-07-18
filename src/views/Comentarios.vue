<template>
  <div class="container">
      <h1>Comentarios de {{nombre}}</h1>
      <form>
        <div class="form-group">
            <label for="exampleFormControlTextarea1">Agregar Comentario</label>
            <textarea class="form-control" rows="3" v-model="comentario"></textarea>
        </div>
        <button class="btn btn-primary mb-5" @click.prevent="guardarComentario">Enviar</button>
      </form>
  </div>
</template>

<script>
export default {
    name: 'Comentarios',
    data() {
        return {
            comentario: '',
            nombre: this.$store.getters.enviarInfoApi[this.$route.params.index].name,
            indexURL: this.$route.params.index,
            imagen: this.$store.getters.enviarInfoApi[this.$route.params.index].image[3]['#text']
        }
    },
    methods: {
        guardarComentario(){
            if (this.comentario.length <= 10) {
                alert('Debe tener mas de 10 caracteres');
            } else {
                let datosAux = {
                    comentario: this.comentario,
                    name: this.nombre,
                    url: this.indexURL + "-" + this.nombre.replace(' ','-').toLowerCase(),
                    index: this.indexURL,
                    img: this.imagen
                };
                this.$store.dispatch('guardandoComentario',datosAux);
                this.$router.push(`/articulos/${datosAux.url}`);
            }
        }
    },

}
</script>

<style>

</style>