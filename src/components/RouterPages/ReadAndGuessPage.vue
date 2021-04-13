<template>
  <b-container class="read-and-guess-page">
    <b-row>
      <b-col>
        <h4>Guess an Azure Service...</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <ol type="1">
          <li v-for="i in [1, 2, 3, 4, 5, 6]"
              :key="i">
            <span v-if="currentStep >= i">{{q[i]}}</span>
          </li>
        </ol>
        <b-button @click="nextStep" v-if="currentStep < 6">Next</b-button>
        <h5 v-if="revealAnswerOn">{{q.answer}}</h5>
      </b-col>
    </b-row>
    <b-row>
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

</style>
