<template>
  <div>
    <div class="tips d-flex flex-column">
      <div class="mb-auto">
        <div class="mb-2 d-flex align-items-center">
          <img src="../assets/image/info.svg" class="icon me-2 d-block" alt=""><span class="H6">小提示</span>
        </div>
        <p class="p-0 T-RG">點擊選擇縣市、區、村里，可查看選舉結果</p>
      </div>
      <div class="tips_img">
        <img src="../assets/image/tip_select.svg" class="select_img d-block w-100" alt="">
      </div>
    </div>
    <div class="tips d-flex flex-column">
      <div class="mb-auto">
        <div class="mb-2 d-flex align-items-center">
          <img src="../assets/image/info.svg" class="icon me-2 d-block" alt=""><span class="H6">小提示</span>
        </div>
        <p class="p-0 T-RG">點擊地圖查看縣市的選舉結果</p>
      </div>
      <div class="tips_img">
        <img src="../assets/image/tip_area.svg" class="select_img d-block w-100" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';

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