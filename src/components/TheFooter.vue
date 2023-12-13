<template>
  <footer absolute bottom-5 left-0 right-0 text-center text-gray>
    <div>
      Made with <i i-carbon-favorite />
      by ZH Shakib <i i-carbon-favorite />
    </div>
    <nav display-flex absolute bottom-5 left-0 right-0 text-center text-gray>
      <button icon-btn @click="toggleDark()">
        <div i-carbon-moon dark:i-carbon-sun />
      </button>
      <a
        i-carbon-logo-github ml-2 icon-btn
        rel="noreferrer"
        href="https://github.com/zhshakib/"
        target="_blank"
      />
    </nav>
  </footer>
</template>
