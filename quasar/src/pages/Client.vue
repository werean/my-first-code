<template>
  <q-page class="flex flex-center">
    <ClientComponet
          v-bind="name1"
    />
  </q-page>
</template>

<script>
import ClientComponet from 'components/Client.vue'

const clients = [
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
      ]
var name1 = 'Caralho de Teste'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ClientList',
  components: {
    ClientComponet
  },


})
</script>
