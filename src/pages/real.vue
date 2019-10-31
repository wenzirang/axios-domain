<template>
  <div>真实域测试页面</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  mounted() {
      this.getData()
          .then(ret =>{
               console.log("真实域请求回调", ret.data.data);
          })
          .catch(err =>{
                console.log("error-from-real.vue");
          })
  },
  methods: {
    ...mapActions("realStore", {
      getData: "getData"
    })
  }
};
</script>

<style scoped>
</style>