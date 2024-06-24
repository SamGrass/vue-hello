const { createApp } = Vue;

createApp({
  data() {
    return {
      message: 'Si inizia con Vue',
      image: 'img/Logo-Vuejs.png'
    }
  }
}).mount('#app')