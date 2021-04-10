<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col>
          <MediaPlayer />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <Scores />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <ContentDeck />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Scores from './components/Scores.vue'
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

</style>
