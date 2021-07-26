<template>
  <div class="cliente-premium">
    <h4>nome: {{ cliente.nome }}</h4>
    <hr />
    <p>email: {{ cliente.email }}</p>
    <p v-if="showage == true">idade: {{ cliente.idade }}</p>
    <p v-else>O usuario escondeu a idade</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ispremium: false,
    };
  },
  props: {
    cliente: Object,
    showage: Boolean,
  },
};
</script>

<style scoped>
#Cliente {
  background-color: black;
  max-width: 600px;
  height: 210px;
  padding: 1%;
  margin-top: 1%;
}

#cliente-premium {
  background: black;
  color: yellowgreen;
  max-width: 600px;
  height: 180px;
  padding: 1%;
  margin-top: 2%;
}
</style>
