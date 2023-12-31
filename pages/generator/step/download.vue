<script setup lang="ts">
import { usePostersStore } from '@/stores/posters'
import QRcode from 'qrcode'
import { ref, getDownloadURL, uploadString } from "firebase/storage"
import { saveAs } from 'file-saver'

// check permission
definePageMeta({
  layout: 'default',
  middleware: 'permission'
})

const postersStore = usePostersStore()

const { $storage } = useNuxtApp()

const qrcodeData = useState('qrcodeData', () => null)

const handleClickDownloadBtn = () => {
  saveAs(postersStore.resultImgBase64, "poster");
}

const uploadPoster = async () => {
  try {
    const timestamp = new Date().getTime();
    const randomId = Math.random().toString(36).substring(2, 8);
    const uniqueName = `${timestamp}-${randomId}`;

    const storageRef = ref($storage, `images/${uniqueName}`)

    const uploadTask = uploadString(storageRef, postersStore.resultImgBase64, 'data_url')

    uploadTask.then((snapshot) => {
      getDownloadURL(snapshot.ref).then(async (downloadURL) => {
        qrcodeData.value = await QRcode.toDataURL(downloadURL)
        postersStore.setResultImgName(uniqueName)
      })
    }).catch((error) => {
      console.error(error);
    })
  } catch (e) {
    console.error(e);
  }
}

onMounted(() => {
  if (postersStore.selectedMovie === null)
    navigateTo('/generator/step/select')

  uploadPoster()
})
</script>

<template>
  <main>
    <div class="title-container">
      <span>參</span>
      <span v-for="char in '完成'">
        {{ char }}
      </span>
    </div>
    <div class="content-container">
      <img class="result-img" :src="postersStore.resultImgBase64" alt="" />
      <div class="download-container">
        <img v-if="qrcodeData" :src="qrcodeData" class="qrcode" />
        <Icon v-if="!qrcodeData" name="eos-icons:loading" size="28" class="qrcode" />
        <div class="guide-container">
          <span>請掃描下載</span>
          <span>OR</span>
          <button @click="handleClickDownloadBtn">本地下載</button>
        </div>
      </div>
      <div class="info-container">
        <img class="info-bg" src="@/assets/img/info-bg.png" alt="" srcset="@/assets/img/info-bg.png 1x, @/assets/img/info-bg@2x.png 2x">
        <img class="info-bg-s" src="@/assets/img/info-bg-s.png" alt="" srcset="@/assets/img/info-bg-s.png 1x, @/assets/img/info-bg-s@2x.png 2x">
        <span class="text-title">贈禮小活動</span>
        <span>將你的專屬手繪風格海報上傳<span class="text-underline">Facebook 公開</span>、<span class="text-underline">Tag
            國家文化記憶庫</span>即有機會獲得<span class="text-warning">小禮物</span>唷！</span>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.title-container {
  @extend %title-container;
}

.content-container {
  display: grid;
  grid-template-columns: repeat(2, max-content);
  margin-top: 38px;
  margin-bottom: 160px;

  .result-img {
    max-width: 340px;
    width: 90vw;
    min-width: 320px;
    grid-row: 1/3;
    margin-right: 100px;
  }

  @media screen and (max-width: 1000px) {
    & {
      width: 100vw;
      grid-template-columns: auto;
      align-items: center;
      justify-content: center;
      justify-items: center;
    }

    .result-img {
      margin-right: 0px;
      margin-bottom: 40px;
    }
  }
}

.download-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

  .qrcode {
    width: 200px;
  }

  @media screen and (max-width: 1000px) {
    & {
      align-items: center;
    }

    .qrcode {
      width: 150px;
    }
  }
}

.guide-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 26px;

  span {
    display: block;
    text-align: center;
    color: $black;
    @include font(serif, 20px, 700);
  }

  span:first-child {
    color: $black;
    @include font(serif, 28px, 700);
    margin-bottom: 9px;
  }
}

.info-container {
  position: relative;
  width: 500px;
  padding: 38px 48px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    position: absolute;
    z-index: 0;
    width: 500px;
    top: 0;
    left: 0;
  }

  .info-bg-s {
    display: none;
  }

  span {
    position: relative;
    z-index: 1;
    display: block;
    width: 100%;
    color: $black;
    @include font(serif, 20px, 700);
  }

  .text-title {
    color: $primary-default;
    @include font(serif, 24px, 700);
    margin-bottom: 12px;
  }

  .text-underline {
    display: inline;
    text-decoration: underline;
  }

  .text-warning {
    display: inline;
    color: $warning;
  }

  @media screen and (max-width: 1000px) {
    & {
      width: 360px;
      padding: 38px 48px;
      justify-content: center;
    }

    img {
      width: 100%;
    }

    .info-bg {
      display: none;
    }

    .info-bg-s {
      display: block;
    }
  }
}

button {
  @include primary-button(50px);
  margin-top: 15px;
}
</style>