<script setup>
import { provide, ref } from 'vue';
import TaiwanMap from './components/TaiwanMap.vue';
import Tips from './components/TipsBox.vue';
import VoteAnalysis from './components/VoteAnalysis.vue';
import { totalData, countyVote } from './assets/js/voteData'

const totalVoteData = ref(totalData)

// 蒐集各地區的投票數據
const countyVoteData = ref(countyVote)

const filterVoteData = ref({
  county      : '',
  validVotes  : 0,
  party_PPT   : 0,
  party_KMT   : 0,
  party_PFP   : 0
})

function getCity(e) {
  console.log(e)
  filterVoteData.value = countyVoteData.value.filter(item => {
    return item.county === e
  })
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
