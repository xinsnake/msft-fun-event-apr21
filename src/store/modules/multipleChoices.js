const state = () => ({
  // section 1
  software100: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  },
  software200: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  },
  software300: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  },
  security100: {
    points: 100,
    question: 'To avoid ______, user input should not be put directly into a database.',
    selections: {
      1: 'Cross-site scripting',
      2: 'Buffer overflow',
      3: 'SQL injection',
      4: 'Denial of service attack'
    },
    answer: 3
  },
  security200: {
    points: 200,
    question: 'When you notice your computer is affected by ransomware and it is actively encrypting your data, what should you do?',
    selections: {
      1: 'Force shutdown the computer',
      2: 'Run malware/virus scan in Windows Security',
      3: 'Unplug the network cable/disconnect Wifi',
      4: 'Do nothing and wait for it to finish'
    },
    answer: 1
  },
  security300: {
    points: 300,
    question: 'Theoretically, which encrpytion type below offers the strongest level of protection against brute force attack?',
    selections: {
      1: 'Digital Signature Algorithm (DSA) 2048-bit key',
      2: 'Rivest Shamir Adleman (RSA) 2048-bit key',
      3: 'Elliptic Curve (ECC) 256-bit key',
      4: 'Advanced Encryption Standard (AES) 256-bit key'
    },
    answer: 4
  },
  database100: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  },
  database200: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  },
  database300: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  },
  architecture100: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  },
  architecture200: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  },
  architecture300: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  },
  linux100: {
    points: 100,
    question: 'Which variable in Bash shell prints the exit status of the most recently executed foreground application.',
    selections: {
      1: '$#',
      2: '$!',
      3: '$@',
      4: '$?'
    },
    answer: 4
  },
  linux200: {
    points: 200,
    question: 'You are installing an application manually in Linux by unzipping a downloaded package, where do you think could be a good place to put it so you can share it with everyone using the computer?',
    selections: {
      1: '/',
      2: '/opt',
      3: '/etc',
      4: '/home/jacob'
    },
    answer: 3
  },
  linux300: {
    points: 300,
    question: 'Which of the following statement is "FALSE" for /dev/random and /dev/urandom on a modern Linux system?',
    selections: {
      1: 'You can use both /dev/random and /dev/urandom for cryptographic applications',
      2: 'Both /dev/random and /dev/urandom provides as many entropies as you like without blocking',
      3: 'Both /dev/random and /dev/urandom gets the randomness from the same pseudorandom number generator',
      4: 'Entropy on both /dev/random and /dev/urandom may be lower when the system is just booted.'
    },
    answer: 2
  },
  web100: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  },
  web200: {
    points: 200,
    question: 'What does URL stands for?',
    selections: {
      1: 'Universal Resource Link',
      2: 'Universal Resource Locator',
      3: 'Unique Resource Link',
      4: 'Unique Resource Locator'
    },
    answer: 2
  },
  web300: {
    points: 300,
    question: 'Which statement below is "TRUE" about WebSocket technology?',
    selections: {
      1: 'WebSocket protocol is built on top of HTTP protocol, so proxy and firewall changes are normally not required.',
      2: 'Like HTTP2 protocol, WebSocket can only be used with Transport Layer Security enabled.',
      3: 'WebSocket is a half-duplex communication protocal and two TCP connections is required for full-duplex communication.',
      4: 'WebSocket is event-driven so it requires considerable amount of re-architecture work to convert a RESTful API server to support WebSocket.'
    },
    answer: 4
  },
  office100: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  },
  office200: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  },
  office300: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  },
  theory100: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  },
  theory200: {
    points: 200,
    question: 'In which year was Microsoft Windows 10 first released?',
    selections: {
      1: '2015',
      2: '2016',
      3: '2017',
      4: '2018'
    },
    answer: 1
  },
  theory300: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  },
  // section 4
  history100: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  },
  history200: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  },
  history300: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  },
  biology100: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  },
  biology200: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  },
  biology300: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  },
  physics100: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  },
  physics200: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  },
  physics300: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  },
  chemistry100: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  },
  chemistry200: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  },
  chemistry300: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  },
  politics100: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  },
  politics200: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  },
  politics300: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  },
  geology100: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  },
  geology200: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  },
  geology300: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  },
  economy100: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  },
  economy200: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  },
  economy300: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  },
  business100: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  },
  business200: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  },
  business300: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  },
  // section 4
  english1: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  },
  english2: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  },
  english3: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  },
  english4: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  },
  english5: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  },
  english6: {
    points: 100,
    question: 'This is a sample question',
    selections: {
      1: 'answer 1',
      2: 'answer 2',
      3: 'answer 3',
      4: 'answer 4'
    },
    answer: 2
  }
})

const getters = {}

const actions = {}

const mutations = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
