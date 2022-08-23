<script setup lang="ts">
import { onBeforeMount, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import PrintSheet from '../components/PrintSheet.vue'
import { selectedDepartmentModel } from '../lib/departments'

const route = useRoute()

onBeforeMount(() => {
  const { id } = route.params
  console.log(id)
  selectedDepartmentModel.value = `${id}`
})

onMounted(() => {
  window.print()
})
</script>

<template>
  <article class="container-fluid">
    <PrintSheet />
  </article>
</template>
