<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">-->
  <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <!--<Test msg="TEST Your Vue.js App"/>-->

  <div id = "app">
    <Navbar/>
    <router-view/>

  </div>
  

</template>

<script>
/*import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}*/

/*import Test from './components/Test.vue';
export default {
  name: 'App',
  components: {
    Test
  }
}*/

import Navbar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  }
}

</script>

<style>
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
