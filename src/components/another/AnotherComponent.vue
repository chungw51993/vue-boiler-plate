<template>
  <section id="another-page">
    <div class="ap-container">
      <div class="header">Welcome to another page</div>
      <router-link to="/">Back</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AnotherComponent',
  metaInfo: {
    title: 'Another Test Page',
    titleTemplate: null,
  },
};
</script>

<style lang="scss">
section#another-page {
  .ap-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    .header {
    font-size: 30px;
    }
  }
}
</style>
