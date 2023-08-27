<script setup lang="ts">
import Camera from "simple-vue-camera";
// // check permission
// definePageMeta({
//   middleware: 'permission'
// })

const isPhotoTaken = useState('isPhotoTaken', () => false)
const photo = useState('photo', () => "")
const camera = ref()

const handleClickBackBtn = () => {
  if(!isPhotoTaken.value)
    navigateTo('/generator/step/select')
  else
    isPhotoTaken.value = false
}

const handleClickCaptureBtn = async () => {
  const blob = await camera.value?.snapshot({ width: 600, height: 450 })
  photo.value = URL.createObjectURL(blob);
  isPhotoTaken.value = true
}

const handleClickNextBtn = () => {
  navigateTo('/generator/step/loading')
}

onMounted(() => {
  isPhotoTaken.value = false
  photo.value = ""
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
      <Camera ref="camera" v-if="!isPhotoTaken" :resolution="{ width: '100%', height: '100%' }" autoplay></Camera>
      <img :src="photo" v-if="isPhotoTaken" class="photo">
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

  .photo {
    width: 100%;
    height: 100%;
  }
}

button {
  @include primary-button(50px);
}

.btn-back {
  @extend %btn-back;
}
</style>