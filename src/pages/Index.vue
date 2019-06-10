<template>
  <Layout>
    <h1>Bienvenue</h1>

    <p>Découvrez en avant-première mes histoires fantastiques. Abonnez-vous à ma newsletter pour recevoir la prochaine par email dès parution.</p>

    <section class="grid">
      <h2 class="hidden">Mes histoires</h2>
      <div
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
        class="card shadow-xl hover:shadow-md mx-auto mb-8 md:mb-0"
      >
        <g-link :to="edge.node.path">
          <img :src="edge.node.coverImage" :alt="edge.node.altImage" class="p-4">
          <h3
            class="courier text-base font-normal leading-tight text-center my-0 px-4"
          >{{ edge.node.title }}</h3>
        </g-link>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allPost(sortBy: "date") {
    edges {
      node { 
        id
        path
        title
        date
        coverImage
        altImage
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Bienvenue"
  }
};
</script>

<style scoped>
.card {
  width: 18rem;
  height: 23rem;
}

@media (min-width: 768px) {
  .grid {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(2, 18rem);
    justify-content: center;
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 18rem);
  }
}
</style>
