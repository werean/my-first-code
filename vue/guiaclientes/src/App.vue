<template>
  <div id="app">
    <!-- abaixo esse "v-for" lê uma lista de dados e exibe de maneira dinamica -->
    <div v-for="(client, index) in clients" :key="client.id">
      <h4>{{ index + 1 }}</h4>
      <Client :client="client" />
      <hr />
      <h4>Edição:</h4>
      <input type="text" v-model="client.name" />
      <input type="text" v-model="client.email" />
    </div>
  </div>
</template>

<script>
import Client from "./components/Client.vue";
export default {
  name: "App",
  data() {
    return {
      admin: {
        name: "lucas",
        sex: "M",
        email: "lucas@gmail.com",
        age: 99,
        showAge: true,
      },
      clients: [
        {
          id: 22,
          name: "lucas",
          sex: "F",
          email: "lucas@silva.com",
          age: 60,
          showAge: false,
        },
        {
          id: 38,
          name: "andrew gustavo",
          sex: "F",
          email: "gustavoandrew@gmail.com",
          age: 35,
          showAge: true,
        },
        {
          id: 79,
          name: "matheus barbosa",
          sex: "M",
          email: "matheus@barbosa.com",
          age: 99,
          showAge: true,
        },
        {
          id: 38,
          name: "vanderlei",
          sex: "M",
          email: "vanderlei@gmail.com",
          age: 35,
          showAge: false,
        },
      ],
    };
  },
  components: {
    Client,
  },
};
</script>

<style scoped></style>
