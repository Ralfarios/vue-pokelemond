<template>
  <aside class="plv_sidebar">
    <span class="plv_sidebar__radius" />
    <div class="plv_sidebar__content">
      <ul class="plv_sidebar__content__links">
        <li>
          <section>
            <p class="plv_sidebar__content__heading">Type</p>
          </section>
          <ul>
            <li>
              <a href="/" class="plv_sidebar__content__link" :class="{ active: !currType }">
                All
              </a>
            </li>
            <li v-for="t in pokemonTypes">
              <a :href="`/?type=${t?.name || ''}`" class="plv_sidebar__content__link"
                :class="{ active: currType === t?.name }">
                {{ t.name?.capitalize() }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { PokemonService } from '../../services/modules/pokemon.index';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const { type: currType = null } = useRoute()?.query || {}

const pokemonTypes = ref<{ name: string, url: string }[]>([])

const getPokemonType = async () => {
  try {
    const { data = {} } = await PokemonService.getPokemonTypes()
    const { results = [] } = data

    if (!results) throw new Error('Pokemon Type is empty.');

    pokemonTypes.value = results.slice(0, results.length - 2)
  } catch (err) {
    console.log(err)
  }
}

onMounted(() => {
  getPokemonType()
})
</script>

<style scoped>
.plv_sidebar {
  flex-shrink: 0;
  height: calc(100vh - 112px);
  overscroll-behavior: contain;
  padding: 1rem 2rem 1.5rem 1.5rem;
  position: sticky;
  top: 72px;
  width: 156px;
  z-index: 2;
}

.plv_sidebar__radius {
  width: 60px;
  height: 60px;
  background-color: #1e2023;
  top: 0;
  right: -60px;
  position: absolute;
  display: block;
}

.plv_sidebar__radius::before {
  content: ' ';
  width: 100%;
  height: 100%;
  background-color: #141417;
  position: absolute;
  border-radius: 30px 0 0 0;
}

.plv_sidebar ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.plv_sidebar__content {
  max-height: 100%;
  overflow: auto;
}


.plv_sidebar__content__links {
  padding: 1.5rem 0;
}

.plv_sidebar__content__heading {
  box-sizing: border-box;
  font-weight: 700;
  margin: 0;
  padding: .5rem 0;
  width: 100%;
}

.plv_sidebar__content__link {
  box-sizing: border-box;
  display: inline-block;
  font-size: .95rem;
  font-weight: 400;
  margin-left: 0;
  opacity: .5;
  padding: .5rem 0.75rem;
  position: relative;
  transition: all .25s ease;
  transition: opacity 0.24s;
  width: 100%;
}

.plv_sidebar__content__link:hover {
  opacity: 0.75;
}

.plv_sidebar__content__link.active {
  font-weight: 600;
  opacity: 0.875;
}
</style>