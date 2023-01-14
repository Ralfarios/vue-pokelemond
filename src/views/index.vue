<script setup lang="ts">
import PLVHeader from '../components/plv_header/index.vue';
import PLVSidebar from '../components/plv_sidebar/index.vue'
import PLVCard from '../components/plv_card/index.vue'
import PLVButton from '../components/plv_button/index.vue'
import { useRoute } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';
import { PokemonService } from '../services/modules/pokemon.index';

const headerRef = ref<HTMLDivElement>()
const contentRef = ref<HTMLDivElement>()
const titleRef = ref<HTMLHeadingElement>()
const pokemons = ref<any[]>([])
const isLoading = ref<boolean>(false)
const offset = ref<number>(0)

const { type: currType = null } = useRoute()?.query || {}

const shrinkAnim = () => {
  const currScrollPosition = document.body.scrollTop || document.documentElement.scrollTop;

  if (currScrollPosition < 0) return;

  if (currScrollPosition < 50) {
    titleRef.value!.style.fontSize = '2.5rem'
    headerRef.value!.style.height = '256px'
    return
  }

  titleRef.value!.style.fontSize = '1.75rem'
  headerRef.value!.style.height = '90px'
  return
}

const getAllPokemon = async (o: number = offset.value) => {
  offset.value = o
  try {
    isLoading.value = true;
    if (!currType) {
      const { data: resPokemons } = await PokemonService.getAllPokemons({ limit: 15, offset: o })

      const pokemonData = await Promise.all(resPokemons?.results.map(async (e: { name: string, url: string }) => {

        const { data: resPokemonDetail } = await PokemonService.getPokemonDetail(e.name)

        return {
          name: resPokemonDetail?.name,
          types: resPokemonDetail?.types?.map((e: { type: { name: string } }) => e?.type?.name),
          img_src: resPokemonDetail?.sprites?.other?.['official-artwork']?.front_default || resPokemonDetail?.sprites?.front_default,
          id: resPokemonDetail?.id
        }
      }
      ))

      const prev = pokemons.value

      pokemons.value = [...prev, ...pokemonData]
      return;
    }

    const { data: resPokemons } = await PokemonService.getPokemonsByType(currType as string);
    const pokemonData = await Promise.all(resPokemons?.pokemon?.map(async (e: { pokemon: { name: string } }) => {
      const { data: resPokemonDetail } = await PokemonService.getPokemonDetail(e.pokemon.name);

      return {
        name: resPokemonDetail?.name,
        types: resPokemonDetail?.types?.map((e: { type: { name: string } }) => e?.type?.name),
        img_src: resPokemonDetail?.sprites?.other?.['official-artwork']?.front_default || resPokemonDetail?.sprites?.front_default,
        id: resPokemonDetail?.id
      }
    }))

    pokemons.value = pokemonData
  } catch (err) {
    console.log(err)
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => {
  getAllPokemon();
  window.addEventListener('scroll', shrinkAnim);
})

onUnmounted(() => {
  window.removeEventListener('scroll', shrinkAnim)
})

</script>

<template>
  <PLVHeader />

  <main class="plv_main">
    <div class="plv_main__wrapper">

      <PLVSidebar />
      <section class="plv_main__content">

        <header class="plv_main__header">
          <div class="plv_main__header__inner" ref="headerRef">
            <span class="plv_main__header__radius" />
            <h1 ref="titleRef">{{ currType? `${(currType as string)?.capitalize()} Type`: 'All Types'}}</h1>
          </div>
        </header>
        <div ref="contentRef" style="padding-top: 256px;">
          <div style=" display:grid; gap:2rem;grid-template-columns: repeat(3, minmax(0, 1fr)); padding: 2rem;">
            <PLVCard v-for="pokemon in pokemons" :id="pokemon.id" :name="pokemon.name" :types="pokemon.types"
              :img_src="pokemon.img_src" />
          </div>
        </div>
        <div style="display: flex; align-items: center; justify-content: center; padding: 0 2rem 2rem" v-if="!currType">
          <PLVButton v-if="pokemons?.length > 0" title="Load More" @click="getAllPokemon(offset + 15)" />
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
.plv_main {
  margin-inline: auto;
  max-width: 90rem;
  width: 100%;
}

.plv_main__header {
  position: sticky;
  top: 72px;
  width: inherit;
  z-index: 1;
}

.plv_main__header__radius {
  width: 60px;
  height: 60px;
  background-color: #1e2023;
  bottom: -60px;
  right: 0px;
  position: absolute;
  display: block;
}

.plv_main__header__radius::before {
  content: ' ';
  width: 100%;
  height: 100%;
  background-color: #141417;
  position: absolute;
  border-radius: 30px 30px 0 0;
}

.plv_main__header__inner {
  background-color: #141417;
  transition: height 0.24s;
  width: 100%;
  border-radius: 0 30px 0 30px;
  top: 0;
  position: absolute;
  display: flex;
  align-items: center;
  height: 256px;
  justify-content: center;
}

.plv_main__header__inner h1 {
  font-size: 2.5rem;
  width: max-content;
  display: block;
  margin-block: auto;
  transition: font-size 0.24s, margin-left 0.24s;
}

.plv_main__wrapper {
  display: flex;
}

.plv_main__content {
  flex: 1 1;
  position: relative;
  min-width: 0;
  width: auto;
}
</style>
