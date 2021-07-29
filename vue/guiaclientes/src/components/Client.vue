<template>
  <div :class="{ client: !isPremium, 'client-premium': isPremium }">
    <h4>name: {{ client.name }}</h4>
    <hr />
    <p>email: {{ client.email }}</p>
    <span>Digite sua observação:</span>
    <br />
    <input type="text" v-model="message" placeholder="Digite aqui" />
    <p>
      <input type="checkbox" id="checkbox" v-model="checked" /> Mostar/Ocultar
      idade
    </p>

    <p v-if="checked === true">idade: {{ client.age }}.</p>

    <p  v-else-if="client.sex === 'F' && client.age >= 60">
      A senhora preferiu ocultar a idade
    </p>
    <p v-else-if="client.sex === 'F' && client.age < 10">
      A criança preferiu ocultar a idade
    </p>
    <p v-else-if="client.sex === 'F'">A usuaria não se revelou.</p>
    <p v-else-if="client.sex === 'M' && client.age >= 60">
      O senhor preferiu ocultar a idade
    </p>
    <p v-else-if="client.sex === 'M' && client.age < 10">
      O criansso preferiu ocultar a idade
    </p>
    <p v-else-if="client.sex === 'M'">O usuario não se revelou.</p>
    <p v-else-if="client.age >= 60">
      A coisa aparentemente arcaico ou/a acaica não se revelou.
    </p>
    <p v-else-if="client.age < 10">A coisa não se revelou.</p>

    <p v-else>Erro de dados informe o adm bizonho.</p>
    <p v-if="message === 'Nao sou programador'">User</p>
    <p v-if="message === 'É programador'">Bem vindo mestre.</p>
    <p v-else>Observação sobre o individuo: {{ message }}.</p>
    <q-btn @click="changeUser">Alterar User/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPremium: true,
    };
  },
  props: {
    client: Object,
    checked: Boolean,
    message: String,
  },
  methods: {
    changeUser: function () {
      this.isPremium = !this.isPremium;
    },
  },
};
</script>

<style scoped>
.Cliente {
  background-color: black;
  max-width: 600px;
  height: 210px;
  padding: 1%;
  margin-top: 1%;
}
.Button {
  background-color: rgb(167, 18, 18);
}
.client-premium {
  background: black;
  color: yellowgreen;
  max-width: 600px;
  height: 280px;
  padding: 1%;
  margin-top: 2%;
}
</style>
