<script setup>
import { provide, ref } from 'vue';
import TaiwanMap from './components/TaiwanMap.vue';
import Tips from './components/TipsBox.vue';
import VoteAnalysis from './components/VoteAnalysis.vue';

const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const totalVoteData = ref([
  {
    votePerson  : 19311105, // 選舉人數
    validVotes  : 14300940, // 有效票數
    invalidVotes: 163631,   // 無效票數
    party_PFP   : 608590,   // 候選人得票
    party_KMT   : 5522119,  // 候選人得票
    party_PPT   : 8170231   // 候選人得票
  }
])

// 蒐集各地區的投票數據
const countyVoteData = ref([
  {
    county      : 'tbs',
    validVotes  : 1632453,
    party_PPT   : 875854,
    party_KMT   : 685830,
    party_PFP   : 70769
  },
  {
    county      : 'xbs',
    validVotes  : 100,
    party_PPT   : 99,
    party_KMT   : 0,
    party_PFP   : 1
  }
])

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
  height: calc(var(--vh, 1vh) * 100 - 48px);
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}
</style>
