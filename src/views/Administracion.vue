<template>
  <div class="container">
      <h1>Administracion</h1>
      <table class="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Comentario</th>
            <th>Eliminar</th>
            <th>Editar</th>
            <th>Ver</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in traerComentarios" :key="index">
            <th>{{index}}</th>
            <td>{{item.name}}</td>
            <td>{{item.comentario}}</td>
            <td><button class="btn btn-danger">Eliminar</button></td>
            <td><button class="btn btn-light">Editar</button></td>
            <td><button class="btn btn-info">Ver</button></td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
export default {
    name: 'Administracion',
    computed: {
      traerComentarios(){
        return this.$store.getters.enviarListaComentarios;
      }
    },
}
</script>

<style>

</style>