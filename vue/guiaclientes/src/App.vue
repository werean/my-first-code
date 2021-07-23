<template>
  <div id="app">
    <input type="text" v-model="nomedovictor" />
    <Cliente cliente="" />
    <Cliente nome="Lucas" email="lucas@gmail.com" numero="55" />
    <Cliente nome="Andre" email="andre@gmail.com" numero="100" />
    <Cliente nome="Adriano" />
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
      },
    };
  },
  components: {
    Cliente,
  },
};
</script>

<style scoped></style>
