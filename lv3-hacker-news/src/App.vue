<template>
  <div id="app">
    <Header></Header>
    <router-view class="main"></router-view>
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

</style>