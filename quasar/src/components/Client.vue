<template>
  <div :class="{ Client: !isPremium,'Client-premium': isPremium}" >
    <h4>name: {{Client.name }}</h4>
    <hr>
    <p>email: {{ Client.email }}</p>
    <client/>

  </div>
</template>

<script>
export default {
  setup() {
    return {
      isPremium: true,
    };
  },
  props: {
    Client: Object
  }
}
</script>
