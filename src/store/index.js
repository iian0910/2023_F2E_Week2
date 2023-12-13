
import { defineStore } from 'pinia'
import { totalData, countyVote } from '../assets/js/voteData'

export const voteStore = defineStore('store', {
  state: () => ({
    totalVote: null,
    countyVote: null,
    county: ''
  }),
  getters: {
    // computed
    filterVote: (state) => state.countyVote.find(item => {
      return item.county === state.county
    })
  },
  actions: {
    getTotalVote() {
      this.totalVote = totalData
    },
    getCountyVote() {
      this.countyVote = countyVote
    }
  },
})