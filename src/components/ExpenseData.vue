<script setup>
import { useExpenseStore } from '@/stores/expense'
const store = useExpenseStore()

const deleteData = (id) => {
    return store.items = store.items.filter((item) => {
        return item.id !== id;
    })
}

</script>
<template>
    <div>
        <header class="border border-black border-b-2 border-t-0 border-x-0 py-3 text-center">History</header>
        <ul class="relative border border-b-2 border-purple-300 p-2 my-2" v-for="item in store.items" :key="item.id">
            <li class="relative w-56 font-semibold">
                {{ item.title }} |
                <span class="font-semibold" :class="item.amount > 0 ? 'text-green-800' : 'text-red-700'">${{ item.amount
                }}
                </span>
                <span @click="deleteData(item.id)"
                    class="absolute right-0 text-red-700 font-extrabold cursor-pointer">X</span>
            </li>
        </ul>
    </div>
</template>