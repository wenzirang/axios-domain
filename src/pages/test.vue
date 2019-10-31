<template>
  <div>测试域页面</div>
</template>

<script>
import Services from "@/services/serviceConfig";

export default {
  mounted() {
    this.$testMock
        .post(Services.zy.TESTPOST, {})
        .then(ret => {
            console.log("测试域请求回调", ret.data.data);
        })
        .catch(err => {
            console.log("error-from-cs.vue");
        });
  }
};
</script>

<style scoped>
</style>˜