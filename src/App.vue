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
  background-color: #333333 !important;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='126' height='84' viewBox='0 0 126 84'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.27'%3E%3Cpath d='M126 83v1H0v-2h40V42H0v-2h40V0h2v40h40V0h2v40h40V0h2v83zm-2-1V42H84v40h40zM82 42H42v40h40V42zm-50-6a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm96 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm-42 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm30-12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM20 54a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm12 24a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM8 54a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm24 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM8 78a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm12 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm54 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM50 54a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm24 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM50 78a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm54-12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm12 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM92 54a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm24 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM92 78a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm24-42a4 4 0 1 1 0-8 4 4 0 0 1 0 8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
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
}

</style>
