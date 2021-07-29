
<template>
  <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="client.id"
        label="Your id"
        hint="ID"
      />
      <q-input
        filled
        v-model="client.name"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        v-model="client.email"
        label="Your email *"
        hint="Email"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        v-model="client.sex"
        label="Your sex"
        hint="Sex"
        lazy-rules
        :rules="[ val => val =='M' ||val =='F' || 'Please type something']"
      />
      <q-input
        filled
        type="number"
        v-model="client.age"
        label="Your age *"
        hint="Age"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
        ]"
      />

      <q-toggle v-model="accept" label="I accept the license and terms" />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
    {{ name1 }}
    {{ client.name }}
    {{ title }}
  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

var client = {
          id: null,
          name: null,
          sex: null,
          email: null,
          age: null,
        }

import { defineComponent } from 'vue'
export default defineComponent({
  name:'ClientList',
  props: {
    title: {
      type: String,
      required: true
    },

    name1: {
      type: String,
      required: true
    },


    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  },
  setup () {
    const $q = useQuasar()


    const age = ref(null)
    const accept = ref(false)

    return {
      age,
      accept,
      client,


      onSubmit () {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
          })
        }
        else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
        }
      },

      onReset () {
        name.value = null
        age.value = null
        accept.value = false
      }
    }
  }
})

</script>
