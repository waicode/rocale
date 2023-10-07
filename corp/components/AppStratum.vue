<template>
  <div class="AppStratum">
    <div>
      <p class="AppStratum__Copyright sd text">
        © Rocale Inc. All Rights Reserved.
      </p>
    </div>
    <div class="AppStratum__Image image sd"></div>
  </div>
</template>

<style lang="scss">
.AppStratum {
  width: 100%;
  max-width: 100%;

  &__Copyright {
    color: #616161;
    font-family: var(--s-font-17b9b6dd);
    justify-content: right !important;
    font-size: 12px;
    padding: 0 12px 8px 4px;
  }

  &__Image {
    flex: none;
    height: 128px;
    padding: 0px;
    background-position: center;
    background-repeat: repeat-x;
    background-size: 100% 128px;
    background-image: url("https://storage.googleapis.com/studio-design-asset-files/projects/NxqgEexgW1/s-2400x194_v-frms_webp_465f878e-ac3e-4d92-8cd4-379ff1d6c56c.webp");
  }
}
</style>
