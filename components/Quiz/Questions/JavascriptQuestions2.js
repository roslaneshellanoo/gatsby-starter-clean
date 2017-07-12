let question3 =
        `const store = new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment: state => state.count++,
      decrement: state => state.count--
    }
  });
`,

    question2 =
        `var name = "John";
function sayHi() {
  alert(name);
}
setTimeout(function() {
  var name = "James";
  sayHi();
}, 1000);
`,

    question4 =
        `function() {
    var a = 10;
    if(a > 5) {
        a = 7;
    }
    alert(a);
}
`
;

const JavascriptQuestions2 = {
    title: 'My quiz2',
    questions: [

        {
            text: 'What is the correct syntax for referring to an external script called "xxx.js"?',

            responses: [

                {
                    text: `<script href="xxx.js">`,
                    id: 0,
                    mark: false
                },
                {
                    text: `<script link="xxx.js">`,
                    id: 1,
                    mark: false
                },
                {
                    text: `<script name="xxx.js">`,
                    id: 2,
                    mark: false
                },
                {
                    text: `<script src="xxx.js">`,
                    id: 3,
                    mark: true
                }
            ],
            answer: 3

        },

        {
            text: "Which of the following is a String ?",

            responses: [

                {
                    text: '$This_is_string',
                    id: 0,
                    mark: false
                },
                {
                    text: `"This is string"`,
                    id: 1,
                    mark: true
                },
                {
                    text: 'this is string...',
                    id: 2,
                    mark: false
                },
                {
                    text: '@this is string',
                    id: 3,
                    mark: false
                }
            ],
            answer: 1


        },

        {
            text: "Question 3",
            textcode: question3,
            responses: [

                {
                    text: 'Wrong, too bad.',
                    id: 0,
                    mark: false
                },
                {
                    text: 'Right2',
                    id: 1,
                    mark: true
                },
                {
                    text: 'Wrong, too bad.',
                    id: 2,
                    mark: false
                },
                {
                    text: 'Wrong, too bad.',
                    id: 3,
                    mark: false
                }
            ],
            answer: 1


        },

        {
            text: "Question 4",
            responses: [

                {
                    text: 'Wrong, too bad.',
                    id: 0,
                    mark: false
                },
                {
                    text: 'Right2',
                    id: 1,
                    mark: true
                },
                {
                    text: 'Wrong, too bad.',
                    id: 2,
                    mark: false
                },
                {
                    text: 'Wrong, too bad.',
                    id: 3,
                    mark: false
                }
            ],
            answer: 1


        },
        {
            text: "Which of the following is a String ?",

            responses: [

                {
                    text: '$This_is_string',
                    id: 0,
                    mark: false
                },
                {
                    text: `"This is string"`,
                    id: 1,
                    mark: true
                },
                {
                    text: 'this is string...',
                    id: 2,
                    mark: false
                },
                {
                    text: '@this is string',
                    id: 3,
                    mark: false
                }
            ],
            answer: 1


        },
        {
            text: "Which of the following is a String ?",

            responses: [

                {
                    text: '$This_is_string',
                    id: 0,
                    mark: false
                },
                {
                    text: `"This is string"`,
                    id: 1,
                    mark: true
                },
                {
                    text: 'this is string...',
                    id: 2,
                    mark: false
                },
                {
                    text: '@this is string',
                    id: 3,
                    mark: false
                }
            ],
            answer: 1


        },


    ]
}

export default JavascriptQuestions2
