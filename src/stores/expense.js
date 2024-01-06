import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useExpenseStore = defineStore('expense', () => {
  const items = ref([
    {
      id: 1,
      title: 'Buy Dildo',
      amount: -100
    },
    {
      id: 2,
      title: 'Sell Nude',
      amount: 23.3
    },
    {
      id: 3,
      title: 'Pay to onlyfans',
      amount: -20.75
    }
  ])

  return { items }
})
