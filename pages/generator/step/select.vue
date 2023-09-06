<script setup lang="ts">
import { useMoviesStore } from '@/stores/movies'

const moviesStore = useMoviesStore()
const selectedMovie = useState('selectedMovie', () => 0)
const movies = useState('movies', () => null)

// // check permission
// definePageMeta({
//   middleware: 'permission'
// })

onMounted(() => {
  movies.value = moviesStore.movies
  selectedMovie.value = 0
})

const handleClickNextBtn = () =>{
    navigateTo('/generator/step/camera')
}
</script>

<template>
  <main>
    <div class="title-container">
      <span>壹</span>
      <span v-for="char in '選擇熱門近代電影'">
        {{ char }}
      </span>
    </div>
    <div class="guide">提供 20 張臺灣近代電影海報，選擇你喜歡的電影元素</div>
    <ul>
      <li v-for="item,idx in movies" :key="item.name">
        <input
          type="radio"
          :id="item.name"
          name="selector"
          v-model="selectedMovie"
          :value="idx">
        <label :for="item.name" name="selector">
          <div v-if="idx === selectedMovie" class="selected-bg"></div>
          <!-- <img :src="`/assets/img/movies/movie${idx}.jpg`" alt="" :srcset="`/assets/img/movies/movie${idx}.jpg 1x, /assets/img/movies/movie${idx}@2x.jpg 2x`"> -->
          <img :src="`/img/movies/movie${idx}.jpg`" alt="" :srcset="`/img/movies/movie${idx}.jpg 1x, /img/movies/movie${idx}@2x.jpg 2x`">
          <span>{{ item.name }}</span>
          <span>{{ item.year }}</span>
        </label>
      </li>
    </ul>
    <div class="selected">{{ movies ? movies[selectedMovie].name : "" }}</div>
    <button @click="handleClickNextBtn">下一步</button>
  </main>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.title-container{
  @extend %title-container
}

.guide{
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
}

li {
  position: relative;
  list-style-type: none;
  width: 170px;

  label{
    width: 100%;
    cursor: pointer;
    position: relative;

    img {
       position: relative;
       width: 100%;
       display: block;
       margin-bottom: 10px;
    }

    span {
      position: relative;
      display: block;
      text-align: center;
      color: $primary-default;
      @include font(serif,18px,700);
    }

    .selected-bg {
      width: 170px;
      height: 300px;
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
  color: $text-black;
  @include font(normal,18px,700);
  margin-bottom: 16px;
}

button{
  @include primary-button(50px);
}
</style>