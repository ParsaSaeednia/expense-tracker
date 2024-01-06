<script setup>
import { useExpenseStore } from '@/stores/expense'
import { computed } from 'vue';
const store = useExpenseStore()

const balance = computed(() => {
    return store.items.reduce((acc, item) => {
        return acc + item.amount
    }, 0).toFixed(2)
})

const income = computed(() => {
    return store.items.filter((item) => item.amount > 0)
        .reduce((acc, item) => {
            return acc + item.amount
        }, 0).toFixed(2)
})

const expense = computed(() => {
    return store.items.filter((item) => item.amount < 0)
        .reduce((acc, item) => {
            return acc + item.amount
        }, 0).toFixed(2)
})


</script>


<template>
    <main class="p-5 border border-black">

        <div>
            <h3 class="text-2xl text-center">Your Balance : ${{ balance }}</h3>
        </div>
        <section class="flex justify-between items-center">
            <div class="p-3">
                <h5>Income: <span class="text-green-600 font-bold">${{ income }}</span></h5>
            </div>
            <div class="p-3">
                <h5>Expense: <span class="text-red-600 font-bold">${{ expense }}</span></h5>
            </div>
        </section>
    </main>
</template>