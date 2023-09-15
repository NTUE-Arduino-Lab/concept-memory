<script setup lang="ts">
import { usePostersStore } from '@/stores/posters'
import { ref, uploadString } from "firebase/storage"


// // check permission
// definePageMeta({
//   middleware: 'permission'
// })

const postersStore = usePostersStore()

const { $storage } = useNuxtApp()

const handleClickBackBtn = () => {
  navigateTo('/generator/step/camera')
}
const handleClickNextBtn = () => {
  uploadPoster()

  navigateTo('/generator/step/download')
}

const uploadPoster = async () => {
  try {
    const timestamp = new Date().getTime();
    const randomId = Math.random().toString(36).substring(2, 8);
    const uniqueName = `${timestamp}-${randomId}`;

    const storageRef = ref($storage, `images/${uniqueName}`);

    uploadString(storageRef, postersStore.resultImgBase64, 'data_url')
      .then((snapshot: any) => {
      });
  } catch (e) {
    console.error(e);
  }
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
      <img :src="postersStore.resultImgBase64" alt="" class="poster">
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
  margin-top: 34px;
  margin-bottom: 60px;

  .poster {
    width: 340px;
    height: auto;
  }
}

button {
  @include primary-button(50px);
}

.btn-back {
  @extend %btn-back;
}
</style>