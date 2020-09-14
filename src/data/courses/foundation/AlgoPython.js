export const algoPython = {
  difficulty: 'Foundation',
  duration: '30 Lectures',
  level: 'Level 1',
  link: '/courses/ds-algo-with-python',
  domain: 'Algorithms',
  title: 'Data Structure and Algorithms with Python',
  upcoming: 'Oct 1st',
  schedule: [
    {
      dates: "1st Oct - 5th Dec",
      days: "Sat, Sun, Tue, Thur",
      timing: "06:00 PM - 08:00 PM (IST)",
      link: "",
      priceCut: "₹ 15,000",
      price: "₹ 4,850",
      active: true,
    },
    {
      dates: "10th Jan - 10th Apr",
      days: "Sat, Sun, Wed",
      timing: "06:00 PM - 08:00 PM (IST)",
      link: "",
      priceCut: "15,000 INR",
      price: "6,850 INR",
      active: false,
    }
  ],
  projects: [
    {
      title: 'Automatic Sudoku Solver',
      img: '/static/images/courses/projects/sudoku.jpg'
    },
    {
      title: 'File Encryption and Compression',
      img: '/static/images/courses/projects/security.jpg'
    },
    {
      title: 'Splitwise Cashflow Minimization',
      img: '/static/images/courses/projects/split.png'
    },
    {
      title: 'Search routes like Google Maps',
      img: '/static/images/courses/projects/maps.png'
    },
    {
      title: 'Git Version Control Replica',
      img: '/static/images/courses/projects/git.png'
    },
    // {
    //   title: 'Crossword Puzzle Game',
    //   img: '/static/images/courses/projects/git.png'
    // },
    // {
    //   title: 'Automatic Episode Player',
    //   img: '/static/images/courses/projects/git.png'
    // },
  
  ],
  topics: [
    {
      title: 'Getting started with Python',
      classes: 'Classes 01-03',
      subtopics: [
        'Flowcharts & Pseudocode',
        'Control Flow Statements ',
        'Setting up Python Environment',
        'Primitive data-types',
        'Input-Output on online judge',
        'File Handling',
        'Coding standards in Python',
        'Methods along with problems',
        'Setting up debugger'
      ]
    },
    {
      title: 'Lists & NumPy Arrays',
      classes: 'Classes 04-07',
      subtopics: [
        'Introduction of Lists',
        'Input-output & traversing',
        'Linear Search & Binary Search',
        'Bubble sort, Insertion sort, Selection sort, Count sort',
        'Multi-Dimensional arrays',
        'Rotation in arrays',
        'Intro to NumPy',
        'Interview problems on Arrays'
      ]
    },
    {
      title: 'Number theory & Bitmasking',
      classes: 'Classes 08-09',
      subtopics: [
        'Euclidean algorithms',
        'Sieve of eratosthenes',
        'Puzzle problems',
        'Bitwise operators',
        'Advantages & cost-effectiveness',
        'Backtracking with Bitmasking',
        'Interview problems'
      ]
    },
    {
      title: 'Strings',
      classes: 'Classes 10-11',
      subtopics: [
        'Intro to Strings in Python',
        'Mutability and Behavior',
        'is vs ==',
        'String operations',
        'String Manipulation'
      ]
    },
    {
      title: 'Space and Time complexity analysis',
      classes: 'Classes 12-13',
      subtopics: [
        'Best case, worst case, average case',
        'Sandwich theorem, recurrence relation',
        'Solving Complex Linear Recurrences',
        'Solving Divide & Conquer Recurrences',
        'Theta, Big-oh, Omega notations',
        'Understanding complexity of loops',
        'Auxiliary vs Total Space',
        'Static & Dynamic Memory Allocation'
      ]
    },
    {
      title: 'Recursion & Backtracking',
      classes: 'Classes 14-16',
      subtopics: [
        'Recursion- what, why, when?',
        'Control flow & stack trace',
        'Understanding Recursive Tree',
        'Merge sort & Quick sort',
        'Interview problems on Recursion',
        'Backtracking-Sudoku solver, N-Queens, lexo-permute'
      ]
    },
    {
      title: 'Object Oriented Programming',
      classes: 'Classes 17-18',
      subtopics: [
        'Classes & Objects',
        'Constructors, States & Behaviors',
        'self keyword',
        'Abstraction, Inheritance, Polymorphism, Encapsulation',
        'Scopes & Closures',
        'Static & non-static',
        'Class Methods',
        'Decorators, Iterators & Generators'
      ]
    },
    {
      title: 'Stack & Queue',
      classes: 'Classes 19-20',
      subtopics: [
        'Stack as an Abstract Data Type',
        'Operations in Stack',
        'Stack using NumPy',
        'Push efficient & Pop efficient Stacks',
        'Queue as generic collection',
        'Operations in Queue',
        'Queue using 2 stacks',
        'Interview problems on Stack & Queue'
      ]
    },
    {
      title: 'LinkedList',
      classes: 'Classes 21-22',
      subtopics: [
        'Intro to LinkedList',
        'Implementation of LinkedList',
        'Operations in LinkedList',
        'Cycle detection Algorithms',
        'Problems based on LinkedList'
      ]
    },
    {
      title: 'Binary Trees',
      classes: 'Classes 23-24',
      subtopics: [
        'Implementation of Binary Trees',
        'Tree traversal- inorder, preorder, postorder',
        'Searching Algorithms- DFS, BFS',
        'Calculate- hieght, depth, diameter of tree',
        'Implementation of Binary Search Tree',
        'AVL Trees & Rotations',
        'Interview problems on BT & BST'
      ]
    },
    {
      title: 'Heap & Dictionary',
      classes: 'Classes 25-26',
      subtopics: [
        'Implementation of Heaps',
        'HeapSort with complexity analysis',
        'Concept of Hashing',
        'Dictionary implementation',
        'Problems on Dictionary & Heaps'
      ]
    },
    {
      title: 'Graph',
      classes: 'Classes 27-28',
      subtopics: [
        'Terminologies in Graph',
        'EdgeList implementation',
        'AdjacencyList implementation',
        'AdjacencyMap implementation',
        'Searching Algorithms- DFS, BFS',
        'Connected component, Cycle detection',
        'Kruskal\'s, Dijkstra\'s, Prim\'s Algorithms'
      ]
    },
    {
      title: 'Dynamic Programming',
      classes: 'Classes 29-30',
      subtopics: [
        'Understanding the concept in Dynamic Programming',
        'Understanding overlapping subproblems',
        'Memorization vs Tabulation',
        'Top down & bottom-up approach',
        '0-1 KnapSack problem',
        'Wildcard pattern problem',
        'Egg drop problem',
        'Matrix chain multiplication'
      ]
    }
  ],
  slides: [
    {
      heading: 'Automatic Sudoku Solver',
      subheading: 'Using Back Tracking',
      image: '/static/images/courses/projects/sudoku.jpg'
    },
  ],
  tags: [
    'Algorithms',
    'Problem Solving',
    'Python',
    'Recursion',
    'Backtracking',
    'Dynamic Programming',
    'Stack',
    'Queue',
    'Sets',
    'Bit Masking',
    'Interview Prep'
  ],
  overview: [
    "Every student has in their mind that why to study Data Structure. How it helps them in a real-life problem? Data Structures are the most important skills for a person belonging to the computer-science background to understand the nature of problems, develop the logic to solve a problem in an optimized way with the efficient use of appropriate Data Structures.",
    "From Competitive programming to development, the first step on the success ladder will be to master in Data Structures & Algorithms. To solve any real-life problem, we use an algorithm, but is that algorithm is the most optimized and efficient one? Today, every company believes that a person with strong DSA skills would be a perfect candidate to hire!"
  ],
  faqs: [
    {
      title:
        'Will this help me with my career path?',
      answer:
        'Yes. If you learn well, all that the course intends to teach, you’ll be able to impress quite a few interviewers across quite a few fine companies.'
    }, {
      title:
        'How your doubts will get resolved?',
      answer:
        'We have an army of TA’s who are available in different time slots to resolve all your doubts. You can also interact with faculty through Slack.'
    }, {
      title:
        'Is this course suitable for me?',
      answer:
        'Definitely! If you want to shift to software developer career path, then this course is perfect for you!'
    },
  ]
};
