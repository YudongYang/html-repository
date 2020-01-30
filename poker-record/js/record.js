class Player {
  constructor(name, score) {
    this.name = name
    this.score = score
  }

  change(score) {
    this.score = this.score + score
  }

  win(score) {
    this.score = this.score + score
  }
  
  lose(score) {
    this.score = this.score - score
  }
}

class Record {
  constructor(players) {
    this.players = {}
    for(let player of players) {
      this.players[player.name] = player
    }
    this.recordList = []
  }
  addPlayer() {}
  addRecord(record) {
    let newRecord = {}
    let names = Object.keys(this.players)
    for(let name of names) {
      newRecord[name] = Number(record[name] || 0)
      this.players[name].change(newRecord[name])
    }
    this.recordList.push(newRecord)
  }
}
