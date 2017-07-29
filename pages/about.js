import React from 'react'
import Helmet from 'react-helmet'

import JavascriptQuestions from '../components/Quiz/Questions/JavascriptQuestions'

class About extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      quiz: JavascriptQuestions
    }
  }

  render () {
    return (
      <div>
        <Helmet
          title={`Quizio | About Us`}
          meta={[
            { 'name': 'description', 'content': 'Test your code skills online and improve your knowledge by resolving simple programming quizes' },
            { 'name': 'keywords', 'content': 'quiz' },
          ]}
        />

        <h1>About Quizio.io</h1>

        <div>
          <p>
            Excelling in any field of knowledge is worthwhile. Improving yourself via means of computer games with programs intentionally created to boost the analytic capacity of an individual is very challenging. Not just on how you understand or perceived the quizzes but also how familiar you are with the computer world. Computer programming is a hard thing to do.
          </p>
          <p>
            There are millions of code lines that need to be familiarized of. There are the intricacies between the underlying codes that need to be understood in order to follow the thread in the functioning of the software. Fortunately, we have every challenge that you need to be taken to help your programming skills raise up.
          </p>
          <p>
            Although programming is hard, with the courage and enthusiasm to learn new concepts in programming, you will find it a little easier than before. With the help of our services, your future to become the ace in programming is possible. Various learning quizzes are set up to create the dynamics in learning more about the computer programming.
          </p>
          <p>
            You can discover that we offer different types of mind test such as programming quiz, code test, programming quiz, code examine, code training, programming questions, java script quiz, and java script questions. They deliver the learning process to students who want to learn more with clarity, accuracy and the very important one, quality.
          </p>
          <p>
            Through the help of our quizzes and tests displayed, all the edge necessary in programming will be delivered. The questions that we usually used are different from each other. Most of the time, we are using different concepts for each question.  Furthermore, we only have short quizzes which should only take 5 minutes to complete.
          </p>
          <p>
            We always repeat the quizzes multiple times that is meant to retain and stick the concepts in your head. Usually, the quizzes and questions start from basic to complicated topics. So, rest assured that as you go far with the test, you can able to discern the approach of every question. Learning programming is not that hard if you take one step at a time. We do our best to help people in computer programming with our simple, fast and free of charge programming code quizzes.
          </p>
          <p>
            Every quiz is made from simple to complex. By developing this type of quizzes, we test every candidate skills through a varied sample of actual works. Every tests measures code correctness, execution speed, and memory consumption. The technical selection saves time that you need not solve longer, time-consuming tests.
          </p>
          <p>
            We provide the test that could give the basic required knowledge in a short time. Moreover, we provide the quality over quantity notion in the area of programming. We are highly focused on testing the hidden technical skills in every people who want to try the program. Lastly, we are offering programming code quizzes that are free of charge. So, hurry and try the test and quizzes that we have. In short period of time, you are an ace already in computer programming.

          </p>
        </div>
      </div>
    )
  }
}

export default About
