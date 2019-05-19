const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', line => {
  run(line)
})

const number = [
  [0, 8],
  [0, 1, 3, 4, 7, 8, 9],
  [2, 8],
  [3, 8, 9],
  [4, 8, 9],
  [5, 6, 8, 9],
  [6, 8],
  [0, 3, 7, 8, 9],
  [8],
  [8, 9],
]
const getRank = n => {
  switch (n) {
    case 8:
      return 5;
    case 0: case 2: case 6: case 9:
      return 4;
    case 3: case 4:
      return 3;
    case 5:
      return 2;
    case 7:
      return 1;
    case 1:
      return 0;
  }
}

function run (line) {
  let input = line.split(' ')
  let length = input.length

  let hours = input.map(e => {
    return e.split(':')[0]
  })
  let minutes = input.map(e => {
    return e.split(':')[1]
  })

  let list = getContinuous(minutes)
  
  minutes.forEach((e, i) => {
    let m = number[Number(e[0])]
    
  })
  
}

function getContinuous(minutes) {
  let smallest = {
    rank: -1,
    index: -1
  }

  let m = minutes.map((e, i) => {
    if (smallest.rank <= getRank(Number(e))) {
      smallest = {
        rank: getRank(Number(e)),
        index: i
      }
    }

    return number[Number(e[1])]
  })
  
  let list = []
  check: for (let e of m[smallest.index]) {
    let start = e - smallest.index
    if (start < 0) start = 10 + start % 10
    
    for (let i = 0; i < m.length; i++) {
      if (!m[i].includes((start + i) % 10))
        continue check
    }

    list.push(start)
  }

  return list
}

run('71:57 71:57 71:57 71:57 71:01 71:02 71:03 71:04 71:05 71:05 71:07 71:07 71:07 71:00')
