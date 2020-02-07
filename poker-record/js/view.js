var vm = new Vue({
  el: '#app',
  data() {
    return {
      players: [{name: '高脚七', score: 100}],
      records: null,
      running: false,
      newRecord: {}
    }
  },
  mounted() {
  },
  methods: {
    addPlayer() {
      this.players.push({name: '...', score: 100})
    },
    recordStart() {
      this.running = true
      let players = []
      for(let p of this.players) {
        let player = new Player(p.name, Number(p.score))
        players.push(player)
      }
      this.records = new Record(players)
    },
    addRecord() {
      this.records.addRecord(this.newRecord)
      this.newRecord = {}
    }
  },
  computed: {
  }
})