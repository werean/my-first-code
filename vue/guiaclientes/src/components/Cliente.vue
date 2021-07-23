<template>
  <div id="Cliente">
    <h4>nome: {{ nome }}</h4>
    <hr />
    <p>{{ descricao }}</p>
    <hr />
    <p>numero: {{ cliente.numero }}</p>
    <p>email: {{ cliente.email }}</p>
    <p>idade: {{ cliente.idade }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      idade: 22,
      descricao: "Hyoh",
    };
  },
  props: {
    nome: String,
    email: String,
    numero: Number,
    cliente: Object,
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

#Cliente-nome {
  color: darkorange;
}
</style>
