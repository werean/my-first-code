
<template>
<div  id="Title">
<h2>Ficha de cadastro</h2>
</div>
<!-- se precisar colocar "v-model" -->
<body>
<h1><small id="error" v-show="notFound" >Dados invalidos!</small></h1>

    <div class="q-gutter-md"  >
      <h5 id="Sub-title">Dados do usuário</h5>

      <q-input type="text" placeholder="name" color="orange-10" v-model="nameField" class="input" square filled label="Nome" />

      <q-input color="orange-10" v-model="lastNameField" class="input" square filled label="Sobrenome" />

      <q-input color="orange-10" v-model="cpfField" class="input" square filled label="CPF" />

      <q-input color="orange-10" v-model="foneFIeld" class="input" square filled label="Telefone" />

      <q-input color="orange-10" v-model="celField" class="input" square filled label="Celular" />

      <q-input color="orange-10" v-model="birthField" class="input" square filled label="Data de Nascimento">
        <template v-slot:append>
          <q-icon name="event" color="orange-10" />
        </template>
      </q-input><br>

      <h5 id="Sub-title">Endereço de entrega</h5>
      <q-input color="orange-10" v-model="cepField" class="input" square filled label="CEP" />

      <q-input color="orange-10" v-model="streetField" class="input" square filled label="Rua" />

      <q-input color="orange-10" v-model="streetNumberField" class="input" square filled label="Número" />

      <q-input color="orange-10" v-model="complementField" class="input" square filled label="Complemento" />

      <q-input color="orange-10" v-model="districtField" class="input" square filled label="Bairro" />

      <q-input color="orange-10" v-model="cityField" class="input" square filled label="Cidade" />

      <q-input color="orange-10" v-model="stateField" class="input" square filled label="Estado" />
      <div v-for="(Client) in Clients" :key="Client.id">
        <client :Client="Client" @delet="deletUser"/>
    </div>
  </div>




<div id="buttom-back">



  <q-btn id="buttom-back" round color="black" icon="west" />



</div>
<div @click="registerUser" id="buttom"><q-btn position: color="orange-10" label="Cadastrar"/></div>
  </body>
</template>









<script>
import Client from "./components/Client.vue";
export default {
  name: "App",
  data() {
    return {
      notFound: false,
      nameField: "",
      lastNameField: "",
      cpfField: "",
      foneFIeld:"",
      celField:"",
      birthField:"",
      cepField: '',
      streetField:"",
      streetNumberField:"",
      complementField:"",
      districtField:"",
      cityField:"",
      stateField:"",

      Clients: [

      ],
    };
  },
  components: {
    Client,
  },
  methods: {
    registerUser: function (){
    if(this.nameField == "" || this.cpfField == "" || this.foneField == "" || this.celField == "" || this.birthField == "" || this.cepField == "" || this.streetField == "" || this.streetNumberField == "" || this.complementField == "" || this.districtField == "" || this.cityField == "" || this.stateField == "" || this.nameField.length < 3 ){
      this.notFound = true;
      }else{
    this.Clients.push({name: this.nameField,
      lastName: this.lastNameField,
       cpf: this.cpfField,
        fone: this.foneField,
         cel: this.celField,
         birthday: this.birthField,
         cep: this.cepField,
         street: this.streetField,
         streetNumber: this.streetNumberField,
         complement: this.complementField,
         district: this.districtField,
         city: this.cityField,
         state: this.stateField,
           id: Date.now()})
           this.nameField = "";
           this.lastNameField ="";
           this.cpfField = "";
           this.foneField = "";
           this.celField = "";
           this.birthdayField = "";
           this.cepField = "";
           this.streetField = "";
           this.streetNumberField = "";
           this.complementField = "";
           this.districtField = "";
           this.cityField = "";
           this.stateField = "";
           this.notFound = false
           }
        },
        deletUser: function() {
      console.log("me deleto porra");

    }
  }
};
</script>









<style scoped>

#Title {
background-color:orangered;
color:black;
text-align: center;
margin-bottom: 3vh;


}
#Sub-title {
color:black;
text-align: center;


}

.q-pa-md {
  color:orangered;
  text-transform: uppercase;
  max-width: 100%;
  min-width:  400px;
  font-family: 'Signika', sans-serif;



}

.q-gutter-md {
  color:orangered;
  text-transform: uppercase;
 padding-left: 25%;
 padding-right: 25%;
 font-family: 'Signika', sans-serif;

}
#buttom {

 text-align: center;
 margin-top: -4vh;
}

#buttom-form {
  display: flex;

}

#buttom-back {
  margin-left: 5%;

}

#buttom-up {
  margin-left: 70%;


}

#my-card {
  text-align: center;

}

#error {
  color: red;
}










</style>
