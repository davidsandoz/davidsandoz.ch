<template>
  <section class="c-home__intro">
    <img
      class="c-home__avatar"
      src="/images/avatar.jpg"
      :alt="$t('home.avatarAlt')"
      srcset="/images/avatar@2x.jpg 2x"
    />
    <img
      class="c-home__avatar-full"
      src="/images/avatar_full.jpg"
      :alt="$t('home.avatarAlt')"
      srcset="/images/avatar_full@2x.jpg 2x"
    />
    <p class="c-home__intro-text">
      {{ $t("home.intro.softwareEngineer") }}<br />
      <NuxtLink to="https://epfl.ch" target="_blank">EPFL</NuxtLink> Alumnus (IN '16)<br />
      {{ $t("home.intro.tchoukball") }}<br />
      {{ $t("home.intro.photography") }}
    </p>
  </section>

  <section class="c-home__contact">
    <a href="mailto:contact@davidsandoz.ch" class="c-home__contact-link">{{ $t("home.getInTouch") }}</a>
  </section>
</template>

<style scoped>
.c-home__intro {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.c-home__avatar {
  width: 50vw;
  max-width: 200px;
  border-radius: 0 50% 0 50%;
  flex-shrink: 0;
}

.c-home__avatar-full {
  display: none;
}

p.c-home__intro-text {
  text-align: center;
  margin-left: 5vw;
  margin-right: 0;
}

.c-home__contact {
  text-align: center;
  margin: 30px;
  margin-bottom: 0;
}

.c-home__contact-link {
  display: inline-block;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  color: var(--color-contact-link-foreground);
  background-color: var(--color-contact-link-background);
  width: 70vw;
  max-width: 250px;
  padding: 10px;
  border-radius: 0 22px 0 22px;
  border: 1px solid var(--color-contact-link-border);
  transition: color 0.25s, background-color 0.25s, border-color 0.25s;
}

.c-home__contact-link:hover {
  border-color: var(--color-contact-link-border-hover);
  color: var(--color-contact-link-foreground-hover);
  background-color: transparent;
}

@media (min-height: 840px), (orientation: portrait) {
  .c-home__intro {
    flex-direction: column;
  }
  p.c-home__intro-text {
    text-align: center;
    margin-left: 0;
  }
}

@media (min-height: 950px) and (min-width: 750px) {
  .c-home__avatar {
    display: none;
  }

  .c-home__avatar-full {
    display: block;
    max-width: 100%;
    max-height: calc(100vh - 700px);
    border-radius: 0 min(5vw, 30px) 0 min(5vw, 30px);
  }
}
</style>
