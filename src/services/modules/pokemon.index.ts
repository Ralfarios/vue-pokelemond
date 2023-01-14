import pokemonAPI from "../axios";

export class PokemonService {
  public static getPokemonTypes() {
    return pokemonAPI().get("/type");
  }
  public static getAllPokemons(params: TparamsGetAllPokemon) {
    return pokemonAPI().get("/pokemon", { params });
  }
  public static getPokemonDetail(id: number | string) {
    return pokemonAPI().get(`/pokemon/${id}`);
  }
  public static getPokemonsByType(type: string) {
    return pokemonAPI().get(`/type/${type}`);
  }
}
