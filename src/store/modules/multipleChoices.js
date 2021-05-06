const state = () => ({
  // section 1
  software100: {
    points: 100,
    question: 'When does one decides to re-engineer a product?',
    selections: {
      1: 'When tools to support restructuring are disabled',
      2: 'When system crashes frequently',
      3: 'When hardware or software support becomes obsolete',
      4: 'Subsystems of a larger system require few maintenance'
    },
    answer: 3
  },
  software200: {
    points: 200,
    question: 'Which design pattern defines one-to-many dependency among objects?',
    selections: {
      1: 'Singleton pattern',
      2: 'Facade pattern',
      3: 'Observer pattern',
      4: 'Factory method pattern'
    },
    answer: 3
  },
  software300: {
    points: 300,
    question: 'In JavaScript, what is the output of the following command: console.log([] == \'\', 0.1 + 0.2 == 0.3);',
    selections: {
      1: 'true true',
      2: 'true false',
      3: 'false false',
      4: 'false true'
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
    question: 'Theoretically, which encryption type below offers the strongest level of protection against brute force attack?',
    selections: {
      1: 'Digital Signature Algorithm (DSA) 2048-bit key',
      2: 'Rivest Shamir Adleman (RSA) 2048-bit key',
      3: 'Elliptic Curve (ECC) 256-bit key',
      4: 'Advanced Encryption Standard (AES) 256-bit key'
    },
    answer: 4
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
    question: 'Which of the image format below is fundamentally different from the other ones in the way they store information?',
    selections: {
      1: '.jpeg',
      2: '.png',
      3: '.gif',
      4: '.svg'
    },
    answer: 4
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
      3: 'WebSocket is a half-duplex communication protocol and two TCP connections is required for full-duplex communication.',
      4: 'WebSocket is event-driven so it requires considerable amount of re-architecture work to convert a RESTful API server to support WebSocket.'
    },
    answer: 4
  },
  office100: {
    points: 100,
    question: 'In Microsoft Word in Windows, when you press Shift-Enter, what is the name of the character it enters?',
    selections: {
      1: 'Paragraph Break',
      2: 'Carriage Return',
      3: 'Hard Return',
      4: 'Soft Return'
    },
    answer: 4
  },
  office200: {
    points: 200,
    question: 'Which presentation views below is "NOT" an option is the current version of Microsoft PowerPoint?',
    selections: {
      1: 'Outline View',
      2: 'Slide View',
      3: 'Notes Page',
      4: 'Reading View'
    },
    answer: 2
  },
  office300: {
    points: 300,
    question: 'In Microsoft Excel, what is the keyboard shortcut key to lock cell references in a formula?',
    selections: {
      1: 'F2',
      2: 'F4',
      3: 'F6',
      4: 'F8'
    },
    answer: 2
  },
  theory100: {
    points: 100,
    question: 'What is "NOT" one of the benefits of using SSDs compare to traditional spinning hard drives?',
    selections: {
      1: 'Higher read/write speed',
      2: 'Lower power consumption',
      3: 'Lower running temperature',
      4: 'Better resistance to magnetism.'
    },
    answer: 3
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
    points: 300,
    question: 'How many connection pins are there in a standard USB 3.0 type A plug?',
    selections: {
      1: '4',
      2: '5',
      3: '10',
      4: '11'
    },
    answer: 4
  },
  // section 4
  history100: {
    points: 100,
    question: 'Why is the emu and the kangaroo depicted on Australia\'s Commonwealth Coat of Arms?',
    selections: {
      1: 'Because these animals can\'t walk backwards',
      2: 'Because these animals are national icons',
      3: 'Because these animals are deceptively dangerous',
      4: 'Because these animals are higher in population than people'
    },
    answer: 1
  },
  history200: {
    points: 200,
    question: 'Australia’s first university was founded in which city?',
    selections: {
      1: 'Perth',
      2: 'Sydney',
      3: 'Melbourne',
      4: 'Darwin'
    },
    answer: 2
  },
  history300: {
    points: 300,
    question: 'In January 2021 Australia changed its lyrics of the national anthem "Advance Australia Fair". What was the purpose of the change?',
    selections: {
      1: 'To recognise equality of opportunity for all',
      2: 'To recognise freedom and dignity of the individual',
      3: 'To recognise its long indigenous history',
      4: 'To recognise English as an important unifying element of Australian society'
    },
    answer: 3
  },
  biology100: {
    points: 100,
    question: 'According to the definition of fruits, which of the below vegetables is real vegetables but not fruits?',
    selections: {
      1: 'Eggplant',
      2: 'Tomato',
      3: 'Cucumber',
      4: 'Carrot'
    },
    answer: 4
  },
  biology200: {
    points: 200,
    question: 'Which animal below has the highest normal body temperature? ',
    selections: {
      1: 'Dog',
      2: 'Cat',
      3: 'Chicken',
      4: 'Rabbit'
    },
    answer: 2
  },
  biology300: {
    points: 300,
    question: 'What is the medical term for "low sodium present in blood"?',
    selections: {
      1: 'Leukopenia',
      2: 'Anemia',
      3: 'Hyponatremia',
      4: 'Hypoglycemia'
    },
    answer: 3
  },
  physics100: {
    points: 100,
    question: 'Which of the following is "NOT" a form of energy?',
    selections: {
      1: 'Light',
      2: 'Magnetism',
      3: 'Heat',
      4: 'Sound'
    },
    answer: 2
  },
  physics200: {
    points: 200,
    question: 'The reason you see straw "bending" in water is because of...',
    selections: {
      1: 'Refraction',
      2: 'Diffraction',
      3: 'Reflection',
      4: 'Scattering'
    },
    answer: 1
  },
  physics300: {
    points: 300,
    question: 'What is the type of lens used to correct nearsightedness',
    selections: {
      1: 'Double Convex',
      2: 'Plano-convex',
      3: 'Double Concave',
      4: 'Plano-concave'
    },
    answer: 3
  },
  chemistry100: {
    points: 100,
    question: 'What are the most common elements in the human body?',
    selections: {
      1: 'Phosphorus, nitrogen, calcium',
      2: 'Sulfur, sodium, magnesium',
      3: 'Copper, zinc, selenium',
      4: 'Oxygen, carbon and hydrogen'
    },
    answer: 4
  },
  chemistry200: {
    points: 200,
    question: 'What is the chemical name of baking soda',
    selections: {
      1: 'Sodium Bicarbonate',
      2: 'Sodium Chloride',
      3: 'Calcium Hypochlorite',
      4: 'Calcium Carbonate'
    },
    answer: 1
  },
  chemistry300: {
    points: 300,
    question: 'What alloy does copper and tin create when combined?',
    selections: {
      1: 'Brass',
      2: 'Steel',
      3: 'Bronze',
      4: 'Rose gold'
    },
    answer: 3
  },
  politics100: {
    points: 100,
    question: 'When was the United Nations created?',
    selections: {
      1: 'Few years after World War I',
      2: 'Few years before World War II',
      3: 'During World War II',
      4: 'After World War II'
    },
    answer: 4
  },
  politics200: {
    points: 200,
    question: 'Which of the European Union country does "NOT" use Euro?',
    selections: {
      1: 'Austria',
      2: 'Finland',
      3: 'Poland',
      4: 'Ireland'
    },
    answer: 3
  },
  politics300: {
    points: 300,
    question: 'Which country below is the latest member of the United Nations?',
    selections: {
      1: 'Switzerland',
      2: 'South Sudan',
      3: 'Vatican City',
      4: 'Monaco'
    },
    answer: 2
  },
  geology100: {
    points: 100,
    question: 'Antarctica has what percentage of the world\'s ice?',
    selections: {
      1: '10%',
      2: '35%',
      3: '65%',
      4: '90%'
    },
    answer: 4
  },
  geology200: {
    points: 200,
    question: 'Australia is the fastest moving continent on Earth. How far does it move north each year?',
    selections: {
      1: '7 millimetres',
      2: '7 centimetres',
      3: '70 centimetres',
      4: '7 metres'
    },
    answer: 2
  },
  geology300: {
    points: 300,
    question: 'Which one of these statements is true:',
    selections: {
      1: 'You can run faster than a tsunami',
      2: 'A tsunami wave height is large in the open ocean',
      3: 'Tsunami can occur in lakes, rivers and oceans',
      4: 'Tsunami travel at the speed of sound in water in deep ocean'
    },
    answer: 3
  },
  economy100: {
    points: 100,
    question: 'Which of the following industries is most prone to the occurrence of natural monopolies?',
    selections: {
      1: 'Computer Software',
      2: 'Agriculture',
      3: 'Utility',
      4: 'Retail'
    },
    answer: 3
  },
  economy200: {
    points: 200,
    question: 'Which of the following would be an "opportunity cost" of going to college?',
    selections: {
      1: 'Four years of foregone earnings in the labour market',
      2: 'The tuition cost of college',
      3: 'The student debt accumulated during college',
      4: 'The total tuition cost plus the interest from student loan'
    },
    answer: 1
  },
  economy300: {
    points: 300,
    question: 'How are current international exchange rates determined?',
    selections: {
      1: 'A fixed exchange rate',
      2: 'A managed floating exchange rate',
      3: 'A standard exchange rate',
      4: 'A floating exchange rate'
    },
    answer: 2
  },
  business100: {
    points: 100,
    question: 'According to Fortune, Global 500 of 2020, what are the 5 top U.S. companies in Technology sector?',
    selections: {
      1: 'Apple, Microsoft, Dell Technologies, IBM, Facebook',
      2: 'Apple, Microsoft, Alphabet, Dell Technologies, IBM',
      3: 'Apple, Microsoft, Alphabet, IBM, Facebook',
      4: 'Apple, Microsoft, IBM, Intel, Facebook'
    },
    answer: 2
  },
  business200: {
    points: 200,
    question: 'What is Microsoft\'s number of employees worldwide as of March 31, 2021?',
    selections: {
      1: 'About 100,000',
      2: 'About 125,000',
      3: 'About 150,000',
      4: 'About 175,000'
    },
    answer: 4
  },
  business300: {
    points: 300,
    question: 'Microsoft co-founder Bill Gates held an AMA on Reddit this week. What was "NOT" one of his personal strategies to reduce climate change?',
    selections: {
      1: 'Showering less',
      2: 'Eating synthetic meat',
      3: 'Put solar panels at his house',
      4: 'Buying green jet fuel'
    },
    answer: 1
  },
  // section 4
  english1: {
    points: 100,
    question: 'I wish I _____ those words, but now it\'s too late',
    selections: {
      1: 'not having said',
      2: 'have never said',
      3: 'never said',
      4: 'had never said'
    },
    answer: 4
  },
  english2: {
    points: 100,
    question: 'Last year, when I last met her, she told me she _____ a letter every day for the last two months.',
    selections: {
      1: 'had written',
      2: 'has written',
      3: 'had been writing',
      4: 'have been writing'
    },
    answer: 3
  },
  english3: {
    points: 100,
    question: '_______ forced to do anything. He acted of his own free will.',
    selections: {
      1: 'In no way was he',
      2: 'No way he was',
      3: 'In any way he was',
      4: 'In any way was he'
    },
    answer: 1
  },
  english4: {
    points: 100,
    question: 'We\'ll never know what might have happened _____ the email earlier.',
    selections: {
      1: 'if he sent',
      2: 'had he sent',
      3: 'if he has sent',
      4: 'did he sent'
    },
    answer: 2
  },
  english5: {
    points: 100,
    question: 'When I saw them, they _____, and I thought they _____ because their eyes were red.',
    selections: {
      1: 'were arguing / had been crying',
      2: 'had been arguing / had been crying',
      3: 'were arguing / were crying',
      4: 'had been arguing / were crying'
    },
    answer: 1
  },
  english6: {
    points: 100,
    question: 'When your train arrives, I _____ on the platform.',
    selections: {
      1: 'will wait',
      2: 'shall wait',
      3: 'will have waited',
      4: 'will be waiting'
    },
    answer: 4
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
