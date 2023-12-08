<script setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { ref } from 'vue'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)
const totalVotes = ref(100)
const validVotes = ref(80)
const invalidVotes = ref(20)

const party_PPT = ref(90)
const party_KMT = ref(5)
const party_PFP = ref(5)

const vote_data = ref(
  {
    datasets: [
      {
        backgroundColor: [ '#262E49', '#D9D9D9' ],
        data: [validVotes.value, invalidVotes.value]
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
                {{ validVotes / totalVotes * 100 }}%<br>投票率
              </div>
            </div>
          </div>
        </div>
        <div class="vote_list mb-2">
          <span class="T-RG me-2">投票數</span>
          <span class="T-XS"> {{ totalVotes }}票</span>
        </div>
        <div class="vote_list mb-2">
          <span class="T-RG me-2">有效票數</span>
          <span class="T-XS"> {{ validVotes }}票</span>
        </div>
        <div class="vote_list">
          <span class="T-RG me-2">無效票數</span>
          <span class="T-XS"> {{ invalidVotes }}票</span>
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
        <div class="vote_list mb-2 d-flex align-items-center">
          <div class="circle T-XS PPT">3</div>
          <div class="party_combination">
            <div class="party_title T-RG">民主進步黨</div>
            <div class="party_person T-XS">蔡英文|賴清德</div>
          </div>
          <div class="deliver PPT"></div>
          <div class="party_vote_rate">
            <div class="T-RG">{{ party_PPT / totalVotes * 100 }}%</div>
            <div class="T-XS">{{ party_PPT }}張</div>
          </div>
        </div>
        <div class="vote_list mb-2 d-flex align-items-center">
          <div class="circle T-XS KMT">2</div>
          <div class="party_combination">
            <div class="party_title T-RG">中國國民黨</div>
            <div class="party_person T-XS">韓國瑜|張善政</div>
          </div>
          <div class="deliver KMT"></div>
          <div class="party_vote_rate">
            <div class="T-RG">{{ party_KMT / totalVotes * 100 }}%</div>
            <div class="T-XS">{{ party_KMT }}張</div>
          </div>
        </div>
        <div class="vote_list mb-2 d-flex align-items-center">
          <div class="circle T-XS PFP">1</div>
          <div class="party_combination">
            <div class="party_title T-RG">親民黨</div>
            <div class="party_person T-XS">宋楚瑜|俞湘</div>
          </div>
          <div class="deliver PFP"></div>
          <div class="party_vote_rate">
            <div class="T-RG">{{ party_PFP / totalVotes * 100 }}%</div>
            <div class="T-XS">{{ party_PFP }}張</div>
          </div>
        </div>
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
.circle {
  width: 24px;
  height: 24px;
  border-radius: 100px;
  padding: 8px;
  color: white;
  line-height: 8px;
  margin-right: 15px;
  &.PPT {
    background-color: #84CB98;
  }
  &.KMT {
    background-color: #8894D8;
  }
  &.PFP {
    background-color: #DFA175;
  }
}
.party_combination {
  min-width: 84px;
  margin-right: 18px;
}
.deliver {
  margin-right: 20px;
  width: 2px;
  height: 32px;
  &.PPT {
    background-color: #84CB98;
  }
  &.KMT{
    background-color: #8894D8;
  }
  &.PFP {
    background-color: #DFA175;
  }
}
</style>