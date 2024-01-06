<script setup>


const props = defineProps({
    title: String,
})


</script>


<template>
    <header class="py-10">
        <h1 class="text-3xl">{{ props.title }}</h1>
    </header>
</template>