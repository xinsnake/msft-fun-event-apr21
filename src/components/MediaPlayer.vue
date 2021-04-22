<template>
  <b-container class="media-player">
    <b-row>
      <b-col>
        <video ref="audioPlayer" class="video-js"></video>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import videojs from 'video.js';
import _ from 'lodash';

export default {
  name: 'MediaPlayer',
  data() {
    return {
      audioOptions: {},
      player: null,
      selectionSources: [
        {src: require("@/assets/tracks/bg-s-1.mp3"), type: "audio/mp3"},
        {src: require("@/assets/tracks/bg-s-2.mp3"), type: "audio/mp3"},
        {src: require("@/assets/tracks/bg-s-3.mp3"), type: "audio/mp3"},
        {src: require("@/assets/tracks/bg-s-4.mp3"), type: "audio/mp3"},
        {src: require("@/assets/tracks/bg-s-5.mp3"), type: "audio/mp3"},
        {src: require("@/assets/tracks/bg-s-6.mp3"), type: "audio/mp3"},
        {src: require("@/assets/tracks/bg-s-7.mp3"), type: "audio/mp3"},
      ],
      questionSources: [
        {src: require("@/assets/tracks/bg-q-1.mp3"), type: "audio/mp3"},
        {src: require("@/assets/tracks/bg-q-2.mp3"), type: "audio/mp3"},
        {src: require("@/assets/tracks/bg-q-3.mp3"), type: "audio/mp3"},
      ]
    };
  },
  watch: {
    $route(to, from) {
      if (!this.player) {
        return;
      }
      this.playByPage(to.path, from.path);
    }
  },
  mounted() {
    const onPlayerReady = () => {
      this.playByPage();
    };
    this.player = videojs(this.$refs.audioPlayer, this.audioOptions, onPlayerReady);
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  },
  methods: {
    // https://stackoverflow.com/questions/7451508/html5-audio-playback-with-fade-in-and-fade-out
    swing(p) {
      return 0.5 - Math.cos(p * Math.PI) / 2;
    },
    async adjustVolume(newVolume, { duration = 1000, easing = this.swing, interval = 20 } = {}) {
      if (!this.player) {
        return;
      }
      const originalVolume = this.player.volume();
      const delta = newVolume - originalVolume;
      if (!delta || !duration || !easing || !interval) {
        this.player.volume(newVolume);
        return Promise.resolve();
      }
      const ticks = Math.floor(duration / interval);
      let tick = 1;
      return new Promise(resolve => {
        const timer = setInterval(() => {
          this.player.volume(originalVolume + (
            easing(tick / ticks) * delta
          ));
          if (++tick === ticks + 1) {
            clearInterval(timer);
            resolve();
          }
        }, interval);
      });
    },
    playByPage(to) {
      if (!to) {
        to = this.$route.path;
      }
      this.player.pause();
      if (to === '/') {
        this.playTitle();
      } else if (to === '/intro' || to.match(/\/section-\d$/)) {
        this.playIntro();
      } else if (to.endsWith('selection')) {
        this.playSelection();
      } else if (to.match(/\/section-\d\/.+\d+/)) {
        this.playQuestion();
      } else if (to === '/thank-you') {
        this.playThankyou();
      }
    },
    async playTitle() {
      await this.adjustVolume(1, {duration: 1000});
      this.player.loop(true);
      this.player.src({src: require("@/assets/tracks/bg-title.mp3"), type: "audio/mp3"});
      this.player.load();
      this.player.play();
      await this.adjustVolume(.25, {duration: 15000});
    },
    async playIntro() {
      await this.adjustVolume(1, {duration: 1000});
      this.player.loop(true);
      this.player.src({src: require("@/assets/tracks/bg-intro.mp3"), type: "audio/mp3"});
      this.player.load();
      this.player.play();
      await this.adjustVolume(.25, {duration: 10000});
    },
    async playSelection() {
      await this.adjustVolume(1, {duration: 1000});
      this.player.loop(true);
      this.player.src(this.selectionSources[_.random(0, this.selectionSources.length - 1, false)]);
      this.player.load();
      this.player.play();
      await this.adjustVolume(.25, {duration: 5000});
    },
    async playQuestion() {
      await this.adjustVolume(1, {duration: 1000});
      this.player.loop(false);
      this.player.src(this.questionSources[_.random(0, this.questionSources.length - 1, false)]);
      this.player.load();
      this.player.play();
      await this.adjustVolume(.25, {duration: 8000});
    },
    async playThankyou() {
      await this.adjustVolume(1, {duration: 1000});
      this.player.loop(true);
      this.player.src({src: require("@/assets/tracks/bg-thank-you.mp3"), type: "audio/mp3"});
      this.player.load();
      this.player.play();
      await this.adjustVolume(.25, {duration: 15000});
    },
  }
}
</script>

<style scoped>
.media-player {
  position: fixed;
  left: 100%;
  top: 10px;
  width: 10px;
  height: 10px;
  overflow: hidden;
}
</style>
