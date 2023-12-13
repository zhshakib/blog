<script setup lang="ts">
import VueTypewriterEffect from 'vue-typewriter-effect'
</script>

<template>
  <div h-2xl w-full>
    <div mx-auto flex flex-row items-center justify-between container>
      <div>
        <h2 font="mono italic" my-5 text-6xl>
          Ziaul Hasan <span color="primary" font="mono light" class="uppercase underline">Shakib</span>
        </h2>
        <div class="text-3xl">
          <p font="roboto medium" class="mb-2 text-center">
            <span text-3xl text-secondary>I'm A</span>
          </p>
          <p text-center>
            <VueTypewriterEffect
              class="text-primary font-bold"
              :strings="['Computer Science Student', 'Frontend Developer', 'Backend Developer', 'Ethical Hacker']"
            /> <span color="#42b883" font="mono bold"><span i-carbon-favorite />
            </span>
          </p>
        </div>
      </div>
      <img rounded-border mt h-400px w-400px src="" alt="">
    </div>
  </div>
</template>
