<template>
  <b-container class="read-and-guess-page">
    <b-row class="text-center mt-4 mb-4">
      <b-col>
        <h3>Guess this Azure Service...</h3>
      </b-col>
    </b-row>
    <b-row class="text-center mb-5">
      <b-col>
        <ol type="i">
          <li v-for="i in [1, 2, 3, 4, 5, 6]"
              :key="i">
            <span v-if="currentStep >= i">{{q[i]}}</span>
          </li>
        </ol>
        <div>
          <b-button @click="nextStep" v-if="currentStep < 6">Next</b-button>
          <h5 class="mt-4" v-if="revealAnswerOn">{{q.answer}}</h5>
        </div>
      </b-col>
    </b-row>
    <b-row class="mt-4 pt-2 links-row">
      <b-col>
        <a @click="router.go(-1)" href="#">Back</a>
      </b-col>
      <b-col class="text-right">
        <b-button v-if="!revealAnswerOn" variant="warning" @click="revealAnswer">Reveal</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'ReadAndGuessPage',
  data: function () {
    return {
      q: null,
      currentStep: 0,
      revealAnswerOn: false,
      router: this.$router,
    };
  },
  mounted() {
    const qid = this.$route.params.qid || '';
    const q = this.$store.state.readAndGuesses[qid];
    this.$set(this, 'q', q);
    this.$store.commit("game/addUsedQuestion", qid)
  },
  methods: {
    nextStep() {
      this.$set(this, 'currentStep', this.currentStep + 1);
    },
    revealAnswer() {
      this.$set(this, 'revealAnswerOn', true);
    }
  }
}
</script>

<style scoped>
ol {
  display: inline-grid !important;
  padding: 0;
  font-size: 1.5rem;
}
ol > li {
  cursor: pointer;
}
</style>
