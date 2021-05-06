<template>
  <b-container class="single-question-page" v-if="q">
    <b-row class="text-center mt-4 mb-4">
      <b-col>
        <h3>{{q.question}}</h3>
      </b-col>
    </b-row>
    <b-row class="text-center mb-5">
      <b-col style="padding: 0 100px">
        <ol type="A" class="text-left">
          <li v-for="i in [1, 2, 3, 4]"
              :key="i"
              @click="pendingAnswer(i)"
              :class="{
                selected: pendingSelection === i,
                right: i === q.answer && (checkAnswerOn && pendingSelection === i || revealAnswerOn),
                wrong: i !== q.answer && checkAnswerOn && pendingSelection === i
              }">
            {{q.selections[i]}}
          </li>
        </ol>
      </b-col>
    </b-row>
    <b-row class="mt-4 pt-2 links-row">
      <b-col>
        <a @click="router.go(-1)" href="#">Back</a>
      </b-col>
      <b-col class="text-right">
        <b-button v-if="checkAnswerOn && !revealAnswerOn" variant="warning" @click="revealAnswer">Reveal</b-button>
        <b-button v-if="!checkAnswerOn && pendingSelection" variant="success" @click="checkAnswer">Check</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {EventBus} from "@/bus";

export default {
  name: 'SingleQuestionPage',
  data: function () {
    return {
      q: null,
      pendingSelection: 0,
      checkAnswerOn: false,
      revealAnswerOn: false,
      router: this.$router,
    };
  },
  mounted() {
    const qid = this.$route.params.qid || '';
    const q = this.$store.state.multipleChoices[qid];
    this.$set(this, 'q', q);
    this.$store.commit("game/addUsedQuestion", qid)
  },
  methods: {
    pendingAnswer(sid) {
      if (this.revealAnswerOn) {
        return;
      }
      this.$set(this, 'checkAnswerOn', false);
      this.$set(this, 'pendingSelection', sid);
    },
    checkAnswer() {
      this.$set(this, 'checkAnswerOn', true);
      if (this.q.answer === this.pendingSelection) {
        EventBus.$emit('reveal-answer', true);
        this.revealAnswer();
      } else {
        EventBus.$emit('reveal-answer', false);
      }
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
ol > li.selected {
  color: #ffc107;
}
ol > li.right {
  color: #28a745;
}
ol > li.wrong {
  color: #dc3545;
}
</style>
