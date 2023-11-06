<script setup lang="ts">
import { usePostersStore } from '@/stores/posters'

definePageMeta({
  layout: 'default',
})

const postersStore = usePostersStore()
const selectedMovie = useState('selectedMovie', () => 0)
const movies = useState('movies', () => null)
const screenWidth = useState('screenWidth', () => 1280)

// check permission
definePageMeta({
  middleware: 'permission'
})

onMounted(() => {
  screenWidth.value = window.innerWidth
  movies.value = postersStore.movies
  selectedMovie.value = 0
})

const handleClickNextBtn = () => {
  postersStore.setSelectedMovie(selectedMovie.value)
  navigateTo('/generator/step/camera')
}
</script>

<template>
  <main>
    <div class="title-container">
      <span>壹</span>
      <span v-for="char in '選擇電影海報風格'">
        {{ char }}
      </span>
    </div>
    <div class="guide">提供臺灣近代電影海報，選擇你喜歡的電影元素</div>
      <select v-if="screenWidth <= 760" v-model="selectedMovie">
        <option v-for="item, idx in movies" :key="item.name" :value="idx">{{ `${item.name}(${item.year})` }}</option>
      </select>
      <img v-if="screenWidth <= 760" v-for="item, idx in movies" :class="`poster ${selectedMovie == idx ? 'poster-show' : ''}`"
        :src="`/img/movies/movie${item.id}.jpg`" alt=""
        :srcset="`/img/movies/movie${item.id}.jpg 1x, /img/movies/movie${item.id}@2x.jpg 2x`">
      <ul v-if="screenWidth > 760">
      <li v-for="item, idx in movies" :key="item.name">
        <input type="radio" :id="item.name" name="selector" v-model="selectedMovie" :value="idx">
        <label :for="item.name" name="selector">
          <div v-if="idx === selectedMovie || selectedMovie === -1" class="selected-bg"></div>
          <!-- <img :src="`/assets/img/movies/movie${idx}.jpg`" alt="" :srcset="`/assets/img/movies/movie${idx}.jpg 1x, /assets/img/movies/movie${idx}@2x.jpg 2x`"> -->
          <img :src="`/img/movies/movie${item.id}.jpg`" alt=""
            :srcset="`/img/movies/movie${item.id}.jpg 1x, /img/movies/movie${item.id}@2x.jpg 2x`">
          <span>{{ item.name }}</span>
          <span>{{ item.year }}</span>
        </label>
      </li>
    </ul>
    <div v-if="screenWidth > 760" class="selected">{{ movies ? movies[selectedMovie].name : "" }}</div>
    <button @click="handleClickNextBtn">下一步</button>
  </main>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.title-container {
  @extend %title-container;

  @media screen and (max-width: 540px) {

    & span:nth-child(4),
    & span:nth-child(5) {
      display: none;
    }
  }
}

.guide {
  @extend %guide
}

ul {
  display: grid;
  grid-template-columns: repeat(auto-fill, 170px);
  grid-gap: 24px;
  justify-content: center;
  width: 100%;
  padding: 0;
  margin-bottom: 40px;

  @media screen and (max-width: 760px) {
    & {
      display: none;
    }
  }
}

li {
  position: relative;
  list-style-type: none;
  width: 170px;

  label {
    width: 100%;
    cursor: pointer;
    position: relative;

    img {
      position: relative;
      width: 100%;
      height: 245px;
      display: block;
      margin-bottom: 10px;
    }

    span {
      position: relative;
      display: block;
      text-align: center;
      color: $primary-default;
      @include font(serif, 18px, 700);
    }

    .selected-bg {
      width: 170px;
      height: 100%;
      padding: 10px;
      top: -10px;
      left: -10px;
      border-radius: 8px;
      box-shadow: 0 0 12px rgba(0, 0, 0, 0.50);
      position: absolute;
      background-color: white;
    }
  }

  input[type="radio"] {
    opacity: 0;
    position: absolute;
  }
}

.selected {
  color: $black;
  @include font(normal, 18px, 700);
  margin-bottom: 16px;
}

button {
  @include primary-button(50px);
}

.poster {
  display: none;
}

select {
  display: none;
}

@media screen and (max-width: 760px) {
  select {
    display: block;
    height: 40px;
    border: 2px $primary-default solid;
    border-radius: 4px;
    width: min-content;
    @include font(normal, 16px, 700);
    color: $gray-500;
    padding-left: 10px;
    padding-right: 20px;
    margin-bottom: 40px;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: transparent;
    background-image: url("@/assets/img/select-btn.png");
    background-repeat: no-repeat;
    background-position-x: 95%;
    background-position-y: 14px;
    background-size: 12px;
  }

  .poster {
    width: 280px;
    margin-bottom: 40px;
    display: none;
  }

  .poster-show {
    display: block;
  }
}
</style>