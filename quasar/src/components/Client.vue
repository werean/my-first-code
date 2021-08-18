<template>
<div class="q-gutter-md">
  <div :class="{ Client: !isPremium, 'Client-premium': isPremium }">
    <h5>Ficha de cadastro</h5>
    <p>name: {{ Client.name }}</p>
    <p>lastName: {{ Client.lastName }}</p>
    <p>cpf: {{ Client.CPF }}</p>
    <p>fone: {{ Client.fone }}</p>
    <p>cel: {{ Client.cel }}</p>
    <p>birthday: {{ Client.birth }}</p>
    <p>CEP: {{ Client.cep}} </p>
    <p>street: {{ Client.street}}</p>
    <p>streetNumber: {{Client.streetNumber}}</p>
    <p>complement: {{ Client.complement }}</p>
    <p>district: {{ Client.district}}</p>
    <p>city: {{ Client.city}}</p>
    <p>state: {{ Client.state }} </p>
    <button @click="eventDelet"> Deletar</button>
    </div>
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
    Client: Object,
    checked: Boolean,
    message: String,
  },
  methods: {
    changeUser: function () {
      this.isPremium = !this.isPremium;
    },
    eventDelet: function() {
      console.log("é o deletas")
      this.$emit("delet",{component: this})}
  },

};
</script>

<style scoped>
.Client-premium {
  background-color: black;
  max-width: 600px;
  height: 650px;
  padding: 5%;
  margin-top: 2%;
}

</style>
