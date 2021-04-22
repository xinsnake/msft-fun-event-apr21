<template>
  <b-container class="scores">
    <b-row class="mb-4 mt-4" v-if="!isTitlePage">
      <b-col class="text-right">
        <h2>
          <b-badge :variant="getTeamVariant('A')" @click="switchTeam('A')">Team A</b-badge> &nbsp;
          <b-badge :variant="getVariant('A')" @click="updatePoint($event, 'A')">{{ teamAPoint }}</b-badge>
        </h2>
      </b-col>
      <b-col class="text-left">
        <h2>
          <b-badge :variant="getVariant('B')" @click="updatePoint($event, 'B')">{{ teamBPoint }}</b-badge> &nbsp;
          <b-badge :variant="getTeamVariant('B')" @click="switchTeam('B')">Team B</b-badge> &nbsp;
        </h2>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Scores',
  computed: {
    teamAPoint() {
      return this.$store.state.game.teamAPoint
    },
    teamBPoint() {
      return this.$store.state.game.teamBPoint
    },
    isTitlePage() {
      return this.$route.path === '/'
    }
  },
  methods: {
    getTeamVariant(teamName) {
      return this.$store.state.game.currentTeam === teamName ? 'warning' : 'light';
    },
    getVariant(teamName) {
      if (this.teamAPoint === this.teamBPoint) {
        return 'primary';
      }
      if (teamName === 'A') {
        if (this.teamAPoint > this.teamBPoint) {
          return 'success';
        } else {
          return 'danger';
        }
      } else if (teamName === 'B') {
        if (this.teamAPoint > this.teamBPoint) {
          return 'danger';
        } else {
          return 'success';
        }
      }
    },
    updatePoint(event, teamName) {
      const isCtrlHeld = event.ctrlKey;
      if (!isCtrlHeld) {
        this.$store.commit('game/addPoint', {teamName, amount: 50});
      } else {
        this.$store.commit('game/subtractPoint', {teamName, amount: 50});
      }
    },
    switchTeam(teamName) {
      this.$store.commit('game/changeTeam', teamName);
    }
  }
}
</script>

<style scoped>
.scores {
  border-bottom: 3px solid rgba(255, 255, 255, .5);
  min-height: 75px;
}
.badge {
  cursor: pointer;
  user-select: none;
}
</style>
