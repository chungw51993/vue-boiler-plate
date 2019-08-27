<template>
  <section id="test-page">
    <div class="test-container">
      <div class="header">Vue Boiler Plate is alive</div>
      <div class="count">{{this.count}}</div>
      <span>Check Store by entering number and submit</span>
      <input
        class="input"
        placeholder="Enter Number"
        type="number"
        v-model="add"
      />
      <button @click="addCount()">Submit</button>
      <router-link to="/another">Another Page</router-link>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'TestComponent',
  metaInfo: {
    title: 'Main Test Page',
    titleTemplate: null,
  },
  computed: {
    add: {
      get() {
        return this.$store.state.test.add;
      },
      set(value) {
        return this.$store.dispatch(
          'changeTestStateInfo',
          {
            field: 'add',
            value: Number(value),
          },
        );
      },
    },
    ...mapState({
      count: state => state.test.count,
    }),
  },
  methods: {
    addCount() {
      const { add } = this;
      this.$store.dispatch('incrementCount', add);
    },
    handleInput(field, value) {
      this.$store.dispatch('changeTestStateInfo', { field, value });
    },
  },
  mounted() {
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
