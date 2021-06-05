<template>
  <button @click="login">login</button>
</template>

<script lang="ts">
import { getList } from "./../api/index";
export default {
  setup() {
    async function login() {
      const res = await getList({
        page: 1,
        pageSize: 10,
      });
      console.log(res.pagedata.records[0].id);
    }
    return {
      login,
    };
  },
};
</script>

<style scoped lang="scss">
button {
  color: #000;
}
</style>