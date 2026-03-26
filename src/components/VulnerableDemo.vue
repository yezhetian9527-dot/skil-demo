<template>
  <div class="demo">
    <h2>Vulnerable Demo</h2>

    <p>从 URL 读取 html 参数并直接渲染：</p>
    <div v-html="htmlFromQuery"></div>

    <p>外部链接：</p>
    <a :href="userLink" target="_blank">打开链接</a>

    <p>图片地址：</p>
    <img :src="userImage" alt="user image" />
  </div>
</template>

<script setup lang="ts">
const params = new URLSearchParams(window.location.search)

const htmlFromQuery = params.get('html') || '<b>default</b>'
const userLink = params.get('link') || 'javascript:alert("xss")'
const userImage = params.get('img') || 'javascript:alert("img-xss")'
</script>

<style scoped>
.demo {
  padding: 24px;
}
</style>
