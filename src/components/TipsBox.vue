<script setup>
import { ref, watch } from "vue"
import CandidateList from './CandidateList.vue'

const props = defineProps(['selected', 'countyVoteData'])

const countyVote = ref([])

watch(props.countyVoteData, (vote) => {
  countyVote.value = vote[0]
}, {immediate: true})
</script>

<template>
  <div>
    <template v-if="props.selected">
      <div class="result d-flex flex-column">
        <div class="mb-auto">
          <div class="mb-2 d-flex align-items-center H6">臺北市</div>
          <CandidateList :voteData="countyVote"/>
        </div>
      </div>
    </template>
    <template v-else>
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
    </template>
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

.result {
  width: 260px;
  padding: 12px 16px;
  background-color: #EDF7F0;
  border-radius: 8px;
  border: 2px solid #84CB98;
  &:nth-child(1) {
    margin-bottom: 20px;
  }
}
</style>