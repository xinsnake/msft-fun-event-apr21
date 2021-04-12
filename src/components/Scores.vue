<template>
  <b-container class="scores">
    <b-row>
      <b-col class="text-right">
        <h2>Team A <b-badge :variant="getVariant('A')" @click="updatePoint($event, 'A')">{{teamAPoint}}</b-badge></h2>
      </b-col>
      <b-col class="text-left">
        <h2><b-badge :variant="getVariant('B')" @click="updatePoint($event, 'B')">{{teamBPoint}}</b-badge> Team B</h2>
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
  },
  methods: {
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
    }
  }
}
</script>

<style scoped>
.badge {
  cursor: pointer;
  user-select: none;
}
</style>
