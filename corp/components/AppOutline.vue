<template>
  <div class="AppOutline">
    <div class="AppOutline__Section sd">
      <h2 class="AppOutline__Head text sd">OUTLINE.<br /></h2>
      <div class="AppOutline__DefinitionArea sd">
        <div class="AppOutline__CompanyDefinition sd">
          <p class="AppOutline__CompanyLine text sd">会社名</p>
          <p class="AppOutline__CompanyValue text sd">
            株式会社Rocale（ロケール）
          </p>
        </div>
        <div class="AppOutline__EstablishmentDefinition sd">
          <p class="AppOutline__EstablishmentLine text sd">設立年月</p>
          <p class="AppOutline__EstablishmentValue text sd">2023年4月</p>
        </div>
        <div class="AppOutline__AddressDefinition sd">
          <p class="AppOutline__AddressLine text sd">住所</p>
          <p class="AppOutline__AddressValue text sd">
            <span class="AppOutline__AddresTokyoOfficeText">東京本社</span
            ><br />〒114-0002　東京都北区王子5-1−1−1125<br /><span
              class="AppOutline__AddresHitachiOfficeText"
              >日立事務所</span
            ><br />〒319-1304　茨城県日立市十王町友部72-5-203
          </p>
        </div>
        <div class="AppOutline__PresidentDefinition sd">
          <p class="AppOutline__PresidentLine text sd">代表取締役</p>
          <p class="AppOutline__PresidentValue text sd">相澤 雄大</p>
        </div>
        <div class="AppOutline__WorkDefinition sd">
          <p class="AppOutline__WorkLine text sd">事業内容</p>
          <p class="AppOutline__WorkValue text sd">
            <ul>
              <li>公衆浴場・宿泊・飲食店の運営および開業支援</li>
              <li>宿泊施設へのサウナ設備導入支援</li>
              <li>ITコンサルティング・システム開発支援</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.AppOutline {
  width: 1000px;
  max-width: 100%;

  &__Section {
    align-content: flex-start;
    align-items: flex-start;
    background: rgba(0, 0, 0, 0);
    border-radius: 0;
    margin: 0px 0px 100px 0px;
    opacity: 1;
    overflow-x: visible;
    overflow-y: visible;
    padding: 0 0 0 0;
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
    max-width: 100%;
    justify-content: center;
    @media screen and (max-width: 480px) {
      font-size: 24px;
    }
  }

  &__DefinitionArea {
    align-content: flex-start;
    align-items: flex-start;
    background: rgba(0, 0, 0, 0);
    border-radius: 0;
    margin: 0px 0px 50px 0px;
    opacity: 1;
    overflow-x: visible;
    overflow-y: visible;
    padding: 0 0 0 0;
    max-width: 100%;
    @media screen and (max-width: 480px) {
      width: 100%;
      max-width: 100%;
    }
  }

  &__CompanyDefinition {
    background: rgba(0, 0, 0, 0);
    border-bottom: solid 1px #060605;
    border-radius: 0;
    flex-direction: row;
    height: 74px;
    opacity: 1;
    overflow-x: visible;
    overflow-y: visible;
    padding: 20px 0px 20px 0px;
    width: 500px;
    max-width: 100%;
    @media screen and (max-width: 480px) {
      width: 100%;
      max-width: 100%;
    }
  }
  &__CompanyLine {
    border-radius: 0;
    color: #060605;
    font-family: var(--s-font-95b7d416);
    font-weight: 700;
    letter-spacing: 0em;
    line-height: 2;
    margin: 0px 30px 0px 0px;
    opacity: 1;
    padding: 0 0 0 0;
    text-align: left;
    width: 80px;
    max-width: calc(100% - 30px);
    justify-content: flex-start !important;
  }

  &__CompanyValue {
    border-radius: 0;
    color: #060605;
    font-family: var(--s-font-95b7d416);
    font-weight: 400;
    letter-spacing: 0em;
    line-height: 2;
    margin: 0 0 0 0;
    opacity: 1;
    padding: 0 0 0 0;
    text-align: left;
    max-width: 100%;
    justify-content: flex-start;
  }

  &__EstablishmentDefinition {
    background: rgba(0, 0, 0, 0);
    border-bottom: solid 1px #060605;
    border-radius: 0;
    flex-direction: row;
    opacity: 1;
    overflow-x: visible;
    overflow-y: visible;
    padding: 20px 0px 20px 0px;
    width: 500px;
    max-width: 100%;
    @media screen and (max-width: 480px) {
      width: 100%;
      max-width: 100%;
    }
  }

  &__EstablishmentLine {
    border-radius: 0;
    color: #060605;
    font-family: var(--s-font-95b7d416);
    font-weight: 700;
    letter-spacing: 0em;
    line-height: 2;
    margin: 0px 30px 0px 0px;
    opacity: 1;
    padding: 0 0 0 0;
    text-align: left;
    width: 80px;
    max-width: calc(100% - 30px);
    justify-content: flex-start !important;
  }

  &__EstablishmentValue {
    border-radius: 0;
    color: #060605;
    font-family: var(--s-font-95b7d416);
    font-weight: 400;
    letter-spacing: 0em;
    line-height: 2;
    margin: 0 0 0 0;
    opacity: 1;
    padding: 0 0 0 0;
    text-align: left;
    max-width: 100%;
    justify-content: flex-start;
  }

  &__AddressDefinition {
    background: rgba(0, 0, 0, 0);
    border-bottom: solid 1px #060605;
    border-radius: 0;
    flex-direction: row;
    opacity: 1;
    overflow-x: visible;
    overflow-y: visible;
    padding: 20px 0px 20px 0px;
    width: 500px;
    max-width: 100%;
    @media screen and (max-width: 480px) {
      width: 100%;
      max-width: 100%;
    }
  }

  &__AddressLine {
    border-radius: 0;
    color: #060605;
    font-family: var(--s-font-95b7d416);
    font-weight: 700;
    letter-spacing: 0em;
    line-height: 2;
    margin: 0px 30px 0px 0px;
    opacity: 1;
    padding: 0 0 0 0;
    text-align: left;
    width: 80px;
    max-width: calc(100% - 30px);
    justify-content: flex-start !important;
  }

  &__AddressValue {
    display: block !important;
    flex: none;
    border-radius: 0;
    color: #060605;
    font-family: var(--s-font-95b7d416);
    font-weight: 400;
    letter-spacing: 0em;
    line-height: 2;
    margin: 0 0 0 0;
    opacity: 1;
    padding: 0 0 0 0;
    text-align: left;
    max-width: 100%;
    justify-content: flex-start;
    @media screen and (max-width: 480px) {
      width: 60%;
      max-width: 60%;
    }
  }

  &__AddresTokyoOfficeText,
  &__AddresHitachiOfficeText {
    font-size: 0.86em;
    font-weight: 700;
  }

  &__PresidentDefinition {
    background: rgba(0, 0, 0, 0);
    border-bottom: solid 1px #060605;
    border-radius: 0;
    flex-direction: row;
    opacity: 1;
    overflow-x: visible;
    overflow-y: visible;
    padding: 20px 0px 20px 0px;
    width: 500px;
    max-width: 100%;
    @media screen and (max-width: 480px) {
      width: 100%;
      max-width: 100%;
    }
  }

  &__PresidentLine {
    border-radius: 0;
    color: #060605;
    font-family: var(--s-font-95b7d416);
    font-weight: 700;
    letter-spacing: 0em;
    line-height: 2;
    margin: 0px 30px 0px 0px;
    opacity: 1;
    padding: 0 0 0 0;
    text-align: left;
    width: 80px;
    max-width: calc(100% - 30px);
    justify-content: flex-start !important;
  }

  &__PresidentValue {
    border-radius: 0;
    color: #060605;
    font-family: var(--s-font-95b7d416);
    font-weight: 400;
    letter-spacing: 0em;
    line-height: 2;
    margin: 0 0 0 0;
    opacity: 1;
    padding: 0 0 0 0;
    text-align: left;
    max-width: 100%;
    justify-content: flex-start;
  }


  &__WorkDefinition {
    background: rgba(0, 0, 0, 0);
    border-bottom: solid 1px #060605;
    border-radius: 0;
    flex-direction: row;
    opacity: 1;
    overflow-x: visible;
    overflow-y: visible;
    padding: 20px 0px 20px 0px;
    width: 500px;
    max-width: 100%;
    @media screen and (max-width: 480px) {
      width: 100%;
      max-width: 100%;
    }
  }

  &__WorkLine {
    border-radius: 0;
    color: #060605;
    font-family: var(--s-font-95b7d416);
    font-weight: 700;
    letter-spacing: 0em;
    line-height: 2;
    margin: 0px 30px 0px 0px;
    opacity: 1;
    padding: 0 0 0 0;
    text-align: left;
    width: 80px;
    max-width: calc(100% - 30px);
    justify-content: flex-start !important;
  }

  &__WorkValue {
    border-radius: 0;
    color: #060605;
    font-family: var(--s-font-95b7d416);
    font-weight: 400;
    letter-spacing: 0em;
    line-height: 2;
    margin: 0 0 0 0;
    opacity: 1;
    padding: 0 0 0 0;
    text-align: left;
    max-width: 100%;
    justify-content: flex-start;
    li {
      padding: 4px 8px;
    }
  }

}
</style>
