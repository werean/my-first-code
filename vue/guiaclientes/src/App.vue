<template>
  <div id="app">
    <h1>Guia Clientes</h1>
    <Cliente />
    <Cliente />
    <Cliente />
    <Cliente />
  </div>
</template>

<script>
import Cliente from "./components/cliente.vue";
export default {
  name: "App",
  components: {
    Cliente,
  },
};
</script>

<style scoped></style>
