<script setup lang="ts">
// // check permission
// definePageMeta({
//   middleware: 'permission'
// })

const handleClickBackBtn = () => {
  navigateTo('/generator/step/camera')
}
const handleClickNextBtn = () => {
  navigateTo('/generator/step/download')
}
</script>

<template>
  <main>
    <div class="title-container">
      <span></span>
      <span v-for="char in '確認海報'">
        {{ char }}
      </span>
    </div>
    <div class="result-container">
      <img src="@/assets/img/frame.png" />
      <img src="@/assets/img/test.png" />
    </div>
    <div>
      <button class="btn-back" @click="handleClickBackBtn">重新拍攝</button>
      <button @click="handleClickNextBtn">前往下載</button>
    </div>
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

.result-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 36px;
  margin-bottom: 60px;

  img:first-child {
    position: absolute;
  }
}

button {
  @include primary-button(50px);
}

.btn-back {
  @extend %btn-back;
}
</style>