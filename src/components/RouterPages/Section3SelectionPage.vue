<template>
  <b-container class="section-3-selection-page">
    <b-row class="mt-2 mb-2">
      <b-col>
        <h2>Questions:</h2>
      </b-col>
    </b-row>
    <b-row class="mt-2 mb-2">
      <b-col>
        <b-button block variant="primary" size="lg" :disabled="isQuestionUsed('history100')" @click="selectQuestion('history100')">History 100</b-button>
        <b-button block variant="primary" size="lg" :disabled="isQuestionUsed('history200')" @click="selectQuestion('history200')">History 200</b-button>
        <b-button block variant="primary" size="lg" :disabled="isQuestionUsed('history300')" @click="selectQuestion('history300')">History 300</b-button>
      </b-col>
      <b-col>
        <b-button block variant="success" size="lg" :disabled="isQuestionUsed('biology100')" @click="selectQuestion('biology100')">Biology 100</b-button>
        <b-button block variant="success" size="lg" :disabled="isQuestionUsed('biology200')" @click="selectQuestion('biology200')">Biology 200</b-button>
        <b-button block variant="success" size="lg" :disabled="isQuestionUsed('biology300')" @click="selectQuestion('biology300')">Biology 300</b-button>
      </b-col>
      <b-col>
        <b-button block variant="warning" size="lg" :disabled="isQuestionUsed('physics100')" @click="selectQuestion('physics100')">Physics 100</b-button>
        <b-button block variant="warning" size="lg" :disabled="isQuestionUsed('physics200')" @click="selectQuestion('physics200')">Physics 200</b-button>
        <b-button block variant="warning" size="lg" :disabled="isQuestionUsed('physics300')" @click="selectQuestion('physics300')">Physics 300</b-button>
      </b-col>
      <b-col>
        <b-button block variant="light" size="lg" :disabled="isQuestionUsed('chemistry100')" @click="selectQuestion('chemistry100')">Chemistry 100</b-button>
        <b-button block variant="light" size="lg" :disabled="isQuestionUsed('chemistry200')" @click="selectQuestion('chemistry200')">Chemistry 200</b-button>
        <b-button block variant="light" size="lg" :disabled="isQuestionUsed('chemistry300')" @click="selectQuestion('chemistry300')">Chemistry 300</b-button>
      </b-col>
    </b-row>
    <b-row class="mt-2 mb-2">
      <b-col>
        <b-button block variant="dark" size="lg" :disabled="isQuestionUsed('politics100')" @click="selectQuestion('politics100')">Politics 100</b-button>
        <b-button block variant="dark" size="lg" :disabled="isQuestionUsed('politics200')" @click="selectQuestion('politics200')">Politics 200</b-button>
        <b-button block variant="dark" size="lg" :disabled="isQuestionUsed('politics300')" @click="selectQuestion('politics300')">Politics 300</b-button>
      </b-col>
      <b-col>
        <b-button block variant="danger" size="lg" :disabled="isQuestionUsed('geology100')" @click="selectQuestion('geology100')">Geology 100</b-button>
        <b-button block variant="danger" size="lg" :disabled="isQuestionUsed('geology200')" @click="selectQuestion('geology200')">Geology 200</b-button>
        <b-button block variant="danger" size="lg" :disabled="isQuestionUsed('geology300')" @click="selectQuestion('geology300')">Geology 300</b-button>
      </b-col>
      <b-col>
        <b-button block variant="info" size="lg" :disabled="isQuestionUsed('economy100')" @click="selectQuestion('economy100')">Economy 100</b-button>
        <b-button block variant="info" size="lg" :disabled="isQuestionUsed('economy200')" @click="selectQuestion('economy200')">Economy 200</b-button>
        <b-button block variant="info" size="lg" :disabled="isQuestionUsed('economy300')" @click="selectQuestion('economy300')">Economy 300</b-button>
      </b-col>
      <b-col>
        <b-button block variant="secondary" size="lg" :disabled="isQuestionUsed('business100')" @click="selectQuestion('business100')">Business 100</b-button>
        <b-button block variant="secondary" size="lg" :disabled="isQuestionUsed('business200')" @click="selectQuestion('business200')">Business 200</b-button>
        <b-button block variant="secondary" size="lg" :disabled="isQuestionUsed('business300')" @click="selectQuestion('business300')">Business 300</b-button>
      </b-col>
    </b-row>
    <b-row class="mt-4 pt-2 links-row">
      <b-col>
        <router-link to="/section-3">Back To Section Intro</router-link>
      </b-col>
      <b-col class="text-right">
        <router-link to="/section-4">Go to Section 4</router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Section3SelectionPage',
  methods: {
    selectQuestion(qid) {
      this.$router.push(`/section-3/${qid}`);
    },
    isQuestionUsed(qid) {
      const usedQuestions = this.$store.state.game.usedQuestions;
      return usedQuestions.indexOf(qid) > -1;
    }
  }
}
</script>

<style scoped>

</style>
