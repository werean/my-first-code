<template>
  <div id="app">
    <input type="text" v-model="clientevictor.nome" />
    <input type="text" v-model="clientevictor.email" />
    <Cliente :cliente="clientevictor" :showage="true" />
    <Cliente :cliente="clientevictor" :showage="true" />
    <Cliente :cliente="clientevictor" :showage="false" />
    <Cliente :cliente="clientevictor" :showage="false" />
  </div>
</template>

<script>
import Cliente from "./components/Cliente.vue";
export default {
  name: "App",
  data() {
    return {
      nomedovictor: "j. victor o. lima",
      clientevictor: {
        nome: "victor lima",
        email: "victor@gmail.com",
        idade: 99,
      },
    };
  },
  components: {
    Cliente,
  },
};
</script>

<style scoped></style>
