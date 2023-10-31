<script setup lang="ts">
import { ref, listAll, getDownloadURL } from "firebase/storage";

definePageMeta({
  layout: 'posters'
})

const { $storage } = useNuxtApp()

const posters = useState('posters', () => [])
const modalImg = useState('modalImg', () => null)

const getPosters = async () => {
  try {
    const listRef = ref($storage, 'images/');

    listAll(listRef)
      .then((res) => {
        const promises = res.items.map(async (itemRef) => {
          const url = await getDownloadURL(itemRef);
          return { name: itemRef.name, url };
        });
        return Promise.all(promises);
      })
      .then((items) => {
        items.reverse()
        posters.value = items
      }).catch((e) => {
        console.error(e);
      })

  } catch (e) {
    console.error(e);
  }
}

const handleClickImg = (imgUrl) => {
  modalImg.value = imgUrl
}

const handleClickModalClose = () => {
  modalImg.value = null
}

onMounted(() => {
  getPosters()
})
</script>

<template>
  <main>
    <div class="logo-container">
      <img src="@/assets/img/TCMB.png" alt="" srcset="@/assets/img/TCMB.png 1x, @/assets/img/TCMB@2x.png 2x">
      <h1>AI 記憶造浪者：<br>超時空電影海報繪師</h1>
    </div>
    <div class="title-container">
      <span></span>
      <span v-for="char in '海報牆'">
        {{ char }}
      </span>
    </div>
    <div v-if="posters.length > 0" class="posters-container">
      <div class="posters-list">
        <img v-for="item, idx in posters" :src="item.url" :key="item.name" v-on:click="handleClickImg(item.url)">
      </div>
    </div>

    <div v-if="modalImg" class="modal">
      <div class="modal-bg" v-on:click="handleClickModalClose"></div>
      <img class="modal-poster" :src="modalImg">
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.logo-container{
  position: absolute;
  left: 20px;
  display: flex;
  align-items: center;
  
  img {
    width: 215px;
  }

  h1 {
    display: inline-block;
    @include font(serif, 16px, 900);
    padding: 0;
    margin: 0;
    color: #05648A;
  }
}

main {
  padding-bottom: 0px;
  min-height: 800px;
  padding-top: 30px;
}

.title-container {
  @extend %title-container;

  & span:first-child {
    display: none;
  }
}

.posters-container {
  position: relative;
  width: 100%;
  height: 600px;
  max-height: 600px;
  padding: 24px 28px;
  margin-top: 36px;
  margin-bottom: 60px;
  background-color: white;
  overflow: scroll;

  .posters-list {
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 240px);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    justify-content: center;

    img {
      width: 100%;
      cursor: pointer;
    }
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 60px;
    top: 0;
    left: 0;
    background: linear-gradient(to top, rgba(255, 255, 255, 0), rgb(255, 255, 255));
  }

  // &::after {
  //   content: "";
  //   display: block;
  //   position: absolute;
  //   width: 100%;
  //   height: 60px;
  //   bottom: 0;
  //   left: 0;
  //   background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgb(255, 255, 255));
  // }

  @media screen and (max-width: 780px) {
    & {
      padding-left: 0;
      padding-right: 0;
    }
  }
}

.modal {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: min-content;

  .modal-bg {
    position: absolute;
    background-color: rgba(0, 0, 0, .5);
    width: 100vw;
    height: 1200px;
    z-index: 1;
  }

  .modal-poster {
    max-height: 80vh;
    height: auto;
    z-index: 2;
    max-width: 80vw;
  }

}
</style>