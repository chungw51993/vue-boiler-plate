<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import './assets/styles/base.scss';

export default {
  name: 'App',
};
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
