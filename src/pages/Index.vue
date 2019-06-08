<template>
  <Layout>
    <h1>Bienvenue</h1>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores</p>

    <div v-for="edge in $page.posts.edges" :key="edge.node.id">
      <h2>{{ edge.node.title }}</h2>
    </div>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allPost(sortBy: "date") {
    edges {
      node { 
        id
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
