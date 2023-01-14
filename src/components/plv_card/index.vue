<template>
  <a :href="`/pokemon/${props.id}`">
    <div class="plv_card">
      <p class="plv_card__id">{{ props.id.digitize(3, '#') }}</p>
      <div class="plv_card__image">
        <img alt="pikachu" :src="props.img_src" />

      </div>
      <div>
        <p class="plv_card__name">{{ props?.name?.capitalize() }}</p>
        <div class="plv_card__tags">
          <PLVTag v-for="t in props.types" :content="t" />
        </div>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import PLVTag from '../plv_tag/index.vue'
import { defineProps } from 'vue';

const props = defineProps<
  {
    id: number;
    name: string;
    types: string[]
    img_src: string;
  }>()
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.plv_card {
  color: white;
  height: auto;
  background-color: #1a1a1a;
  border: thin solid #3a3a3a;
  transition: scale 0.24s;
  border-radius: 24px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: relative;
}

.plv_card__id {
  color: #303030;
  font-size: 3rem;
  font-weight: 700;
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
}

.plv_card__image {
  position: relative;
  width: 128px;
  height: 128px;
  background-color: #141417;
  display: flex;
  align-items: center;
  border-radius: 50%;
  justify-content: center;
  margin-top: 3rem;
}

.plv_card__image img {
  width: 90px;
  height: 90px;
}

.plv_card__name {
  font-size: 1.5rem;
  text-align: center;
  font-weight: 700;
  color: #dcdcdc;
  margin-bottom: 0.5em;
}

.plv_card__tags {
  display: flex;
  gap: 0.5em;
  justify-content: center;
}

p {
  margin: 0;
  padding: 0;
  line-height: 1em;
}

a {
  z-index: 0;
}

a:hover .plv_card {
  scale: 101.5%;
}

a:active .plv_card {
  scale: 99.5%;
}
</style>