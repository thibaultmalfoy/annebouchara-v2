<template>
  <Layout>
    <article class="flex flex-col">
      <h1
        class="salome text-gray-800 text-2xl md:text-3xl lg:text-4xl leading-tight"
      >{{ $page.post.title }}</h1>
      <time
        class="order-first courier text-gray-600 text-sm md:text-base lg:text-lg leading-none"
        :datetime="$page.post.date"
      >{{ formatDate($page.post.date) }}</time>

      <div v-html="$page.post.content"/>
    </article>
  </Layout>
</template>

<page-query>
query Post ($id: String!) {
  post: post (id: $id) {
    title
    excerpt
    date
    content
  }
}
</page-query>

<script>
export default {
  methods: {
    formatDate(v) {
      const date = new Date(v);
      return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    }
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.post.excerpt
        }
      ]
    };
  }
};
</script>