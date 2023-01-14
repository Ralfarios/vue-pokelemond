<template>
  <header class="plv_header">
    <div class="plv_header__wrapper">
      <div class="plv_header__inner">
        <a href="/" class="plv_header__logo">
          <img src="../../assets/img/logo.svg" alt="pokélemond Logo" />
          pokélemond
        </a>

        <nav class="plv_header__nav">
          <ul>
            <li>
              <a href="/">Pokémon</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
.plv_header {
  left: 0;
  position: sticky;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 3;
  background-color: #1e2023;
  box-shadow: none;
  transition: background-color .2s, box-shadow .2s, -webkit-backdrop-filter .2s;
  transition: background-color .2s, backdrop-filter .2s, box-shadow .2s;
  transition: background-color .2s, backdrop-filter .2s, box-shadow .2s, -webkit-backdrop-filter .2s;
}

.plv_header__nav {
  align-items: center;
  display: flex;
  gap: 2rem;
}

.plv_header__nav ul {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
}

.plv_header__nav ul li {
  font-weight: 600;
  font-size: 1rem;
}

.plv_header__wrapper {
  margin-inline: auto;
  height: 4.5rem;
  max-width: 90rem;
}

.plv_header__inner {
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  align-items: center;
  display: flex;
  gap: 2rem;
  height: 100%;
  justify-content: space-between;
  padding-inline: 1.5rem;
  user-select: none;
}

.plv_header__logo {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 700;
  font-size: 1.5rem;
}

.plv_header__logo img {
  width: 28px;
  height: 28px;
}
</style>