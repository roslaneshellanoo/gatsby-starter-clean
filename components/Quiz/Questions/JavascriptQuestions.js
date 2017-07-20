const JavascriptQuestions = {
  title: 'Javascript Quiz',
  questions: [

    {
      text: 'What will be the output of the variable "name" ?',
      code: `var name = "ravid".replace("r", "d")`,

      responses: [
        {
          text: 'ravid',
          id: 0,
          mark: false
        },
        {
          text: 'divar',
          id: 1,
          mark: false
        },
        {
          text: 'divad',
          id: 2,
          mark: false
        },
        {
          text: 'david',
          id: 3,
          mark: true
        }
      ],
      answer: 3

    },
    {
      text: 'What will be the output of this code?',
      code: `var a = (2,5 - 2) * 2;
            
alert(a);`,
      responses: [
        {
          text: '1',
          id: 0,
          mark: false
        },
        {
          text: `6`,
          id: 1,
          mark: true
        },
        {
          text: '2,5',
          id: 2,
          mark: false
        },
        {
          text: '5',
          id: 3,
          mark: false
        }
      ],
      answer: 1

    },

    {
      text: 'Is <code> a == b </code> ?',
      textcode: 'a == b',
      responses: [

        {
          text: 'true',
          id: 0,
          mark: false
        },
        {
          text: 'false',
          id: 1,
          mark: true
        },
        {
          text: 'undefined',
          id: 2,
          mark: false
        },
        {
          text: 'NaN',
          id: 3,
          mark: false
        }
      ],
      answer: 1

    },

    {
      text: 'What will be the output <code> "apples" > "oranges" </code> ?',
      responses: [

        {
          text: 'undefined',
          id: 0,
          mark: false
        },
        {
          text: 'false',
          id: 1,
          mark: true
        },
        {
          text: 'NaN',
          id: 2,
          mark: false
        },
        {
          text: 'true',
          id: 3,
          mark: false
        }
      ],
      answer: 1

    }

  ]
}

export default JavascriptQuestions
