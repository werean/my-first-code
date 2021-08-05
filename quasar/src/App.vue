
<template>
<div class="q-pa-md" id="Title">
<h2>Ficha de cadastro</h2>
</div>
<!-- se precisar colocar "v-model" -->
<body>
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




<div id="buttom-back">



  <q-btn id="buttom-back" round color="black" icon="west" />
  <q-btn id="buttom-up" round color="black" icon="north" @click="topFunction()" />


</div>
<div id="buttom"><q-btn position: color="orange-10" label="Próximo"/></div>
  </body>

  <q-card class="my-card">
      <q-card-section align="center" class="bg-purple text-white">
        <div class="text-h6">Avalie para liberar o pagamento!</div>
        <span class="material-icons">thumb_up</span>
        <div class="text-subtitle2">Atendimento,
          tempo de entrega e
          qualidade do serviço.
        </div>
      </q-card-section>

      <q-card-actions align="around">
        <q-btn flat>Avaliar</q-btn>
        <q-btn flat>Talvez mais tarde</q-btn>
      </q-card-actions>
    </q-card>
</template>









<script>
import { defineComponent } from '@vue/composition-api'
import ajax from 'ajax'
var mybutton = document.getElementById("Title");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction(el) {
  console.log(document.documentElement.scrollTop)
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  console.log(document.documentElement.scrollTop)
  for(var i=document.documentElement.scrollTop ; i >= 1 ; i--)
  {

    document.documentElement.scrollTop = i;
  }


}

export default defineComponent({

  setup() {
return{
  topFunction,
}
  },
})

import userRegister from "./components/Register.vue"
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










</style>
