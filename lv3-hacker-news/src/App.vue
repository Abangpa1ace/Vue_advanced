<template>
  <div id="app">
    <Header></Header>
    <transition name="fade">
      <router-view class="main"></router-view>
    </transition>
    
  </div> 
</template>

<script>
import Header from './components/Header';
export default {
  components: {
    Header,
  }
}
</script>

<style>
@import "./style/App.css";

/* CSS : Router Transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>