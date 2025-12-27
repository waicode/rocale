<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const isButtonsActive = ref(false);

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

// ボタンの表示制御
const scrollDisplayControl = () => {
  isButtonsActive.value = 780 <= window.scrollY;
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
  <div class="AppFooter">
    <transition name="fade">
      <div v-show="isButtonsActive">
        <footer class="AppFooter__Footer fixed sd">
          <div class="AppFooter__Buttons sd">
            <a href="mailto:info@rocale.co.jp" target="_blank"
              ><i class="AppFooter__MailIcon icon fa fa-envelope-o sd"></i></a
            ><a href="https://twitter.com/waisauna" target="_blank"
              ><i class="AppFooter__TwitterIcon icon fa fa-twitter sd"></i
            ></a>
          </div>
        </footer>
      </div>
    </transition>
  </div>
</template>

<style lang="scss">
.AppFooter {
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

  &__Footer {
    background: rgba(0, 0, 0, 0);
    border-radius: 0;
    bottom: 180px;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2);
    flex-direction: row;
    height: 40px;
    left: 0px;
    opacity: 1;
    overflow-x: visible;
    overflow-y: visible;
    padding: 0px 44px 0px;
    position: fixed;
    right: 0px;
    top: NaNpx;
    max-width: 100%;
    @media screen and (max-width: 480px) {
      bottom: 164px;
      padding: 0px 36px 16px;
    }
  }

  &__Buttons {
    background: rgba(0, 0, 0, 0);
    border-radius: 0;
    flex: 1;
    flex-direction: row-reverse;
    opacity: 1;
    overflow-x: visible;
    overflow-y: visible;
    padding: 0px 0px 0px;
  }

  &__MailIcon {
    background: rgba(0, 0, 0, 0);
    border: solid 2px #616161;
    border-radius: 50%;
    color: #616161;
    font-size: 24px;
    height: 60px;
    margin: 0px 0px 0px 15px;
    opacity: 1;
    padding: 0 0 0 0;
    width: 60px;
    max-width: calc(100% - 15px);
    &:hover {
      background: rgba(0, 0, 0, 0);
    }
  }

  &__TwitterIcon {
    background: rgba(0, 0, 0, 0);
    border: solid 2px #616161;
    border-radius: 50%;
    color: #616161;
    font-size: 24px;
    height: 60px;
    margin: 0px 0px 0px 15px;
    opacity: 1;
    padding: 0 0 0 0;
    width: 60px;
    max-width: calc(100% - 15px);
    &:hover {
      background: rgba(0, 0, 0, 0);
    }
  }
}
</style>
