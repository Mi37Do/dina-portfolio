<script setup>
import topNav from "../components/topNav.vue";
</script>

<template>
  <main class="w-full h-fit flex justify-center relative">

    <img src="@/assets/images/header.png" class="w-full absolute -top-[55%]" alt="">
    <div class="w-full max-w-screen-xl h-fit relative">

      <top-nav />

      <div class="w-full h-fit flex flex-col  px-4 xl:px-8">
        <section class="w-full h-screen flex flex-col gap-4 justify-center items-center">
          <span class="text-[8rem] font-bold capitalize">dina fettache</span>

          <!-- 
          <span class="text-3xl font-semibold text-secondary">lorem ipsum</span>
          <span class="w-fit text-center text-2xl text-slate-500">a full stack developer</span>
          <div class="w-fit grid grid-cols-3 gap-4 mt-4">
            <button class="btn btn-square"></button>
            <button class="btn btn-square"></button>
            <button class="btn btn-square"></button>
          </div> -->
        </section>
        <section class="w-full h-screen bg-violet-200">

        </section>
        <section class="w-full h-screen bg-violet-100">

        </section>
      </div>


    </div>
  </main>
</template>
