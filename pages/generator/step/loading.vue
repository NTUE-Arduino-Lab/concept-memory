<script setup lang="ts">
// // check permission
// definePageMeta({
//   middleware: 'permission'
// })

const handleClickBackBtn = () => {
  navigateTo('/generator/step/camera')
}
</script>

<template>
  <main>
    <div class="title-container">
      <span></span>
      <span v-for="char in '海報生成中'">
        {{ char }}
      </span>
      <span>...</span>
    </div>
    <img class="loading" src="/_nuxt/assets/img/loading.gif" />
    <button class="btn-back" @click="handleClickBackBtn">取消</button>
  </main>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.title-container {
  @extend %title-container;

  & span:first-child {
    display: none;
  }
}

.camera-container {
  width: 600px;
  height: 450px;
  margin-bottom: 36px;

  .photo {
    width: 100%;
    height: 100%;
  }
}

.loading {
  margin-top: 42px;
  margin-bottom: 52px;
}

button {
  @include primary-button(50px);
}

.btn-back {
  @extend %btn-back;
  margin: 0;
}
</style>