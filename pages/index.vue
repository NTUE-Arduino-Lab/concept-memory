<script setup lang="ts">
import { usePermissionStore } from '@/stores/permission'

const isChecked = useState('isChecked', () => false)
const inputCode = useState('inputCode', () => "")
let warning = useState('warning', () => null)

const permissionStore = usePermissionStore()

const handleClickEnterBtn = () =>{
  const isEnterCode = inputCode.value == permissionStore.enterCode;
  if(inputCode.value == ""){
    warning.value = "請輸入活動碼"
  }
  else if(!isChecked.value){
    warning.value = "請同意個人資料使用"
  }
  else if(!isEnterCode){
    warning.value = "活動碼錯誤"
  }
  else if(isChecked.value && isEnterCode){
    warning.value = ""
    permissionStore.changePermission()
    navigateTo('/generator/step/select')
  }
}

onMounted(() => {
  warning.value = null
  inputCode.value = ""
  isChecked.value = false
})
</script>

<template>
  <main>
    <img src="@/assets/img/home/home-title.png" alt="" class="title">
    <div class="example-container">
      <img src="@/assets/img/home/example-img-1.png" alt="" class="example">
      <img src="@/assets/img/home/plus.png" alt="" class="example">
      <img src="@/assets/img/home/example-img-2.png" alt="" class="example">
      <img src="@/assets/img/home/equal.png" alt="" class="example">
      <img src="@/assets/img/home/example-img-3.png" alt="" class="example">
    </div>
    <div class="info-container">
      <img src="@/assets/img/home/home-card-bg.png" class="info-bg">
      <p>選出你最愛的<br>臺灣近代熱門電影</p>
      <img src="@/assets/img/home/home-card-decoration.png">
      <p>以懷舊手繪風<br>打造你專屬的電影海報</p>
    </div>
    <div class="checkbox-container">
      <input type="checkbox" id="checkbox" v-model="isChecked">
      <label for="checkbox">我同意我的<span>個人資料</span>及<span>肖像權</span>使用於國家文化記憶庫AI生成、海報牆及成果展</label>
      <Icon v-if="isChecked" name="material-symbols:fitbit-check-small" color="white" size="28" />
    </div>
    <div class="enter-container">
      <input type="text" placeholder="輸入活動碼" v-model="inputCode" />
      <button @click="handleClickEnterBtn">進入</button>
    </div>
    <span class="warning">{{warning}}</span>
  </main>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.title {
    margin-bottom: 32px;
    width: 600px;
  }

  .example-container {
    margin-bottom: 28px;
    display: grid;
    grid-template-columns: repeat(5,max-content);
    align-items: center;
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

.warning {
  margin-top: 12px;
  @include font(serif,16px,700);
  color: $text-danger;
}
</style>