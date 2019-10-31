<template>
  <div>主域测试页面</div>
</template>

<script>
import Services from "@/services/serviceConfig";

export default {
  mounted() {
    debugger;
    this.$http
        .post(Services.zy.TESTPOST, {})
        .then(ret => {
            console.log("主域请求回调", ret.data.data);
        })
        .catch(err => {
            console.log("error-from-zy.vue");
        });
  }
};
</script>

<style scoped>
</style>˜