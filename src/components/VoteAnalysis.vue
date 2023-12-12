<script setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { ref, watch } from 'vue'
import { Doughnut } from 'vue-chartjs'
import CandidateList from './CandidateList.vue'
import { fix2, ThousandSign } from '../assets/js/common'

ChartJS.register(ArcElement, Tooltip, Legend)

const totalVote = ref([])

const props = defineProps(['voteData'])
watch(
  () => props.voteData,
  (val) => {
    totalVote.value = val[0]
  },
  { immediate: true }
)

const votePerson    = ref(totalVote.value.votePerson)             // 選舉人數
const validVotes    = ref(totalVote.value.validVotes)             // 有效投票人數
const invalidVotes  = ref(totalVote.value.invalidVotes)           // 無效投票人數
const totalVotes    = ref(validVotes.value + invalidVotes.value)  // 總投票人數(有效 + 無效)
const notVote       = ref(votePerson.value - totalVotes.value)    // 未投票人數(選舉人數 - 總投票人數)

const party_PPT = ref(totalVote.value.party_PPT)
const party_KMT = ref(totalVote.value.party_KMT)
const party_PFP = ref(totalVote.value.party_PFP)

// 畫圓餅圖
const vote_data = ref(
  {
    datasets: [
      {
        backgroundColor: [ '#262E49', '#D9D9D9' ],
        data: [(totalVotes.value / votePerson.value), (notVote.value / votePerson.value)]
      }
    ]
  }
)
const party_data = ref(
  {
    datasets: [
      {
        backgroundColor: [ '#84CB98', '#8894D8', '#DFA175' ],
        data: [party_PPT.value, party_KMT.value, party_PFP.value]
      }
    ]
  }
)
const options = ref(
  {
    responsive: true,
    maintainAspectRatio: false
  }
)
</script>

<template>
  <div>
    <div class="box">
      <div class="H6 title">投票概況</div>
      <div class="vote_rate">
        <div class="container chart">
          <div class="row">
            <div class="col-6 p-0 chart_img">
              <Doughnut class="doughnut_chart" :data="vote_data" :options="options" />
            </div>
            <div class="col-6 p-0 d-flex">
              <div class="mx-auto align-self-center text-center">
                {{ fix2(totalVotes / votePerson * 100) }}%<br>投票率
              </div>
            </div>
          </div>
        </div>
        <div class="vote_list mb-2">
          <span class="T-RG me-2">投票數</span>
          <span class="T-XS"> {{ ThousandSign(totalVotes) }}票</span>
        </div>
        <div class="vote_list mb-2">
          <span class="T-RG me-2">有效票數</span>
          <span class="T-XS"> {{ ThousandSign(validVotes) }}票</span>
        </div>
        <div class="vote_list">
          <span class="T-RG me-2">無效票數</span>
          <span class="T-XS"> {{ ThousandSign(invalidVotes) }}票</span>
        </div>
      </div>
      <div class="party_rate">
        <div class="container chart">
          <div class="row">
            <div class="col-6 p-0 chart_img">
              <Doughnut class="doughnut_chart" :data="party_data" :options="options" />
            </div>
          </div>
        </div>
        <CandidateList :getVote="totalVote"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';

.box {
  padding: 20px;
  background-color: #fff;
  width: 270px;
}
.title {
  margin-bottom: 20px;
}
.vote_rate {
  margin-bottom: 40px;
}
.chart {
  margin-bottom: 20px;
}
.chart_img {
  height: 120px;
}
</style>