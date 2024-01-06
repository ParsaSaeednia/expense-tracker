<script setup>
import ExpenseBalance from './components/ExpenseBalance.vue';
import ExpenseHeader from './components/ExpenseHeader.vue';
import ExpenseData from './components/ExpenseData.vue';
import ExpenseForm from './components/ExpenseForm.vue';

</script>

<template>
  <ExpenseHeader title="Expense Tracker" />
  <ExpenseBalance />
  <ExpenseData />
  <ExpenseForm />
</template>

