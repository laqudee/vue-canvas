<script setup>
import { ref, onMounted, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const instance = getCurrentInstance().proxy;

const kcRef = ref(null);
const src = " http://192.168.22.77:8000/#/";

const iframeInit = () => {
  const iframe = kcRef.value;
  console.log("iframe: ", iframe);
  iframe.onload = function () {
    console.log("iframe onload");
    iframe.contentWindow.postMessage(
      {
        token: "get_token",
        // token: "cba9fd30805e4c23bc1c02ad2da3d89d"
      },
      src
    );
  };
  // 处理兼容问题
  if (iframe.attachEvent) {
    // 监听子级返回数据
    window.attachEvent(
      "onmessage",
      (e) => {
        alert("从子获监听得：", e.data);
        // iframe.contentWindow.postMessage(
        //   {
        //     token: "get_token",
        //   },
        //   src
        // );
      },
      false
    );
  } else {
    // 接受子级返回数据
    window.addEventListener(
      "message",
      (e) => {
        console.log("从子获得：", e.data);
        // router.go(-1);
        // router.back();
        // router.push({name: 'home'})

        iframe.contentWindow.postMessage(
          JSON.stringify({
            token: "get_token_get",
          }),
          src
        );
      },
      false
    );
  }
};

onMounted(() => {
  iframeInit();
});
</script>

<template>
  <div class="box">
    <iframe
      name="kc"
      ref="kcRef"
      :src="src"
      scrolling="auto"
      width="100%"
      height="100%"
    ></iframe>
  </div>
</template>

<style scoped>
.box {
  width: 100%;
  height: 700px;
}
</style>
