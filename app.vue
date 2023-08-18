<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <Navigation />

  <main>
    <img src="@/assets/img/home-title.png" alt="" class="title">
    <img src="@/assets/img/home-example.png" alt="" class="example">
    <div class="info-container">
      <img src="@/assets/img/home-card-bg.png" class="info-bg">
      <p>選出你最愛的<br>臺灣近代熱門電影</p>
      <img src="@/assets/img/home-card-decoration.png">
      <p>以懷舊手繪風<br>打造你專屬的電影海報</p>
    </div>
    <div class="checkbox-container">
      <input type="checkbox" id="checkbox" />
      <label for="checkbox">我同意我的<span>個人資料</span>及<span>肖像權</span>使用於國家文化記憶庫AI生成、海報牆及成果展</label>
      <Icon name="material-symbols:fitbit-check-small" color="white" size="28" />
    </div>
    <div class="enter-container">
      <input type="text" placeholder="輸入活動碼" />
      <button>進入</button>
    </div>
    <span class="notice">請同意個人資料使用 / 輸入活動碼</span>
  </main>

  <Footer />
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';


main {
  background-image: url('@/assets/img/bg.jpg');
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 32px;
  padding-bottom: 80px;

  .title {
    margin-bottom: 32px;
  }

  .example {
    margin-bottom: 28px;
  }
}



// Checkboxes

// Variables
$checkbox-width: 18px;

.checkbox-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 340px;
}

input[type="checkbox"] {
  position: relative;
  width: $checkbox-width + 20px;
  height: $checkbox-width + 20px;
  z-index: 1;
  opacity: 0;

  &+label {
    display: inline-block;
    position: relative;
    cursor: pointer;
    color: $text-black;
    letter-spacing: 1px;
    margin-left: 10px;
    @include font(normal,16px,700);

    & span {
      text-decoration: underline;
    }

    &:before {
      display: block;
      position: absolute;
      content: "";
      top: 11px;
      left: -17px - $checkbox-width;
      width: $checkbox-width;
      height: $checkbox-width;
      border: 2px solid $primary-default;
      border-radius: 4px;
    }

    &+.icon {
      cursor: pointer;
      position: absolute;
      top: 8px;
      left: -1px;
    }
  }
}

input[type="checkbox"]:checked {
  &+label {
    &:before {
      background-color: $primary-default;
    }
  }
}

// enter
.enter-container{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  margin-top: 24px;
}

input[type="text"]{
  border: 2px solid $primary-default;
  border-radius: 4px;
  width: 200px;
  height: 90%;
  @include font(serif,20px,700);
  color: $text-gray;
  text-align: center;
  padding: 0;
  outline: none;
}


// button
button{
  @include primary-button(100%);
  margin-left: 4px;
}

//info
.info-container{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height:190px;
  margin-bottom: 24px;

  .info-bg{
    position: absolute;
    z-index: 0;
  }

  img{
    z-index: 1;
  }

  p{
    z-index: 1;
    @include font(serif,26px,700);
    line-height: 40px;
    color: $primary-dark;
    margin-right: 63px;
    
    &:last-child{
      margin-right: 0px;
      margin-left: 63px;
      color: $text-black;
      line-height: 30px;
      font-size: 20px;
    }
  }
}

.notice {
  margin-top: 12px;
  @include font(serif,16px,700);
  color: $text-danger;
}
</style>