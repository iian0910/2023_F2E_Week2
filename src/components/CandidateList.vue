<script setup>
import { inject } from 'vue'
import { fix2, ThousandSign } from '../assets/js/common'

// inject 接收外層各縣市的總統票數資料
const countyVote  = inject('countyVoteData')

const validVotes  = countyVote.value[0].validVotes
const party_PPT   = countyVote.value[0].party_PPT
const party_KMT   = countyVote.value[0].party_KMT
const party_PFP   = countyVote.value[0].party_PFP

</script>

<template>
  <div v-if="countyVote">
    <div class="vote_list mb-2 d-flex align-items-center">
      <div class="circle T-XS PPT">3</div>
      <div class="party_combination">
        <div class="party_title T-RG">民主進步黨</div>
        <div class="party_person T-XS">蔡英文|賴清德</div>
      </div>
      <div class="deliver PPT"></div>
      <div class="party_vote_rate">
        <div class="T-RG">{{ fix2(party_PPT / validVotes * 100) }}%</div>
        <div class="T-XS">{{ ThousandSign(party_PPT) }}票</div>
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
        <div class="T-RG">{{ fix2(party_KMT / validVotes * 100) }}%</div>
        <div class="T-XS">{{ ThousandSign(party_KMT) }}票</div>
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
        <div class="T-RG">{{ fix2(party_PFP / validVotes * 100) }}%</div>
        <div class="T-XS">{{ ThousandSign(party_PFP) }}票</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';
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