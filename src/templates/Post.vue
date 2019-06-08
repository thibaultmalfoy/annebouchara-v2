<template>
  <Layout>
    <article>
      <h1
        class="salome text-gray-800 text-2xl md:text-3xl lg:text-4xl leading-tight mb-2l md:mb-3l"
      >{{ $page.post.title }}</h1>
      <time :datetime="$page.post.date">{{ $page.post.date }}</time>
      <div v-html="$page.post.content"/>
    </article>
  </Layout>
</template>

<page-query>
query Post ($id: String!) {
  post: post (id: $id) {
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