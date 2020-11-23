<template>
  <main class="home">
    <TheBanner />

    <section class="home__plans">
      <div class="limit-grid">
        <div class="home__plans__wrapper">
          <div class="home__plans__text">
            <h2>ENTENDA MAIS SOBRE OI FIBRA</h2>
            <p>
              Oi Fibra é a internet fixa da Oi que oferece a melhor experiência
              de navegação pra você e sua família. Com a conexão banda larga de
              alta velocidade você assiste filmes e séries sem travar, joga
              online sem lag e baixa arquivos pesados mais rápido.
            </p>
            <p>
              Tenha planos de internet residencial da Oi de 200 Mega e 500 Mega
              pra aproveitar com toda a família.
            </p>
            <div>
              <BtnContact class="text--primary contact--border-primary" />
            </div>
          </div>
          <div class="home__plans__itens">
            <section class="home__plans__itens__option">
              <h4>OI TOTAL PLAY</h4>
              <h3>500 MEGA</h3>
              <img
                src="@/assets/price-500.png"
                alt="R$ 149,90"
                class="home__plans__itens__option__price"
              />
              <ul>
                <li>
                  <img
                    src="@/assets/icons/instalacao.png"
                    alt="Instalação Grátis"
                  />
                  Instalação Grátis
                </li>
                <li>
                  <img
                    src="@/assets/icons/fixo.png"
                    alt="Fixo Ilimitado + Oi Áudi News"
                  />
                  Fixo Ilimitado + Oi Áudi News
                </li>
                <li>
                  <img
                    src="@/assets/icons/play.png"
                    alt="Oi Play: Conteúdo Online"
                  />
                  Oi Play: Conteúdo Online
                </li>
                <li>
                  <img src="@/assets/icons/moldem.png" alt="Modem WIFI UP" />
                  Modem WIFI UP
                </li>
              </ul>
              <BtnSign class="sign--orange" />
              <p class="home__plans__itens__option__colection">
                <img src="@/assets/icons/oi.png" alt="Logo Oi" />
                COLEÇÃO Oi
              </p>
              <p class="home__plans__itens__option__small">
                <small>
                  *NO DÉBITO AUTOMÁTICO E CONTA DIGITAL. <br />
                  *CONSULTE CONDIÇÕES PARA SUA REGIÃO.
                </small>
              </p>
              <ol>
                <li><i class="fas fa-check"></i> Oi Leitura</li>
                <li><i class="fas fa-check"></i> Oi Revistas Esportes</li>
                <li><i class="fas fa-check"></i> Oi Notícias</li>
                <li><i class="fas fa-check"></i> Oi Expert</li>
              </ol>
            </section>
            <section class="home__plans__itens__option">
              <h4>OI TOTAL PLAY</h4>
              <h3>200 MEGA</h3>
              <img
                src="@/assets/price-200.png"
                alt="R$ 99,90"
                class="home__plans__itens__option__price"
              />
              <ul>
                <li>
                  <img
                    src="@/assets/icons/instalacao.png"
                    alt="Instalação Grátis"
                  />
                  Instalação Grátis
                </li>
                <li>
                  <img
                    src="@/assets/icons/fixo.png"
                    alt="Fixo Ilimitado + Oi Áudi News"
                  />
                  Fixo Ilimitado + Oi Áudi News
                </li>
                <li>
                  <img
                    src="@/assets/icons/play.png"
                    alt="Oi Play: Conteúdo Online"
                  />
                  Oi Play: Conteúdo Online
                </li>
                <li>
                  <img src="@/assets/icons/moldem.png" alt="Modem WIFI UP" />
                  Modem WIFI UP
                </li>
              </ul>
              <BtnSign class="sign--orange" />
              <p class="home__plans__itens__option__colection">
                <img src="@/assets/icons/oi.png" alt="Logo Oi" />
                COLEÇÃO Oi
              </p>
              <p class="home__plans__itens__option__small">
                <small>
                  *NO DÉBITO AUTOMÁTICO E CONTA DIGITAL. <br />
                  *CONSULTE CONDIÇÕES PARA SUA REGIÃO.
                </small>
              </p>
              <ol>
                <li><i class="fas fa-check"></i> Oi Leitura</li>
                <li><i class="fas fa-check"></i>Oi Revistas Esportes</li>
                <li><i class="fas fa-check"></i> Oi Notícias</li>
              </ol>
            </section>
          </div>
        </div>
      </div>
    </section>

    <section class="home__why">
      <div class="limit-grid">
        <div class="home__why__wrapper">
          <h2><span>Por que Oi Fibra</span> é a melhor internet pra você?</h2>
          <ul>
            <li><i class="fas fa-check"></i> Mais velocidade e estabilidade</li>
            <li><i class="fas fa-check"></i> Filmes e séries sem travar</li>
            <li><i class="fas fa-check"></i> Jogue com zero lag</li>
            <li><i class="fas fa-check"></i> Wifi muito mais potente</li>
            <li><i class="fas fa-check"></i> Fibra até a casa FTTH</li>
          </ul>
          <div>
            <BtnSign class="sign--bg-primary" />
          </div>
          <BtnContact class="text--primary contact--border-primary" />
        </div>
      </div>
    </section>

    <section class="home__play">
      <div class="limit-grid">
        <div class="home__play__wrapper">
          <div class="home__play__brands">
            <figure><img src="@/assets/brands/hbo.png" alt="HBO GO" /></figure>
            <figure>
              <img
                src="@/assets/brands/discovery-kids.png"
                alt="Discovery Kids"
              />
            </figure>
            <figure>
              <img src="@/assets/brands/paramount.png" alt="Paramount +" />
            </figure>
            <figure>
              <img src="@/assets/brands/colecao.png" alt="Coleção Oi" />
            </figure>
          </div>
          <div class="home__play__content">
            <h2>Oi FIBRA + Oi PLAY</h2>
            <p>
              Assista online aos melhores filmes, séries e desenhos no seu
              celular, tablet ou notebook. Com os Plays, a moeda do Oi Play,
              você troca os conteúdos do seu plano por outros da sua escolha.
              Gosta mais de esportes? Troque seus plays pelo WatchESPN. Adora
              aquela sessão pipoca no sofá? Inclua o HBO Go.
            </p>
            <ul>
              <li>
                <i class="fas fa-check"></i> <strong>AVANÇADO</strong> | 35
                PLAYS
              </li>
              <li>
                <i class="fas fa-check"></i> <strong>TOP</strong> | 85 PLAYS
              </li>
            </ul>
            <div>
              <BtnSign class="sign--primary" />
            </div>
            <BtnContact class="contact--white" />
          </div>
        </div>
      </div>
    </section>

    <section class="home__contact">
      <div class="limit-grid">
        <div class="home__contact__wrapper">
          <img src="@/assets/homem.png" alt="" />
          <div class="home__contact__content">
            <h2>VOCÊ NÃO PODE PERDER!</h2>
            <p>
              Fale conosco via <strong>Whats App</strong> ou ligue
              <span
                ><strong>(51) 3181-0760</strong> para fechar o melhor plano
                de</span
              >
              Banda Larga da Oi para você.
            </p>
            <div>
              <BtnSign class="sign--bg-primary" />
            </div>
            <BtnContact class="text--primary contact--border-primary" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  components: {
    TheBanner: () => import('@/components/TheBanner.vue'),
    BtnContact: () => import('@/components/buttons/BtnContact.vue'),
    BtnSign: () => import('@/components/buttons/BtnSign.vue'),
  },
};
</script>

<style lang="scss">
.home {
  &__plans {
    background: url('../assets/bg_plans.jpg') no-repeat center top;
    background-size: cover;
    padding: 74px 0;
    &__wrapper {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 40px;
      align-items: center;
      @include media('>=large') {
        grid-template-columns: 30% 70%;
        grid-gap: initial;
      }
    }
    &__text {
      max-width: 320px;
      h2 {
        @extend %text-gradient;
        font-size: clamp(1em, calc(1em + 3vw), 2.8125em);
        font-weight: 700;
        margin-bottom: 40px;
        text-align: center;
        @include media('>=large') {
          text-align: left;
        }
      }
      p {
        margin-bottom: 40px;
      }
      a {
        height: 58px;
        border-radius: 29px;
        padding: 0 31px;
      }
    }
    &__itens {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 36px;
      justify-self: center;
      width: 100%;
      @include media('>=large') {
        width: initial;
        justify-self: end;
        grid-template-columns: repeat(2, 394px);
      }
      &__option {
        border-radius: 20px;
        color: $color-white;
        padding: 32px 0;
        @extend %bg-gradient;
        @include media('>=large') {
          padding: 32px 50px;
        }
        h4 {
          text-align: center;
          font-weight: 500;
          margin-bottom: 13px;
        }
        h3 {
          font-size: clamp(1em, calc(1em + 3vw), 3.75em);
          text-align: center;
          @include media('>=large') {
            text-align: initial;
          }
        }
        &__price {
          max-width: 85%;
          margin: 28px auto 37px;
          display: block;
          @include media('>=large') {
            max-width: 100%;
          }
        }
        ol,
        ul {
          list-style: none;
          li {
            text-align: center;
            justify-content: center;
            @include media('>=large') {
              text-align: left;
              justify-content: start;
            }
          }
        }
        ul {
          li {
            display: flex;
            align-items: center;
            margin-bottom: 16px;
            font-weight: 500;
            img {
              margin-right: 10px;
            }
          }
        }
        a {
          width: 90%;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 28px;
          margin: 34px auto 27px;
          @include media('>=large') {
            width: 100%;
          }
        }
        &__colection {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 26px;
          img {
            margin-right: 6px;
          }
        }
        &__small {
          text-align: center;
          font-weight: 700;
          font-size: 10px;
          line-height: 15px;
        }
        ol {
          margin-top: 25px;
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: 0 15px;
          align-items: center;
          @include media('>=large') {
            grid-template-columns: repeat(2, max-content);
          }
          li {
            margin-bottom: 5px;
            i {
              margin-right: 6px;
            }
          }
        }
      }
    }
  }

  &__why {
    padding: 50px 0;
    @include media('>=large') {
      background: url('../assets/bg_why.jpg') no-repeat right top;
      background-size: auto 100%;
      padding: 131px 0;
    }
    &__wrapper {
      max-width: 500px;
      @include media('>=large') {
        margin-left: 10%;
      }
    }
    h2 {
      @extend %text-gradient;
      font-size: clamp(1em, calc(1em + 3vw), 2.8125em);
      line-height: 1.125;
      text-transform: uppercase;
      margin-bottom: 57px;
      text-align: center;
      @include media('>=large') {
        text-align: left;
      }
      span {
        display: block;
      }
    }
    ul {
      list-style: none;
      margin-bottom: 56px;
      li {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        font-size: clamp(1em, calc(1em + 3vw), 1.5625em);
        font-weight: 500;
        i {
          margin-right: 20px;
          color: $color-primary;
          @include media('>=large') {
            margin-right: 10px;
          }
        }
      }
    }
    a {
      margin-bottom: 10px;
      height: 56px;
      border-radius: 29px;
      &:first-child {
        padding: 0 43px;
      }
      &:last-child {
        padding: 0 30px;
      }
    }
  }

  &__play {
    background: url('../assets/bg_play.jpg') no-repeat center top;
    background-size: cover;
    padding: 181px 0;
    color: $color-white;
    &__wrapper {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 7vw;
      align-items: center;
      @include media('>=large') {
        grid-template-columns: max-content max-content;
        justify-content: center;
      }
    }
    &__brands {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 18px;
      grid-row: 2;
      @include media('>=large') {
        grid-row: 1;
        grid-template-columns: repeat(2, 291px);
      }
      figure {
        width: 100%;
        height: 215px;
        background-color: $color-white;
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    &__content {
      h2 {
        font-size: clamp(1em, calc(1em + 3vw), 2.8125em);
        line-height: 1.125;
        text-transform: uppercase;
        margin-bottom: 38px;
      }
      p {
        font-weight: 500;
        max-width: 410px;
        margin-bottom: 38px;
      }
      ul {
        list-style: none;
        margin-bottom: 36px;
        li {
          margin-bottom: 16px;
          i {
            margin-right: 6px;
          }
        }
      }
      a {
        margin-bottom: 10px;
        height: 56px;
        border-radius: 29px;
        &:first-child {
          padding: 0 43px;
        }
        &:last-child {
          padding: 0 30px;
        }
      }
    }
  }

  &__contact {
    background: url('../assets/bg_plans.jpg') no-repeat center top;
    background-size: cover;
    padding-top: 40px;
    &__wrapper {
      @include media('>=large') {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 6vw;
        align-items: center;
      }
    }
    img {
      display: none;
      @include media('>=large') {
        display: block;
      }
    }
    &__content {
      h2 {
        @extend %text-gradient;
        font-size: clamp(1em, calc(1em + 3vw), 2.8125em);
        font-weight: 700;
        margin-bottom: 33px;
      }
      p {
        margin-bottom: 45px;
        span {
          @include media('>=large') {
            display: block;
          }
        }
      }
      a {
        margin-bottom: 10px;
        height: 56px;
        border-radius: 29px;
        &:first-child {
          padding: 0 43px;
        }
        &:last-child {
          padding: 0 30px;
        }
      }
    }
  }
}
</style>
