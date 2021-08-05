<template>
  <div class="q-pa-md">
    <div class="q-gutter-md"  >
      <h5 id="Sub-title">Dados do usuário</h5>
      <q-input type="text" placeholder="name" color="orange-10" class="input" square filled label="Nome" />

      <q-input color="orange-10" class="input" square filled label="Sobrenome" />

      <q-input color="orange-10" class="input" square filled label="CPF" />

      <q-input color="orange-10" class="input" square filled label="Telefone" />

      <q-input color="orange-10" class="input" square filled label="Celular" />

      <q-input color="orange-10" class="input" square filled label="Data de Nascimento">
        <template v-slot:append>
          <q-icon name="event" color="orange-10" />
        </template>
      </q-input><br>

      <h5 id="Sub-title">Endereço de entrega</h5>
      <q-input color="orange-10" class="input"  square filled label="CEP" />

      <q-input color="orange-10" class="input" square filled label="Rua" />

      <q-input color="orange-10" class="input" square filled label="Número" />

      <q-input color="orange-10" class="input" square filled label="Complemento" />

      <q-input color="orange-10" class="input" square filled label="Bairro" />

      <q-input color="orange-10" class="input" square filled label="Cidade" />

      <q-input color="orange-10" class="input" square filled label="Estado" />
    </div>
  </div>
</template>


<script>
export default {
  name: 'userRegister',
  data(){
    return{
      nameField: "",
      lastNameField: "",
      cpfField: 0,
      foneField: 0,
      celField: 0,
      birthDayField: 0/0/0,
      cepField:0,
      adressField:"",
      adressNumberField:0,
      complementField:"",
      districtField:"",
      cityField:"",
      stateField:"",
      };
    },
    methods: {
      userRegister: function(){
        this.userRegister.push({name: this.nameField, lastName: this.lastNameField, cpf: this.cpfField, fone: this.foneField, cel: this.celField, birthDay: this.birthDayField, cep: this.cepField, adress: this.adressField, adressNumber: this.adressNumberField, complemente: this.complementField, distritct: this.districtField, city: this.cityField, state: this.stateField, id:Date.now})
      }
    }
  }


</script>




