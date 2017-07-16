const JavascriptQuestions = {
    title: 'My quiz',
    questions: [

        {
            text: 'Чему равна переменная name',
            code: `var name = "пупкин".replace("п", "д")`,

            responses: [

                {
                    text: 'for',
                    id: 0,
                    mark: false
                },
                {
                    text: 'foo',
                    id: 1,
                    mark: false
                },
                {
                    text: 'bar',
                    id: 2,
                    mark: false
                },
                {
                    text: 'var',
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
            textcode: '',
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


        }


    ]
}

export default JavascriptQuestions
