<script setup lang="ts">
import { usePostersStore } from '@/stores/posters'
import imgFrameBase64 from '@/assets/imgFrameBase64'
// // check permission
// definePageMeta({
//   middleware: 'permission'
// })

const postersStore = usePostersStore()
const canvas = ref<HTMLCanvasElement | null>(null)
const imgtest = useState('imgtest', () => '')

const handleClickBackBtn = () => {
  navigateTo('/generator/step/camera')
}
const handleClickNextBtn = () => {
  navigateTo('/generator/step/download')
}

onMounted(async () => {
  if (postersStore) {
    await drawCanvas()
    const mergedBase64 = canvas.value.toDataURL()
    postersStore.setResultImgBase64(mergedBase64)
  }
})

const drawCanvas = async () => {
  const context = canvas.value.getContext('2d')
  canvas.value.width = 768;
  canvas.value.height = 1024;

  const img = new Image();
  img.src = `data:image/jpeg;base64, ${postersStore.resultImgBase64}`

  const img2 = new Image();
  img2.src = `data:image/jpeg;base64, ${imgFrameBase64}`
  await Promise.all([
    new Promise((resolve) => {
      img.onload = () => {
        context.drawImage(img, 0, 0, 768, 1024)
        resolve();
      }
    }),
    new Promise((resolve) => {
      img2.onload = () => {
        context.drawImage(img2, 0, 0, 768, 1024)
        resolve();
      }
    })
  ]);
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
      <canvas ref="canvas" class="poster"></canvas>
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