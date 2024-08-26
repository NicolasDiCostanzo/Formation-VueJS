<script lang="ts" setup>
// TODO
</script>

<template>
  <div class="w-full max-w-[1000px] mx-auto p-6 flex items-center">
    <div class="flex flex-col gap-6">
      <h1 class="text-4xl text-primary-500">
        Create Amazing Plans
      </h1>
      <p>
        Vero illo dolore nesciunt aliquid. Exercitationem consequatur provident amet pariatur consequuntur. Odit rerum et quae excepturi et. In eveniet odit aliquam sit. Est occaecati aut ipsum corporis. Vel voluptas et aut enim quasi qui natus beatae.
      </p>
      <div>
        <!-- TODO switch between buttons -->
        <!-- <BaseButton
          to="/plans"
        >
          <IconLucidePencilRuler />
          My Plans
        </BaseButton> -->
        <BaseButton
          to="/login"
        >
          <IconLucideLogIn />
          Login
        </BaseButton>
        <BaseButton href="https://vuejs.org">
          VueJS
        </BaseButton>
      </div>
    </div>
    <img src="@/assets/hero.png" alt="Illustration" class="max-w-[500px]">
  </div>
</template>
