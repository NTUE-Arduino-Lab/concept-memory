<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <nav>
    <NuxtLink to="/" class="nav-link">
      <img src="@/assets/img/TCMB.png" alt="">
      <h1>AI 記憶造浪者：<br>超時空電影海報繪師</h1>
    </NuxtLink>
    <div></div>
    <NuxtLink to="/posters" class="nav-link">
      海報牆
    </NuxtLink>
    <NuxtLink to="https://tcmb.culture.tw/zh-tw" class="nav-link" target="_blank">
      更多電影故事
    </NuxtLink>
  </nav>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
nav {
  height: 62px;
  padding: 0 30px;
  background-color: $bg-white;
  display: grid;
  grid-template-columns: max-content auto max-content max-content;

  img {
    width: 215px;
  }

  h1 {
    display: inline-block;
    @include font(serif,16px,900);
    padding: 0;
    margin: 0;
  }

  .nav-link {
    @include font(serif,18px,900);
    display: flex;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;

    &:first-child {
      padding: 0;
    }
    
  }
}

</style>