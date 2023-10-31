<script setup lang="ts">
const route = useRoute()

const showMenu = useState('showMenu', () => false)

const handleMenuShow = () => {
  showMenu.value = !showMenu.value
}

const clearMenuShow = () => {
  showMenu.value = false
}
</script>

<template>
  <nav>
    <NuxtLink to="/" class="nav-link">
      <img src="@/assets/img/TCMB.png" alt="" srcset="@/assets/img/TCMB.png 1x, @/assets/img/TCMB@2x.png 2x">
      <h1>AI 記憶造浪者：<br>超時空電影海報繪師</h1>
    </NuxtLink>
    <div></div>
    <!-- <NuxtLink to="/posters" class="nav-link">
      海報牆
    </NuxtLink> -->
    <NuxtLink to="https://tcmb.culture.tw/zh-tw" class="nav-link" target="_blank">
      更多電影故事
    </NuxtLink>
    <a id="menuBtn" herf="" @click="handleMenuShow">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 12H31" stroke="#05648A" stroke-width="2" stroke-linecap="round" />
        <path d="M9 20H31" stroke="#05648A" stroke-width="2" stroke-linecap="round" />
        <path d="M9 28H31" stroke="#05648A" stroke-width="2" stroke-linecap="round" />
      </svg>
    </a>
  </nav>
  <div class="menu" v-if="showMenu">
    <a herf="" @click="handleMenuShow">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.225 28.7778L28 13.0028" stroke="#05648A" stroke-width="2" stroke-linecap="round" />
        <path d="M12 12.7783L27.775 28.5534" stroke="#05648A" stroke-width="2" stroke-linecap="round" />
      </svg>
    </a>
    <div class="logo">
      <img src="@/assets/img/TCMB.png" alt="" srcset="@/assets/img/TCMB.png 1x, @/assets/img/TCMB@2x.png 2x">
      <h1>AI 記憶造浪者：<br>超時空電影海報繪師</h1>
    </div>
    <div class="line"></div>
    <NuxtLink to="/" class="nav-link" @click="clearMenuShow">
      首頁
    </NuxtLink>
    <!-- <NuxtLink to="/posters" class="nav-link" @click="clearMenuShow">
      海報牆
    </NuxtLink> -->
    <NuxtLink to="https://tcmb.culture.tw/zh-tw" target="_blank" class="nav-link" @click="clearMenuShow">
      更多電影故事
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

nav {
  position: relative;
  height: 62px;
  padding: 0 30px;
  background-color: $bg-white;
  display: grid;
  grid-template-columns: max-content auto max-content max-content;
  overflow: hidden;
}

img {
  width: 215px;
}

h1 {
  display: inline-block;
  @include font(serif, 16px, 900);
  padding: 0;
  margin: 0;
}

.nav-link {
  @include font(serif, 18px, 900);
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;

  &:first-child {
    padding: 0;
  }

}

#menuBtn {
  display: none;
}


.menu {
  display: none;
  background-color: $bg-white;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 82px;

  svg {
    position: absolute;
    right: 15px;
    top: 42px;
  }

  .logo {
    display: flex;
    flex-direction: column;
    color: $primary-default;
    padding-left: 10px;
    padding-right: 10px;

    img {
      width: 216px;
      margin-bottom: 10px;
    }
  }

  .line {
    margin-top: 25px;
    margin-bottom: 25px;
    border: 1px solid $gray-400;
    width: 100%;
  }

  .nav-link {
    height: 62px;
  }
}

@media screen and (max-width: 760px) {
  nav {
    grid-template-columns: max-content auto max-content;
    align-items: center;

    .nav-link:nth-child(3){
        display: none;
      }
  }

  img {
    width: 115px;
  }

  #menuBtn {
    display: block;
  }

  .menu {
    display: block;
  }
}

@media screen and (max-width: 480px) {
  nav {
    padding: 0 10px;
  }
}
</style>