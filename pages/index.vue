<script setup lang="ts">
import { usePermissionStore } from '@/stores/permission'
import { doc, getDoc } from 'firebase/firestore'

const { $db } = useNuxtApp()
const isChecked = useState('isChecked', () => false)
const inputCode = useState('inputCode', () => "")
const enterCode = useState('enterCode', () => null)
let warning = useState('warning', () => null)

const permissionStore = usePermissionStore()

const handleClickEnterBtn = () => {
  if (!enterCode)
    console.log("cannot get entercode")

  const isEnterCode = inputCode.value == enterCode.value;

  if (inputCode.value == "") {
    warning.value = "請輸入活動碼"
  }
  else if (!isChecked.value) {
    warning.value = "請同意個人資料使用"
  }
  else if (!isEnterCode) {
    permissionStore.setPermission(false)
    warning.value = "活動碼錯誤"
  }
  else if (isChecked.value && isEnterCode) {
    warning.value = ""
    permissionStore.setPermission(true)
    navigateTo('/generator/step/select')
  }
}

const getEnterPassword = async () => {
  try {
    const docRef = doc($db, "password", "enter")
    const docSnap = await getDoc(docRef)
    const password = docSnap.data().password
    enterCode.value = password
  } catch (e) {
    console.error(e);
  }
}

onMounted(() => {
  warning.value = null
  inputCode.value = ""
  isChecked.value = false

  getEnterPassword()
})
</script>

<template>
  <main>
    <div class="example-container">
      <img src="@/assets/img/home/example-img-1.png" alt="" class="example"
        srcset="@/assets/img/home/example-img-1.png 1x, @/assets/img/home/example-img-1@2x.png 2x">
      <img src="@/assets/img/home/plus.png" alt="" class="example">
      <img src="@/assets/img/home/example-img-2.png" alt="" class="example"
        srcset="@/assets/img/home/example-img-2.png 1x, @/assets/img/home/example-img-2@2x.png 2x">
      <img src="@/assets/img/home/equal.png" alt="" class="example">
      <img src="@/assets/img/home/example-img-3.png" alt="" class="example"
        srcset="@/assets/img/home/example-img-3.png 1x, @/assets/img/home/example-img-3@2x.png 2x">
    </div>
    <div class="info-container">
      <p>選出你最愛的<br>臺灣近代熱門電影</p>
      <img src="@/assets/img/home/home-card-decoration.png">
      <p>以懷舊手繪風<br>打造你專屬的電影海報</p>
    </div>
    <div class="checkbox-container">
      <div class="custom-checkbox-container">
        <input type="checkbox" id="checkbox" v-model="isChecked">
        <div class="custom-checkbox"></div>
        <Icon v-if="isChecked" name="material-symbols:fitbit-check-small" color="white" size="28" />
      </div>
      <label for="checkbox">我同意我的<span>個人資料</span>及<span>肖像權</span>使用於國家文化記憶庫AI生成、海報牆及成果展</label>
    </div>
    <div class="enter-container">
      <input type="text" placeholder="輸入活動碼" v-model="inputCode" />
      <button @click="handleClickEnterBtn">進入</button>
    </div>
    <span class="warning">{{ warning }}</span>
  </main>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.example-container {
  margin-bottom: 28px;
  display: grid;
  grid-template-columns: repeat(5, max-content);
  align-items: center;
}



@media screen and (max-width: 960px) {
  .example-container {
    img:nth-child(2n-1) {
      width: 175px;
    }
  }
}



@media screen and (max-width: 760px) {
  .example-container {
    // margin-bottom: 28px;
    grid-template-columns: repeat(3, max-content);
    grid-template-rows: max-content 80px max-content;
    align-items: center;
    justify-content: center;

    img:nth-child(2n-1) {
      width: 130px;
    }

    img:nth-child(4) {
      transform: rotate(90deg);
      display: block;
      grid-column: 1/4;
      justify-self: center;
    }

    img:nth-child(5) {
      display: block;
      grid-column: 1/4;
      justify-self: center;
    }
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

.custom-checkbox-container {
  position: relative;

  input[type="checkbox"] {
    position: absolute;
    width: $checkbox-width + 10px;
    height: $checkbox-width + 10px;
    z-index: 1;
    opacity: 0;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }

  .icon {
    cursor: pointer;
    position: absolute;
    top: -2px;
    left: -3px;
  }

  .custom-checkbox {
    display: block;
    width: $checkbox-width;
    height: $checkbox-width;
    border: 2px solid $primary-default;
    border-radius: 4px;
  }
}

input[type="checkbox"]:checked {
  &+.custom-checkbox {
    background-color: $primary-default;
  }
}

.checkbox-container>label {
  display: inline-block;
  position: relative;
  cursor: pointer;
  color: $black;
  letter-spacing: 1px;
  margin-left: 10px;
  @include font(normal, 16px, 700);

  & span {
    text-decoration: underline;
  }
}

// enter
.enter-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  margin-top: 24px;
}

input[type="text"] {
  border: 2px solid $primary-default;
  border-radius: 4px;
  width: 200px;
  height: 90%;
  @include font(serif, 20px, 700);
  color: $gray-400;
  text-align: center;
  padding: 0;
  outline: none;
}

// button
button {
  @include primary-button(100%);
  margin-left: 4px;
}

@media screen and (max-width: 760px) {
  .checkbox-container {
    width: 320px;
  }

  .checkbox-container>label {
    @include font(normal, 14px, 700);
  }
}

//info
.info-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 156px;
  padding-left: 60px;
  padding-right: 60px;
  margin-bottom: 42px;
  background-color: $text-white;

  img {
    z-index: 1;
  }

  p {
    z-index: 1;
    @include font(serif, 24px, 700);
    line-height: 40px;
    color: $primary-dark;
    margin-right: 63px;

    &:last-child {
      margin-right: 0px;
      margin-left: 63px;
      color: $black;
      line-height: 30px;
      font-size: 20px;
    }
  }
}

@media screen and (max-width: 960px) {
  .info-container {
    padding-left: 30px;
    padding-right: 30px;

    p {
      margin-right: 30px;

      &:last-child {
        @include font(serif, 20px, 700);
        margin-left: 30px;
      }
    }
  }
}

@media screen and (max-width: 760px) {
  .info-container {
    flex-direction: column;
    align-items: start;
    justify-content: start;
    height: auto;
    padding-left: 40px;
    padding-right: 40px;

    p {
      margin-right: 0px;

      &:last-child {
        margin-left: 0px;
      }
    }
  }
}

.warning {
  margin-top: 12px;
  @include font(serif, 16px, 700);
  color: $warning;
}
</style>