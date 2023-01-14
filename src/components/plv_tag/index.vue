<template>
  <div class="plv_card__tags">
    <span class="plv_tag" :class="props.content">{{ props.content.capitalize('-') }}</span>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{ content: string }>()
</script>

<style scoped>
.plv_tag {
  background-color: #2c2c2c;
  border-radius: 999px;
  padding: 0.25em 0.75em 0.25em 0.95em;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.15em;
}

.plv_tag.default,
.plv_tag.unknown,
.plv_tag.shadow,
.plv_tag.normal {
  background-color: var(--pklmnd-color-ash-100);
  transition: background-color 0.2s, color 0.2s;
}

.plv_tag.fighting {
  background-color: #bb2d25;
  color: var(--pklmnd-color-ash-50);
}

.plv_tag.flying {
  background-color: #9a9fec;
}

.plv_tag.poison {
  background-color: #975fbd;
  color: var(--pklmnd-color-ash-50);
}

.plv_tag.ground {
  background-color: #cf9e55;
}

.plv_tag.rock {
  background-color: #af9937;
}

.plv_tag.bug {
  background-color: #9ccc50;
}

.plv_tag.ghost {
  background-color: #494d8b;
  color: var(--pklmnd-color-ash-50);
}

.plv_tag.steel {
  background-color: #7d98a3;
}

.plv_tag.fire {
  background-color: #eb8541;
}

.plv_tag.water {
  background-color: #5ca6e2;
}

.plv_tag.grass {
  background-color: #277e2e;
  color: var(--pklmnd-color-ash-50);
}

.plv_tag.electric {
  background-color: #6434bd;
  color: var(--pklmnd-color-ash-50);
}

.plv_tag.psychic {
  background-color: #eb58ad;
}

.plv_tag.ice {
  background-color: #8ff0f0;
}

.plv_tag.dragon {
  background-color: #e27b52;
}

.plv_tag.dark {
  background-color: #3d3b3a;
  color: var(--pklmnd-color-ash-50);
}

.plv_tag.fairy {
  background-color: #fc8dde;
}
</style>