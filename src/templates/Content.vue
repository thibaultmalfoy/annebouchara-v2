<template>
  <Layout>
    <h1>{{ $page.post.title }}</h1>
    <p>{{ $page.post.date }}</p>
    <div v-html="$page.post.content"/>
  </Layout>
</template>

<page-query>
query Post ($id: String!) {
  post: Post (id: $id) {
    title
    date
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  }
};
</script>