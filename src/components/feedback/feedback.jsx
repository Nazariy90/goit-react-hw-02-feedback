// import React from "react";
// import Statistics from './Statistics';
// import FeedbackOptions from './FeedbackOptions';
// import Section from './Section';

// class App extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   };

//   handleFeedback = option => {
//     this.setState(prevState => ({ [option]: prevState[option] + 1 }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good, neutral, bad } = this.state;
//     const totalFeedback = good + neutral + bad;
//     return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={{ good, neutral, bad }}
//             onLeaveFeedback={this.handleFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={this.countTotalFeedback()}
//             positivePercentage={this.countPositiveFeedbackPercentage()}
//           />
//         </Section>
//       </div>
//     );
//   }
// }

// export default App;



import React from "react";
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';

class FeedbackApp extends React.Component {
state = {
good: 0,
neutral: 0,
bad: 0,
feedbackReceived: false
};

handleFeedback = option => {
this.setState(prevState => ({ [option]: prevState[option] + 1, feedbackReceived: true }));
};

countTotalFeedback = () => {
const { good, neutral, bad } = this.state;
return good + neutral + bad;
};

countPositiveFeedbackPercentage = () => {
const { good, neutral, bad } = this.state;
const totalFeedback = good + neutral + bad;
return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
};

    render() {
const { good, neutral, bad, feedbackReceived } = this.state;
    return (
<div>
    <Section title="Please leave feedback">
    <FeedbackOptions
options={{ good, neutral, bad }}
onLeaveFeedback={this.handleFeedback}
/>
    </Section>
{feedbackReceived &&
    <Section title="Statistics">
    <Statistics
           good={good}
           neutral={neutral}
           bad={bad}
           total={this.countTotalFeedback()}
           positivePercentage={this.countPositiveFeedbackPercentage()}
         />
    </Section>
}
</div>
);
}
}

export default FeedbackApp;