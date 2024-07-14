<template>
  <div class="AppFacility">
    <div class="AppFacility__Section sd">
      <h2 class="AppFacility__Head text sd">FACILITY.</h2>
      <ul class="AppFacility__ListArea sd">
        <li class="AppFacility__ListItem sd">
          <div class="AppFacility__ListTitle sd">
            <p class="AppFacility__ListTitleText text sd">
              <a href="https://midorito-sauna.jp" target="_blank"
                >MIDORITO SAUNA（ミドリトサウナ）</a
              >
            </p>
          </div>
          <p class="AppFacility__ListCaption text sd">
            茨城県日立市にある、緑に囲まれ、蛍が生息する水がとてもきれいな土地で、<br />日立の里山に流れるまろやかな湧き水を使ったアウトドアサウナ施設をつくっています。<br />
            MIDORITO SAUNA（ミドリトサウナ）はkenpoku PROJECT
            E（茨城県北起業型地域おこし）に採択されたプロジェクトです。<br />
            日立市の魅力をより多くの人に知ってもらうため、県や市と協力しながら周辺地域で一体となって施設を運営していきます。<br />
            2024年7月28日よりプレオープン営業を開始しました。
          </p>
          <a href="https://midorito-sauna.jp" target="_blank"
            ><img
              class="AppFacility__ListImage sd"
              alt="MIDORITO SAUNA（ミドリトサウナ）"
              src="~/assets/images/midorito-sauna.png"
          /></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.AppFacility {
  width: 1000px;
  max-width: 100%;

  &__Section {
    align-content: flex-start;
    align-items: flex-start;
    flex-wrap: nowrap;
    justify-content: center;
    padding: 0px;
  }

  &__Head {
    border-radius: 0;
    color: #060605;
    font-family: var(--s-font-17b9b6dd);
    font-size: 36px;
    font-weight: 900;
    letter-spacing: 0em;
    line-height: 1.4;
    margin: 0px 0px 20px 0px;
    opacity: 1;
    padding: 0 0 0 0;
    text-align: center;
    justify-content: center;
    @media screen and (max-width: 480px) {
      font-size: 24px;
    }
  }

  &__ListArea {
    flex: none;
    padding: 0px;
  }

  &__ListItem {
    align-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    margin: 0px 0px 100px 0px;
    padding: 0px;
    width: 100%;
    max-width: 100%;
  }

  &__ListTitle {
    background: rgba(0, 0, 0, 0);
    border-radius: 0;
    flex-direction: row;
    opacity: 1;
    overflow-x: visible;
    overflow-y: visible;
    padding: 0 0 0 0;
  }

  &__ListTitleText {
    a {
      border-radius: 0;
      color: #060605;
      font-family: var(--s-font-17b9b6dd);
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 0em;
      line-height: 1.8;
      margin: 0px 10px 0px 0px;
      opacity: 1;
      padding: 0 0 0 0;
      text-align: left;
      max-width: calc(100% - 10px);
      justify-content: flex-start;
      @media screen and (max-width: 480px) {
        font-size: 18px;
      }
    }
  }

  &__ListCaption {
    border-radius: 0;
    color: #060605;
    font-family: var(--s-font-95b7d416);
    font-weight: 400;
    letter-spacing: 0em;
    line-height: 1.8;
    margin: 0px 0px 24px 0px;
    opacity: 1;
    padding: 0 0 0 0;
    text-align: left;
    max-width: 100%;
    justify-content: flex-start;
    @media screen and (max-width: 480px) {
      margin: 0px 0px 20px 0px;
      max-width: 100%;
    }
  }

  &__ListImage {
    border-radius: 8px;
    height: auto;
    opacity: 1;
    padding: 0 0 0 0;
    width: 66%;
    max-width: 66%;
    @media screen and (max-width: 768px) {
      height: 295px;
      width: 482px;
      max-width: 100%;
    }
    @media screen and (max-width: 480px) {
      height: 189px;
      width: 329px;
      max-width: 100%;
    }
  }
}
</style>
