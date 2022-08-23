<script setup lang="ts">
import {
  departments,
  selectedDepartment,
  selectedDepartmentModel,
} from '../lib/departments'

import PrintSheet from '../components/PrintSheet.vue'

const contatinerClass = import.meta.env.DEV
  ? 'py-5 container'
  : 'container-fluid'
</script>

<template>
  <article :class="contatinerClass">
    <div class="input-group input-group-lg mb-3">
      <select
        v-model="selectedDepartmentModel"
        class="form-select"
        aria-label="Example select with button addon"
      >
        <option :value="null">Select a department...</option>
        <option
          v-for="{ fields, id } in departments.data"
          :key="id"
          :value="id"
        >
          {{ fields.Name }}
        </option>
      </select>

      <router-link
        :to="`/${selectedDepartment?.id}`"
        target="_blank"
        class="btn btn-dark"
        :class="{ disabled: !selectedDepartment }"
      >
        Print
      </router-link>
    </div>

    <div
      v-if="selectedDepartment"
      class="card card-body bg-light my-3 py-3 d-print-none mx-5"
    >
      <PrintSheet />
    </div>

    <div class="d-grid gap-2 col-6 mx-auto">
      <router-link
        v-if="selectedDepartment"
        :to="`/${selectedDepartment?.id}`"
        target="_blank"
        class="btn btn-dark"
      >
        Print
      </router-link>
    </div>
  </article>
</template>
