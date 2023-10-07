<template>
  <div class="App">
    <div class="App__Container" aria-hidden="false">
      <div tabindex="0" class="App__Wrap sd">
        <div
          data-s-f29e752d-f617-4410-9736-9f3ab5cf9854=""
          class="App__BackgroundWrap image fixed sd"
        >
          <div class="App__Background sd"></div>
        </div>
        <AppHeader></AppHeader>
        <main class="App__Main sd">
          <AppCatchCopy></AppCatchCopy>
          <AppFacility></AppFacility>
          <AppOutline></AppOutline>
        </main>
        <AppFooter></AppFooter>
      </div>
    </div>
    <AppStratum></AppStratum>
  </div>
</template>

<style lang="scss">
.App {
  &__Container {
    display: flex;
    height: auto;
    min-height: 100vh;
    > .sd {
      min-height: 100vh;
      overflow: hidden;
    }
  }

  &__Wrap {
    border-radius: 0;
    height: 100%;
    margin: 0 0 0 0;
    opacity: 1;
    overflow-y: auto;
    padding: 0px 10px 0px;
    width: 100%;
    max-width: 100%;
    @media screen and (max-width: 480px) {
      padding: 0px 0px 0px;
    }
  }

  &__BackgroundWrap {
    border-radius: 0px;
    flex: none;
    height: 100%;
    justify-content: center;
    left: 0;
    margin: 0 0 0 0;
    opacity: 1;
    padding: 0 0 0 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: -3;
    max-width: 100%;
    @media screen and (max-width: 768px) {
      flex: none;
    }
  }

  &__Background {
    align-content: flex-start;
    align-items: flex-start;
    background: #efebe9;
    border-radius: 0px;
    box-shadow: 1px 26px 65px 0px rgb(0, 0, 0);
    flex: none;
    flex-direction: column;
    flex-wrap: nowrap;
    height: 100%;
    justify-content: flex-start;
    opacity: 1;
    overflow-x: visible;
    overflow-y: visible;
    transform: translate(0px, 0px);
    width: 100%;
    max-width: 100%;

    @media screen and (max-width: 768px) {
      flex: none;
    }
  }

  &__Main {
    background: rgba(0, 0, 0, 0);
    border-radius: 0px;
    flex: 1;
    opacity: 1;
    overflow-x: visible;
    overflow-y: visible;
    padding: 0px 20px 100px;
    width: 100%;
    max-width: 100%;

    @media screen and (max-width: 768px) {
      flex: none;
      padding: 0px 40px 100px;
    }

    @media screen and (max-width: 480px) {
      padding: 0px 20px 100px;
    }
  }
}
</style>
