<template>
  <div class="layout px-4">
    <header class="mt-6 mb-24 lg:mb-48">
      <h1
        class="salome fancy-type font-normal text-gray-900 text-2xl md:text-3xl lg:text-5xl text-center leading-none"
      >
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </h1>
    </header>

    <slot/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style lang="postcss">
@tailwind base;

@tailwind components;

@tailwind utilities;

@font-face {
  font-family: Salome;
  src: url("../assets/salome-webfont.woff2") format("woff2"),
    url("../assets/salome-webfont.woff") format("woff");
  font-weight: normal;
}

.salome {
  font-family: "Salome", serif;
}

.fancy-type {
  font-kerning: normal;
  font-feature-settings: "kern", "liga", "clig", "dlig", "calt", "onum";
}

.nice-type {
  font-kerning: normal;
  font-feature-settings: "kern", "liga", "clig", "calt", "onum";
}

.layout {
  max-width: 760px;
  margin: 0 auto;
}
</style>
