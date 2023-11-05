
<template>
  <main class="w-full h-fit flex justify-center relative overflow-hidden">

    <div class="w-[100%] md:w-full absolute h-[16%] lg:h-fit  top-0">
      <img src="@/assets/images/header.png" class="w-full h-full object-cover" alt="">
    </div>

    <div class="w-full max-w-screen-xl h-fit relative">

      <top-nav />

      <div class="w-full h-fit flex flex-col  px-6 xl:px-8">
        <section class="w-full h-screen flex flex-col gap-12 justify-center items-center overflow-hidden">

          <img src="@/assets/images/nameStroke.png" class="w-[60%]">

          <span class="md:w-[500px] text-justify">
            <strong>full stack developer</strong>
            specializing in building exceptional digital
            experiences. With
            perfect mastery of
            HTML, CSS, JavaScript, and its framework React, Python and its framework Django. Currently, I’m focused on
            building accessible, human-centered products.</span>
          <div class="w-fit grid grid-cols-2 gap-4 mt-4">
            <button class="btn btn-square btn-ghost">
              <linkedin-icon class="w-6 h-6 fill-white" />
            </button>
            <button class="btn btn-square btn-ghost">
              <github-icon class="w-6 h-6 fill-white" />
            </button>
          </div>
        </section>
        <section class="w-full h-screen flex justify-center">
          <div class="w-fit flex flex-col gap-4">
            <span class="text-3xl font-bold uppercase">information technology</span>
            <div class="w-full h-fit flex items-end gap-6">
              <span class="flex-1 h-px bg-white mb-0.5"></span>
              <span>skills</span>
            </div>
          </div>

        </section>
        <section class="w-full h-screen bg-violet-100">

        </section>
      </div>


    </div>
  </main>
</template>
<script setup>
import githubIcon from "../assets/icons/githubIcon.vue";
import linkedinIcon from "../assets/icons/linkedinIcon.vue";
import topNav from "../components/topNav.vue";
</script>
