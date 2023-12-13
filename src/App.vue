<script setup>
import { ref } from 'vue'
import TaiwanMap from './components/TaiwanMap.vue'
import Tips from './components/TipsBox.vue'
import VoteAnalysis from './components/VoteAnalysis.vue'
import { voteStore } from './store/index'

// 使用 Pinia 傳遞資料
const store = voteStore()
store.getTotalVote()
store.getCountyVote()
const totalVoteData = ref(store.totalVote)
const filterVoteData = ref(null)


function getCity(e) {
  store.county = e
  filterVoteData.value = store.filterVote
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
        <VoteAnalysis :voteData="totalVoteData"/>
        <TaiwanMap @getCity=getCity />
        <Tips :selected="filterVoteData" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './assets/scss/main.scss';
.bar {
  background-color: #262E49;
  color: white;
  font-size: 32px;
}
.tab_contain {
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}
</style>
