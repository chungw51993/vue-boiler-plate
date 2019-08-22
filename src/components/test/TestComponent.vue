<template>
  <section id="test-page">
    <div class="test-container">
      <div class="header">Vue Boiler Plate is alive</div>
      <div class="count">{{$store.getters.count}}</div>
      <span>Check Store by entering number and submit</span>
      <input v-model="add" class="input" placeholder="Enter Number" />
      <button @click="addCount()">Submit</button>
      <router-link to="/another">Another Page</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TestComponent',
  data() {
    return {
      add: '',
    };
  },
  methods: {
    addCount() {
      this.$store.dispatch('incrementCount', this.add);
      this.add = '';
    },
  },
};
</script>

<style lang="scss">
section#test-page {
  .test-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    .header {
      font-size: 30px;
    }
    .count {
      margin: 15px 0;
      text-align: center;
    }
    span {
      margin-bottom: 5px;
    }
    input {
      width: 100%;
    }
    button {
      margin-top: 15px;
      width: 50%;
    }
  }
}
</style>
