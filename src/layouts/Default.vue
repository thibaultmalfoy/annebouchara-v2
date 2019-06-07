<template>
  <div class="layout px-4">
    <header class="mt-6 mb-24 lg:mb-48">
      <h1
        class="salome fancy-type font-normal text-gray-900 text-2xl md:text-3xl lg:text-5xl text-center leading-none"
      >
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </h1>
    </header>

    <main class="content mb-24 lg:mb-48">
      <slot/>
    </main>

    <footer
      class="courier nice-type text-gray-600 text-sm md:text-base leading-normal"
    >© Anne Bouchara, 2016&ndash;{{ date }}.</footer>
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
@font-face {
  font-family: Salome;
  src: url("../assets/fonts/salome-webfont.woff2") format("woff2"),
    url("../assets/fonts/salome-webfont.woff") format("woff");
  font-weight: normal;
}

@font-face {
  font-family: Courier Prime Sans;
  src: url("../assets/fonts/courier-prime-sans.woff2") format("woff2"),
    url("../assets/fonts/courier-prime-sans.woff") format("woff");
  font-weight: normal;
}

.salome {
  font-family: "Salome", serif;
}

.courier {
  font-family: "Courier Prime Sans", courier, monospace;
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
  display: flex;
  flex-direction: column;
  max-width: 760px;
  margin: 0 auto;
  min-height: 100vh;
}

.content {
  flex-grow: 1;
}
</style>

<script>
export default {
  created: function() {
    this.date = new Date().getFullYear();
  }
};
</script>
