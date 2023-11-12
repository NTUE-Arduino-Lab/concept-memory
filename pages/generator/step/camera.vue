<script setup lang="ts">
import { usePostersStore } from '@/stores/posters'

// check permission
definePageMeta({
  layout: 'default',
  middleware: 'permission'
})

const isPhotoTaken = useState('isPhotoTaken', () => false)
const postersStore = usePostersStore()

const videoRef = ref<HTMLVideoElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)
let mediaStream: MediaStream | null = null

const handleClickBackBtn = () => {
  if (!isPhotoTaken.value) {
    stopCamera()
    navigateTo('/generator/step/select')
  }
  else {
    stopCamera()
    startCamera()
  }
}

const handleClickCaptureBtn = async () => {
  await takeSnapshot()
}

const handleClickNextBtn = () => {
  navigateTo('/generator/step/generate')
}

const startCamera = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true })

    if (videoRef.value && stream) {
      videoRef.value.srcObject = stream
    }

    mediaStream = stream

  } catch (error) {
    console.error('Error accessing camera:', error)
  }
}

const takeSnapshot = async () => {
  try {
    if (videoRef.value && canvasRef.value) {
      const context = canvasRef.value.getContext('2d')
      if (context) {
        canvasRef.value.width = 640
        canvasRef.value.height = 480
        context.drawImage(videoRef.value, 0, 0, 640, 480)
        const imgBase64 = canvasRef.value.toDataURL()
        postersStore.setSelfieBase64(imgBase64.replace('data:image/png;base64,', ''))
      }
      isPhotoTaken.value = true
    }
  } catch (error) {
    console.error('Error accessing camera:', error)
  }
}

const clearCanvas = () => {
  if (canvasRef.value) {
    const context = canvasRef.value.getContext('2d')
    if (context) {
      context.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height)
    }
  }
}

const stopCamera = () => {
  try {
    if (mediaStream) {
      mediaStream.getTracks().forEach(track => track.stop())

      if (videoRef.value) {
        videoRef.value.srcObject = null
      }
      mediaStream = null;

      clearCanvas()

      isPhotoTaken.value = false
    }
  } catch (error) {
    console.error('Error stopping camera:', error);
  }
}

onMounted(() => {
  if (postersStore.selectedMovie === null)
    navigateTo('/generator/step/select')

  isPhotoTaken.value = false
  postersStore.setSelfieBase64(null)
  startCamera()
})
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
      <video v-if="!isPhotoTaken" ref="videoRef" playsinline autoplay></video>
      <div class="canvas-container">
        <canvas ref="canvasRef"></canvas>
      </div>
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
  width: 640px;
  height: 480px;
  margin-bottom: 36px;
  z-index: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  &>.canvas-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
  }

  // &>.canvas {
  //   width: 100%;
  //   height: 100%;
  // }

  &>video {
    width: 640px;
    height: 480px;
    object-fit: cover;
  }

  &~div {
    z-index: 1;
  }

  @media screen and (max-width: 680px) {
    & {
      width: 300px;
      height: 480px;
    }

    // &>canvas {
    //   width: 640px;
    // }

    &>.canvas-container {
          width: 640px;
    }
  }

}

button {
  @include primary-button(50px);
}

.btn-back {
  @extend %btn-back;
}
</style>