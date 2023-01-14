<template>
  <button class="plv_button">{{ props.title }}</button>
</template>

<script setup lang="ts">

import { defineProps } from 'vue';

const props = defineProps<{ title: string }>()

</script>

<style scoped>
.plv_button {
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  outline: none;
  font-weight: 500;
  padding: 0.65em 0.875em;
  background-color: #0a95ff;
  font-family: inherit;
  transition: box-shadow 0.24s, background-color 0.24s;
  box-shadow: 0 0 0 0 transparent
}

.plv_button:hover {
  background-color: #17a1fd;
  box-shadow: 0 0 0 4px rgba(10, 149, 255, 0.25);
}
.plv_button:active {
  background-color: #1687e4;
  box-shadow: 0 0 0 6px rgba(10, 149, 255, 0.25);
}
</style>