<template>
  <Layout>
    <h1>Bienvenue</h1>

    <p>Découvrez en avant-première mes histoires fantastiques. Abonnez-vous à ma newsletter pour recevoir la prochaine par email dès parution.</p>

    <div v-for="edge in $page.posts.edges" :key="edge.node.id">
      <h2>
        <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
      </h2>
    </div>
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