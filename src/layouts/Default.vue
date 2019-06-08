<template>
  <div class="flex flex-col min-h-screen container mx-auto px-4">
    <header class="mt-6 mb-3l md:mb-6l">
      <h1
        class="salome fancy-type font-normal text-gray-800 text-3xl md:text-5xl text-center leading-none"
      >
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </h1>
    </header>

    <main
      class="content flex-grow spectral nice-type text-gray-900 text-2xl leading-normal mb-24 lg:mb-48"
    >
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
  font-style: normal;
}

@font-face {
  font-family: Spectral;
  src: url("../assets/fonts/spectral-regular.woff2") format("woff2"),
    url("../assets/fonts/spectral-regular.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: Spectral;
  src: url("../assets/fonts/spectral-italic.woff2") format("woff2"),
    url("../assets/fonts/spectral-italic.woff") format("woff");
  font-weight: normal;
  font-style: italic;
}

@font-face {
  font-family: Courier Prime Sans;
  src: url("../assets/fonts/courier-prime-sans.woff2") format("woff2"),
    url("../assets/fonts/courier-prime-sans.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

.salome {
  font-family: "Salome", Georgia, "Times New Roman", Times, serif;
}

.spectral {
  font-family: "Spectral", Georgia, "Times New Roman", Times, serif;
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

.content p {
  margin-bottom: 2.25rem;
  max-width: 34em;
}

.content time {
}

.content hr {
  overflow: auto;
  visibility: hidden;
  margin: 3.375rem 0;
}
</style>

<script>
export default {
  created: function() {
    this.date = new Date().getFullYear();
  }
};
</script>
