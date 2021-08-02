<template>
<div class="q-pa-md" id="Title">
<b><h2>Ficha de cadastro.</h2></b>
</div>



<div class="q-pa-md">
    <div class="q-gutter-md"  >
      <h5 id="Sub-title">Dados do usuário</h5>
      <q-input color="orange-10" class="input"  v-model="text" label="Nome" />

      <q-input color="orange-10" class="input" square filled v-model="Nome" label="Sobrenome" />

      <q-input color="orange-10" class="input" square filled v-model="text" label="CPF" />

      <q-input color="orange-10" class="input" square filled v-model="text" label="Telefone" />

      <q-input color="orange-10" class="input" square filled v-model="text" label="Celular" />

      <q-input color="orange-10" class="input" square filled v-model="text" label="Data de Nascimento">
        <template v-slot:append>
          <q-icon name="event" color="orange" />
        </template>
      </q-input><br>

      <h5 id="Sub-title">Endereço de entrega</h5>
      <q-input color="orange-10" class="input"  square filled v-model="text" label="CEP" />

      <q-input color="orange-10" class="input" square filled v-model="text" label="Rua" />

      <q-input color="orange-10" class="input" square filled v-model="text" label="Número" />

      <q-input color="orange-10" class="input" square filled v-model="text" label="Complemento" />

      <q-input color="orange-10" class="input" square filled v-model="text" label="Bairro" />

      <q-input color="orange-10" class="input" square filled v-model="text" label="Cidade" />

      <q-input color="orange-10" class="input" square filled v-model="text" label="Estado" />
    </div>
  </div>
  <div id="buttom"><q-btn position: color="secondary" label="Cadastrar"/>
</div>

</template>












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


}

.q-gutter-md {
  color:orangered;
  text-transform: uppercase;
 padding-left: 25%;
 padding-right: 25%;

}
#buttom {

 text-align: center;
 margin-top: 2vh;


}





</style>
