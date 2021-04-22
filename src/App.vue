<template>
  <div id="app" class="app">
    <b-container>
      <b-row>
        <b-col>
          <MediaPlayer/>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <Scores/>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col>
          <ContentDeck/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Scores from './components/Scores'
import MediaPlayer from "@/components/MediaPlayer";
import ContentDeck from "@/components/ContentDeck";

export default {
  name: 'App',
  components: {
    ContentDeck,
    MediaPlayer,
    Scores
  }
}
</script>

<style>
body {
  font-family: 'Lato', sans-serif !important;
  font-size: 1.2rem !important;
  color: #e2e2e2 !important;
}
h1, h2, h3, h4, h5, h6, a, button {
  font-family: 'Patua One', cursive !important;
}
.btn.disabled, .btn:disabled {
  opacity: 0.25 !important;
}
a {
  color: #e2e2e2 !important;
}
a:hover {
  text-decoration: none !important;
}
.links-row {
  border-top: 3px solid rgba(255, 255, 255, .5);
}
strong {
  color: #ffc107;
}
.app {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-image: url('~@/assets/images/dark-honeycomb.png') !important;
}

</style>
