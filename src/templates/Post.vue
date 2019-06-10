<template>
  <Layout>
    <article class="article flex flex-col">
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

<style>
.article h1 {
  margin-bottom: var(--leading);
}

.article p {
  margin-bottom: var(--leading);
  max-width: 34em;
}

.article hr {
  overflow: auto;
  visibility: hidden;
  margin: calc(1.5 * var(--leading)) 0;
}

.article blockquote {
  padding-left: 1rem;
  border-left: 2px solid #63b3ed;
  font-style: italic;
}

.article blockquote cite {
  display: block;
  font-size: 1rem;
  font-style: normal;
  font-feature-settings: "kern", "c2sc", "smcp", "lnum";
  letter-spacing: 0.025em;
}

.article blockquote cite:before {
  content: "— ";
}

.article a {
  border-bottom: 1px solid #63b3ed;
}

@media (min-width: 768px) {
  .article h1 {
    margin-bottom: calc(3 * var(--leading));
  }
  .article blockquote {
    padding-left: 1.25rem;
  }
  .article blockquote cite {
    font-size: 1.125rem;
  }
}

@media (min-width: 1024px) {
  .article blockquote {
    padding-left: 1.5rem;
  }
  .article blockquote cite {
    font-size: 1.25rem;
  }
}
</style>
