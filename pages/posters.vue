<script setup lang="ts">
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';

definePageMeta({
  layout: 'posters'
})

const { $storage } = useNuxtApp()

const posters = useState('posters', () => [])
const pageCount = useState('pageCount', () => 0)
const pageImgCount = useState('pageImgCount', () => 10)
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
        changePageCount()
      }).catch((e) => {
        console.error(e);
      })

  } catch (e) {
    console.error(e);
  }
}

const changePageCount = () => {
  let containerWidth
  if(window.innerWidth < 780)
    containerWidth = (window.innerWidth - 40)
  else
    containerWidth = (window.innerWidth - 120)
  const pictureHeight = (window.innerHeight * 0.5 - 114)
  const pictureWidth = pictureHeight / 4 * 3
  const columnCount = Math.floor((containerWidth + 20) / (pictureWidth + 20))
  pageImgCount.value = columnCount * 2
  pageCount.value = Math.ceil(posters.value.length / pageImgCount.value)
  console.log(containerWidth)
  console.log(pictureHeight)
  console.log(pictureWidth)
  console.log(columnCount)
  console.log(columnCount * 2)
  console.log(Math.ceil(posters.value.length / pageImgCount.value))
}

const handleClickImg = (imgUrl) => {
  modalImg.value = imgUrl
}

const handleClickModalClose = () => {
  modalImg.value = null
}

onMounted(() => {
  getPosters()

  window.addEventListener('resize', changePageCount)
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
      <Swiper :height="300" :pagination="{
        dynamicBullets: true,
      }" :navigation="true" :modules="[Pagination, Navigation]" :slides-per-view="1" :loop="true"
        :effect="'creative'" :creative-effect="{
          prev: {
            shadow: false,
            translate: ['-100%', 0, -1]
          },
          next: {
            translate: ['100%', 0, 0]
          }
        }">
        <SwiperSlide v-for="(page, pageIdx) in pageCount" :key="`page-${page}`">
          <div class="posters-list">
            <img v-for="item, idx in posters.slice(0 + pageImgCount * pageIdx, pageImgCount + pageImgCount * pageIdx)"
              :src="item.url" :key="item.name" v-on:click="handleClickImg(item.url)">
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <div v-if="modalImg" class="modal">
      <div class="modal-bg" v-on:click="handleClickModalClose"></div>
      <img class="modal-poster" :src="modalImg">
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import 'swiper/css';
@import 'swiper/css/pagination';
@import 'swiper/css/navigation';
@import '@/assets/scss/variables.scss';

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-wrapper {
  min-width: 100vh;
  width: 100vh;
}

::v-deep .swiper-pagination-bullet-active {
  background-color: $primary-dark !important;
}

::v-deep .swiper-button-prev {
  left: 0 !important;
  color: $primary-default !important;
}

::v-deep .swiper-button-next {
  right: 0 !important;
  color: $primary-default !important;
}

::v-deep .swiper-button-prev:after,
::v-deep .swiper-button-next:after {
  font-size: 30px;
}

.logo-container {
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
  height: calc(100vh - 26px);
  padding-top: 30px;
  overflow: none;
}

.title-container {
  @extend %title-container;

  & span:first-child {
    display: none;
  }
}

.posters-container {
  position: relative;
  width: calc(100vw - 120px);
  height: calc(100vh - 200px);
  padding: 24px 28px;
  margin-top: 12px;
  margin-bottom: 60px;
  background-color: white;

  .posters-list {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, calc((50vh - 114px) / 4 * 3));
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    justify-content: center;

    img {
      height: calc((100vh - 228px) * 0.5);
      cursor: pointer;
    }
  }

  &::before {
    content: "";
    z-index: 2;
    display: block;
    position: absolute;
    width: 100%;
    height: 60px;
    top: 0;
    left: 0;
    background: linear-gradient(to top, rgba(255, 255, 255, 0), rgb(255, 255, 255));
  }

  &::after {
    content: "";
    z-index: 2;
    display: block;
    position: absolute;
    width: 100%;
    height: 60px;
    bottom: 0;
    left: 0;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgb(255, 255, 255));
  }

  @media screen and (max-width: 780px) {
    & {
      width: calc(100vw - 40px);
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
    z-index: 10;
  }

  .modal-poster {
    max-height: 80vh;
    height: auto;
    z-index: 20;
    max-width: 80vw;
  }

}
</style>