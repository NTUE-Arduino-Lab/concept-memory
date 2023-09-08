<script setup lang="ts">
import { usePostersStore } from '@/stores/posters'

// // check permission
// definePageMeta({
//   middleware: 'permission'
// })

const isPhotoTaken = useState('isPhotoTaken', () => false)
const postersStore = usePostersStore()

const video = ref<HTMLVideoElement | null>(null)
const canvas = ref<HTMLCanvasElement | null>(null)
let mediaStream: MediaStream | null = null

const handleClickBackBtn = () => {
  if (!isPhotoTaken.value)
    navigateTo('/generator/step/select')
  else{
    startCamera()
  }
}

const handleClickCaptureBtn = async () => {
  await takeSnapshot()
}

const handleClickNextBtn = () => {
  navigateTo('/generator/step/generate')
}

onMounted(() => {
  startCamera()
})

const startCamera = async () => {
  try {
    isPhotoTaken.value = false

    clearCanvas()

    const stream = await navigator.mediaDevices.getUserMedia({ video: true })

    if (video.value) {
      video.value.srcObject = stream
    }

    mediaStream = stream

  } catch (error) {
    console.error('Error accessing camera:', error)
  }
}

const takeSnapshot = async () => {
  try {
    if (video.value && canvas.value) {
      const context = canvas.value.getContext('2d')
      if (context) {
        canvas.value.width = video.value.videoWidth
        canvas.value.height = video.value.videoHeight
        context.drawImage(video.value, 0, 0, canvas.value.width, canvas.value.height)
        const imgBase64 = canvas.value.toDataURL()
        postersStore.setSelfieBase64(imgBase64.replace('data:image/png;base64,',''))
      }
      isPhotoTaken.value = true
    }
  } catch (error) {
    console.error('Error accessing camera:', error)
  }
}

const clearCanvas = () => {
  if (canvas.value) {
    const context = canvas.value.getContext('2d')
    if (context) {
      context.clearRect(0, 0, canvas.value.width, canvas.value.height)
    }
  }
}
</script>

<template>
  <main>
    <div class="title-container">
      <span>貳</span>
      <span v-for="char in '拍攝照片'">
        {{ char }}
      </span>
    </div>
    <div class="guide">建議以正面進行拍攝，可以讓生成的效果更好喔！</div>
    <div class="camera-container">
      <video v-if="!isPhotoTaken" ref="video" autoplay></video>
      <canvas ref="canvas" ></canvas>
    </div>
    <div v-if="!isPhotoTaken">
      <button class="btn-back" @click="handleClickBackBtn">返回</button>
      <button @click="handleClickCaptureBtn">拍攝</button>
    </div>
    <div v-if="isPhotoTaken">
      <button class="btn-back" @click="handleClickBackBtn">重新拍攝</button>
      <button @click="handleClickNextBtn">下一步</button>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.title-container {
  @extend %title-container
}

.guide {
  @extend %guide
}

.camera-container {
  width: 600px;
  height: 450px;
  margin-bottom: 36px;
  z-index: 0;

  video, canvas {
    width: 100%;
    height: 100%;
  }

  & ~ div{
    z-index: 1;
  }
}

button {
  @include primary-button(50px);
}

.btn-back {
  @extend %btn-back;
}
</style>