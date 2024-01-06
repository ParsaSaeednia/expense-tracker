
<script setup>
import { useExpenseStore } from '@/stores/expense';
import { ref } from 'vue';
const store = useExpenseStore()

const formData = ref({
    title: "",
    amount: null
})


const addExpense = () => {
    if (formData.value.title && formData.value.amount) {
        store.items.push({
            id: Math.floor(Math.random() * 1000000),
            title: formData.value.title,
            amount: formData.value.amount
        })

        formData.value.title = ""
        formData.value.amount = ""
    }
    else alert("fill both inputs")
}

</script>

<template>
    <div class="my-5">
        <form class="flex flex-col">
            <label>Title: </label>
            <input v-model="formData.title" type="text" class="border border-black">
            <br>
            <br>
            <label>Amount: </label>

            <input v-model="formData.amount" type="number" class="border border-black">
            <input @click="addExpense" type="button" value="Add"
                class="border-blue-900 border-2 mt-2 bg-green-300 cursor-pointer">
        </form>
    </div>
</template>