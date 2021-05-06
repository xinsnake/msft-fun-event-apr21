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
import {EventBus} from "@/bus";

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
      ],
      answerSources: [
        {src: require("@/assets/tracks/answer-correct.mp3"), type: "audio/mp3"},
        {src: require("@/assets/tracks/answer-incorrect.mp3"), type: "audio/mp3"},
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
    EventBus.$on('reveal-answer', (isCorrect) => {
      this.playAnswer(isCorrect);
    })
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  },
  methods: {
    timeout(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    // https://stackoverflow.com/questions/7451508/html5-audio-playback-with-fade-in-and-fade-out
    swing(p) {
      return 0.5 - Math.cos(p * Math.PI) / 2;
    },
    async adjustVolume(newVolume, { duration = 1000, easing = this.swing, interval = 200 } = {}) {
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
    async playTrack(src, loop = false, currentTime = 0, volume = 1) {
      this.player.volume(volume);
      this.player.loop(loop);
      this.player.src(src);
      this.player.load();
      this.player.currentTime(currentTime);
      this.player.play();
      await this.adjustVolume(.25, {duration: 5000});
    },
    async playTitle() {
      await this.playTrack({src: require("@/assets/tracks/bg-title.mp3"), type: "audio/mp3"}, true);
    },
    async playIntro() {
      await this.playTrack({src: require("@/assets/tracks/bg-intro.mp3"), type: "audio/mp3"}, true);
    },
    async playSelection() {
      await this.playTrack(this.selectionSources[_.random(0, this.selectionSources.length - 1, false)], true);
    },
    async playQuestion() {
      await this.playTrack(this.questionSources[_.random(0, this.questionSources.length - 1, false)], false);
    },
    async playThankyou() {
      await this.playTrack({src: require("@/assets/tracks/bg-thank-you.mp3"), type: "audio/mp3"}, true);
    },
    async playAnswer(isCorrect) {
      const src = this.player.src();
      const time = this.player.currentTime();

      this.player.pause();
      this.player.volume(1);
      this.player.loop(false);
      if (isCorrect) {
        this.player.src({src: require("@/assets/tracks/answer-correct.mp3"), type: "audio/mp3"});
      } else {
        this.player.src({src: require("@/assets/tracks/answer-incorrect.mp3"), type: "audio/mp3"});
      }
      this.player.load();
      this.player.play();

      if (!isCorrect) {
        await this.timeout(2000);
        await this.playTrack(src, false, time, .25);
      }
    }
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
