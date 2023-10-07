<template>
  <div class="AppCatchCopy">
    <h1 class="AppCatchCopy__Head sd">
      <span class="AppCatchCopy__Message text sd"
        >Create a locale<br />for health of mind and body.<br /></span
      ><span class="AppCatchCopy__Caption text sd"
        >株式会社Rocaleは、心身が浄化され、人が人らしく生きられる舞台・文化をつくります。<br
      /></span>
    </h1>
  </div>
</template>

<style lang="scss">
.AppCatchCopy {
  width: 1000px;
  max-width: 100%;

  &__Head {
    align-content: flex-start;
    align-items: flex-start;
    background: rgba(0, 0, 0, 0);
    border-radius: 0;
    margin: 120px 0px 80px 0px;
    opacity: 1;
    overflow-x: visible;
    overflow-y: visible;
    padding: 0 0 0 0;
    @media screen and (max-width: 768px) {
      margin: 100px 0px 80px 0px;
      max-width: 100%;
    }
    @media screen and (max-width: 480px) {
      margin: 80px 0px 80px 0px;
      max-width: 100%;
    }
  }

  &__Message {
    background: rgba(0, 0, 0, 0);
    border-radius: 0;
    color: #060605;
    font-family: var(--s-font-17b9b6dd);
    font-size: 101px;
    font-weight: 700;
    letter-spacing: 0em;
    line-height: 1.2;
    margin: 0px 0px 15px 0px;
    opacity: 1;
    padding: 0 0 0 0;
    text-align: left;
    max-width: 100%;
    justify-content: flex-start;

    @media screen and (max-width: 768px) {
      font-size: 72px;
    }
    @media screen and (max-width: 480px) {
      font-size: 44px;
    }
  }

  &__Caption {
    border-radius: 4px;
    color: #060605;
    font-family: var(--s-font-95b7d416);
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0em;
    line-height: 1.8;
    margin: 0 0 0 0;
    opacity: 1;
    padding: 0px 0px 0px 0px;
    text-align: left;
    max-width: 100%;
    justify-content: flex-start;
    @media screen and (max-width: 480px) {
      font-size: 18px;
    }
  }
}
</style>
