<script setup lang="ts">
</script>

<template>
  <main>
    <div class="title-container">
      <span></span>
      <span v-for="char in '海報牆'">
        {{ char }}
      </span>
    </div>
    <div class="posters-container">
      <div class="posters-list">
        <img src="@/assets/img/test.png" />
        <img src="@/assets/img/test.png" />
        <img src="@/assets/img/test.png" />
        <img src="@/assets/img/test.png" />
        <img src="@/assets/img/test.png" />
        <img src="@/assets/img/test.png" />
        <img src="@/assets/img/test.png" />
        <img src="@/assets/img/test.png" />
        <img src="@/assets/img/test.png" />
        <img src="@/assets/img/test.png" />
        <img src="@/assets/img/test.png" />
        <img src="@/assets/img/test.png" />
        <img src="@/assets/img/test.png" />
        <img src="@/assets/img/test.png" />
        <img src="@/assets/img/test.png" />
        <img src="@/assets/img/test.png" />
        <img src="@/assets/img/test.png" />
        <img src="@/assets/img/test.png" />
        <img src="@/assets/img/test.png" />
        <img src="@/assets/img/test.png" />
        <img src="@/assets/img/test.png" />
        <img src="@/assets/img/test.png" />
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
  height: 600px;
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