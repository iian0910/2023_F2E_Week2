
import { defineStore } from 'pinia'
import { totalData, countyVote } from '../assets/js/voteData'

export const useStore = defineStore('store', {
  state: () => ({
    totalVote: null,
    countyVote: null
  }),
  getters: {},
  actions: {
    getTotalVote() {
      this.totalVote = totalData
    },
    getCountyVote() {
      this.countyVote = countyVote
    }
  },
})