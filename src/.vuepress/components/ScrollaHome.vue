<script setup>
import { RouteLink, withBase } from "vuepress/client";

const playUrl =
  "https://play.google.com/store/apps/details?id=mwp.kuchienkz.scrolla_wallpaper";

const wallpaper = withBase("/assets/images/cover3.jpg");

const shortcuts = [
  { icon: "rocket", title: "Quick Start", text: "Set up in five minutes", link: "/guides/quick-start.html" },
  { icon: "book-open", title: "All guides", text: "Every feature, step by step", link: "/guides/" },
  { icon: "bolt", title: "What's new", text: "3.0 Beta changes", link: "/changelogs.html" },
  { icon: "life-ring", title: "Help & FAQ", text: "Fixes and bug reports", link: "/guides/troubleshooting.html" },
];

const features = [
  { icon: "arrows-left-right", title: "Smooth scrolling", text: "Scroll any image in any direction, with enter and exit animations.", link: "/guides/animations.html" },
  { icon: "film", title: "Images, video, 360°", text: "GIFs, videos with sound and 3D panoramas with gyroscope control.", link: "/guides/wallpaper-settings.html" },
  { icon: "clock", title: "Scenes", text: "A clock, music bars and shapes on top of your wallpaper.", link: "/guides/scenes.html" },
  { icon: "list-ul", title: "Playlists", text: "Shuffle, change on a timer or on unlock. Dynamic playlists fill themselves.", link: "/guides/playlists.html" },
  { icon: "mobile-screen", title: "Home & lock profiles", text: "A different setup for each screen.", link: "/guides/profiles.html" },
  { icon: "wand-magic-sparkles", title: "Tasks", text: "Switch by time, day, Wi-Fi, battery and more.", link: "/guides/tasks.html" },
  { icon: "table-cells-large", title: "Widget & tile", text: "Next, pause and save from your home screen.", link: "/guides/home-screen-widget.html" },
  { icon: "palette", title: "Themes", text: "Color the app your way, per profile.", link: "/guides/themes.html" },
  { icon: "tags", title: "Library & tags", text: "Import with tags, find duplicates, search and filter.", link: "/guides/managing-wallpapers.html" },
  { icon: "cloud", title: "Drive & backup", text: "Keep big collections in Google Drive. Back up to the cloud or a ZIP.", link: "/guides/cloud-storage.html" },
];
</script>

<template>
  <div class="sh">
    <section class="sh-hero">
      <div class="sh-hero-text">
        <span class="sh-pill"><span class="sh-dot" aria-hidden="true" />3.0 Beta on Google Play</span>
        <h1 class="sh-title">Don't crop it.<br /><span class="sh-mark">Scroll it.</span></h1>
        <p class="sh-lead">
          Scrolla Wallpaper is a live wallpaper app for Android. It slowly
          scrolls across any picture, of any size, so you always see the whole
          image.
        </p>
        <div class="sh-actions">
          <a class="sh-btn sh-btn-primary" :href="playUrl" target="_blank" rel="noopener noreferrer">
            <VPIcon icon="fab fa-google-play" />Get it on Google Play
          </a>
          <RouteLink class="sh-btn sh-btn-ghost" to="/guides/quick-start.html">
            <VPIcon icon="rocket" />Quick Start
          </RouteLink>
        </div>
      </div>

      <div class="sh-phone" aria-hidden="true">
        <div class="sh-phone-screen" :style="{ backgroundImage: `url(${wallpaper})` }">
          <div class="sh-phone-clock">09:41</div>
          <div class="sh-phone-bars">
            <i v-for="n in 9" :key="n" :style="{ animationDelay: `${n * -0.17}s` }" />
          </div>
        </div>
      </div>
    </section>

    <nav class="sh-shortcuts" aria-label="Start here">
      <RouteLink v-for="item in shortcuts" :key="item.link" class="sh-shortcut" :to="item.link">
        <span class="sh-shortcut-icon"><VPIcon :icon="item.icon" /></span>
        <span class="sh-shortcut-title">{{ item.title }}</span>
        <span class="sh-shortcut-text">{{ item.text }}</span>
      </RouteLink>
    </nav>

    <section class="sh-section" aria-labelledby="sh-features">
      <h2 id="sh-features" class="sh-h2">Everything your wallpaper can do</h2>
      <p class="sh-sub">Tap a card to open its guide.</p>
      <div class="sh-grid">
        <RouteLink v-for="item in features" :key="item.link" class="sh-card" :to="item.link">
          <span class="sh-card-icon"><VPIcon :icon="item.icon" /></span>
          <span class="sh-card-body">
            <span class="sh-card-title">{{ item.title }}</span>
            <span class="sh-card-text">{{ item.text }}</span>
          </span>
          <VPIcon class="sh-card-arrow" icon="chevron-right" />
        </RouteLink>
      </div>
    </section>
  </div>
</template>
