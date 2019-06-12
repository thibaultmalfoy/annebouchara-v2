<template>
  <form
    id="mc-embedded-subscribe-form"
    name="mc-embedded-subscribe-form"
    action="//annebouchara.us14.list-manage.com/subscribe/post?u=3859a0dae78c40c5a4e28a631&amp;id=f9f6d197dc"
    method="post"
    target="_blank"
    rel="noopener noreferrer"
    novalidate
  >
    <label
      class="block courier text-grey-900 text-base leading-normal mb-1"
      for="mce-EMAIL"
      required
    >Votre adresse email</label>

    <div class="flex flex-col sm:flex-row">
      <input
        class="block sm:max-w-sm w-full bg-blue-100 spectral nice-type italic text-grey-900 text-lg py-2 px-3 mb-2 sm:mb-0 rounded border-2 border-gray-400 appearance-none focus:outline-none focus:border-blue-500"
        id="mce-EMAIL"
        name="EMAIL"
        type="email"
        placeholder="votre@email.com"
        required
      >

      <button
        class="flex-shrink-0 w-full sm:w-auto bg-blue-500 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 courier text-white text-base text-center leading-normal py-3 px-5 sm:ml-2 rounded border-b-2 border-solid border-blue-800"
        id="mc-embedded-subscribe"
        name="subscribe"
        type="submit"
      >Abonnez-vous</button>
    </div>
  </form>
</template>

<style scoped>
/* Fix a weird bug in Safari, where placeholder text is misaligned */
input {
  line-height: inherit;
}

input::placeholder {
  color: #a0aec0;
  opacity: 1;
}
</style>

<script>
export default {};
</script>
