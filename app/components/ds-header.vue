<template>
  <header>
    <h1 class="u-visually-hidden">David Sandoz</h1>

    <div class="c-header__name">
      <object
        class="c-header__name-image"
        type="image/svg+xml"
        title="David Sandoz"
        data="/images/name-header.svg"
      ></object>
    </div>

    <a href="/" class="c-header__home-link" :title="$t('goHome')"></a>

    <div class="c-header__navigation-and-language-switcher">
      <div class="c-header__nav-and-lang-switcher-balancer"><!-- Empty div to balance out --></div>

      <DsNavigation class="c-header__navigation" />

      <DsLanguageSwitcher class="c-header__language-switcher" />
    </div>
  </header>
</template>

<style scoped>
.c-header__home-link,
.c-header__name {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: calc(100vw / 3.4);
  max-height: 300px;
  overflow: hidden;
}

.c-header__home-link {
  height: 200px;
}

.c-header__name-image {
  width: 560vw;
  transform: translateX(-13vw) translateY(-10vw);
  transform: translateX(calc(env(safe-area-inset-left) - 13vw)) translateY(-10vw);
}

.c-header__navigation-and-language-switcher {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: min(15vw, 90px) 10vw 0 10vw;
}

.c-header__nav-and-lang-switcher-balancer {
  flex-grow: 1;
  flex-basis: 0;
}

.c-header__language-switcher {
  display: block;
  text-align: center;
  flex-grow: 1;
  flex-basis: 0;
}

@media (min-width: 440px) {
  .c-header__navigation-and-language-switcher {
    margin-left: calc(env(safe-area-inset-left) + min(50px, 5vw));
    margin-right: max(env(safe-area-inset-right), 5vw);
  }
}

@media (min-width: 600px) {
  .c-header__name {
    height: 300px;
  }
  .c-header__name-image {
    height: 100%;
    width: auto;
    transform: translateX(-70px) translateY(-50px);
    transform: translateX(calc(env(safe-area-inset-left) - 70px)) translateY(-50px);
  }
}

@media (min-width: 600px) and (min-height: 600px) {
  .c-header__navigation-and-language-switcher {
    margin-left: calc(env(safe-area-inset-left) + 30px + 5vw);
    margin-right: max(env(safe-area-inset-right), calc(30px + 5vw));
    margin-top: 130px;
  }

  .c-header__name-image {
    transform: translateX(-40px) translateY(0px);
    transform: translateX(calc(env(safe-area-inset-left) - 40px)) translateY(0px);
  }
}

@media (min-width: 900px) {
  .c-header__navigation-and-language-switcher {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .c-header__language-switcher {
    text-align: right;
  }
}
</style>
