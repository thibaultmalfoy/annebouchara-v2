<template>
  <div class="flex flex-col min-h-screen max-w-5xl mx-auto px-4 md:px-8 lg:px-12">
    <header class="header">
      <h1
        class="salome fancy-type font-normal text-gray-800 text-3xl md:text-5xl text-center leading-none"
      >
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </h1>
    </header>

    <main
      class="content flex-grow spectral nice-type text-gray-900 text-lg md:text-xl lg:text-2xl leading-normal"
    >
      <slot/>
    </main>

    <g-image class="monogram mx-auto" src="~/assets/img/anne-logo.png" width="128"/>

    <Mailchimp class="form"/>

    <footer class="footer courier nice-type text-gray-600 text-sm md:text-base leading-normal">
      <h2 class="hidden">Pied de page</h2>
      <p>© Anne Bouchara, 2016&ndash;{{ date }}.</p>
    </footer>
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
:root {
  --leading: 1.6875rem;
}

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

.header {
  margin-top: var(--leading);
  margin-bottom: calc(3 * var(--leading));
}

.content {
  margin-bottom: calc(3 * var(--leading));
}

.content > h1 {
  font-feature-settings: "kern", "c2sc", "smcp", "lnum";
  letter-spacing: 0.025em;
  margin-bottom: var(--leading);
}

.content p {
  margin-bottom: var(--leading);
  max-width: 34em;
}

.form {
  margin-bottom: calc(6 * var(--leading));
}

.monogram {
  margin-bottom: calc(6 * var(--leading));
}

.footer {
  margin-bottom: calc(0.5 * var(--leading));
}

@media (min-width: 768px) {
  :root {
    --leading: 1.875rem;
  }
  .header {
    margin-bottom: calc(6 * var(--leading));
  }
  .form {
    margin-bottom: calc(3 * var(--leading));
  }
}

@media (min-width: 1024px) {
  :root {
    --leading: 2.25rem;
  }
}
</style>

<script>
import Mailchimp from "../components/Mailchimp.vue";

export default {
  components: {
    Mailchimp
  },
  created: function() {
    this.date = new Date().getFullYear();
  }
};
</script>
