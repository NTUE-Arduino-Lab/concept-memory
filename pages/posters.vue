<script setup lang="ts">
import { ref, listAll, getDownloadURL } from "firebase/storage";

const { $storage } = useNuxtApp()

const posters = useState('posters', () => [])

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
        posters.value = items
      }).catch((e) => {
        console.error(e);
      })

  } catch (e) {
    console.error(e);
  }
}

onMounted(() => {
  getPosters()
})
</script>

<template>
  <main>
    <div class="title-container">
      <span></span>
      <span v-for="char in '海報牆'">
        {{ char }}
      </span>
    </div>
    <div v-if="posters.length > 0" class="posters-container">
      <div class="posters-list">
        <img v-for="item, idx in posters" :src="item.url" :key="item.name">
      </div>
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

.posters-container {
  position: relative;
  width: 100%;
  height: min-content;
  max-height: 600px;
  padding: 24px 28px;
  margin-top: 36px;
  margin-bottom: 60px;
  background-color: white;

  .posters-list {
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 162px);
    grid-column-gap: 28px;
    grid-row-gap: 20px;
    justify-content: center;
    overflow: scroll;
    overflow-x: hidden;

    img {
      width: 162px;
      height: 215px;
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

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 60px;
    bottom: 0;
    left: 0;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgb(255, 255, 255));
  }
}
</style>