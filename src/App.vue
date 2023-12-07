<script setup>
import { ref } from 'vue'
import TaiwanMap from './components/TaiwanMap.vue'

let city = ref('')

function getCity(e) {
  city.value = e
}
</script>

<template>
  <!-- 版頭 -->
  <div class="bar">
    <div class="container">
      2020
    </div>
  </div>
  <!-- 分頁器 -->
  <div class="tab_contain">
    <div class="container">
      <div class="d-flex justify-content-between">
        <div>左邊</div>
        <TaiwanMap @getCity=getCity />
        <div>
          <div class="tips d-flex flex-column">
            <div class="mb-auto">
              <div class="mb-2 d-flex align-items-center">
                <img src="./assets/image/info.svg" class="icon me-2 d-block" alt=""><span>小提示</span>
              </div>
              <p class="p-0 tips_info">點擊選擇縣市、區、村里，可查看選舉結果</p>
            </div>
            <div class="tips_img">
              <img src="./assets/image/tip_select.svg" class="select_img d-block w-100" alt="">
            </div>
          </div>
          <div class="tips d-flex flex-column">
            <div class="mb-auto">
              <div class="mb-2 d-flex align-items-center">
                <img src="./assets/image/info.svg" class="icon me-2 d-block" alt=""><span>小提示</span>
              </div>
              <p class="p-0 tips_info">點擊地圖查看縣市的選舉結果</p>
            </div>
            <div class="tips_img">
              <img src="./assets/image/tip_area.svg" class="select_img d-block w-100" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bar {
  background-color: #262E49;
  color: white;
  font-size: 32px;
}
.tab_contain {
  padding-top: 40px;
  padding-bottom: 40px;
}
.tips {
  width: 260px;
  height: 249px;
  padding: 20px;
  background-color: #DEE0E4;
  border-radius: 8px;
  &:nth-child(1) {
    margin-bottom: 20px;
  }
}
.icon {
  width: 24px;
  height: 24px;
}
.tips_img{
  margin: 32px 32px 25px 32px;
}
</style>
