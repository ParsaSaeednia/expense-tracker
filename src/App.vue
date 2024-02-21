<script setup>
import ExpenseBalance from './components/ExpenseBalance.vue';
import ExpenseHeader from './components/ExpenseHeader.vue';
import ExpenseData from './components/ExpenseData.vue';
import ExpenseForm from './components/ExpenseForm.vue';
import { onMounted, ref } from 'vue';
import axios from 'axios'

async function getUsers() {
  const users = await axios.get('https://reqres.in/api/users')
  const usersData = users.data.data;
  console.log(usersData);
  usersRef.value = usersData
}
onMounted(() => getUsers())

const usersRef = ref(null)
</script>

<template>
  <ExpenseHeader title="Expense Tracker" />
  <div v-for="item in usersRef" :key="item.id">
    {{ item.email }} |
    {{ item.first_name }}
  </div>
  <ExpenseBalance />
  <ExpenseData />
  <ExpenseForm />
</template>

