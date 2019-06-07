<template>
  <div class="layout">
    <header class="flex justify-between items-center py-4 mb-4">
      <h1>
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </h1>

      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about">About</g-link>
      </nav>
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

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.nav__link {
  margin-left: 20px;
}
</style>
