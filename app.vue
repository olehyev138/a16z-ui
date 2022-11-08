<template>
  <div>
    <header class="text-gray-700 body-font border-b border-gray-200">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <NuxtLink class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span class="ml-3 text-xl"><NuxtLink class="mr-5 hover:text-gray-900" to="/">Nuxt-WP</NuxtLink></span>
        </NuxtLink>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <NuxtLink class="mr-5 hover:text-gray-900" to="/posts">Posts</NuxtLink>
          <NuxtLink class="mr-5 hover:text-gray-900" to="/about">About</NuxtLink>
        </nav>
      </div>
    </header>
    <NuxtPage />
  </div>
</template>
<script>
export default {};
</script>
