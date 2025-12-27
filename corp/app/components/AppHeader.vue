<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const isLogoActive = ref(true);

const throttle = <T extends (...args: Parameters<T>) => void>(
  fn: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let lastCall = 0;
  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn(...args);
    }
  };
};

// ロゴの表示制御
const scrollDisplayControl = () => {
  isLogoActive.value = 40 > window.scrollY;
};

const throttledScrollHandler = throttle(scrollDisplayControl, 100);

onMounted(() => {
  window.addEventListener("scroll", throttledScrollHandler, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", throttledScrollHandler);
});
</script>

<template>
  <div class="AppHeader">
    <transition name="fade">
      <div v-show="isLogoActive">
        <div class="AppHeader__Logo image sd"></div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss">
.AppHeader {
  width: 100%;
  max-width: 100%;

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0%;
  }

  @media screen and (max-width: 480px) {
    display: flex;
    justify-content: center;
  }

  &__Logo {
    border-radius: 0px;
    display: flex;
    flex: none;
    height: 80px;
    margin: 40px 0px 0px 32px;
    overflow-x: visible;
    overflow-y: visible;
    position: relative;
    width: 340px;
    max-width: calc(100% - 32px);

    &:before {
      background-image: url("~/assets/images/logo.png");
    }

    @media screen and (max-width: 768px) {
      display: flex;
    }
    @media screen and (max-width: 480px) {
      display: flex;
      height: 60px;
      width: 288px;
      margin: 40px 0 0 0;
    }
  }
}
</style>
