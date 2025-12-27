<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const isLogoActive = ref(true);

// ロゴの表示制御
const scrollDisplayControl = () => {
  isLogoActive.value = 40 > window.scrollY;
};

onMounted(() => {
  window.addEventListener("scroll", scrollDisplayControl);
});

onUnmounted(() => {
  window.removeEventListener("scroll", scrollDisplayControl);
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
