import React from "react";
import css from './feedback.module.css';

class Feedback extends React.Component{
state = {
  good: 0,
  neutral: 0,
  bad: 0
}
    handleGood = () => {
        this.setState(prevState => ({
           good: prevState.good + 1,
        }) )
    }
    handleNeutral = () =>  {
        this.setState(prevState => ({
           neutral: prevState.neutral + 1,
        }) )
    }
    handleBad = () =>  {
        this.setState(prevState => ({
           bad: prevState.bad + 1,
        }) )
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }

    countPositiveFeedbackPercentage = () => {
        const { good, neutral, bad } = this.state;
        const totalFeedback = good + neutral + bad;
        return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
    }
    
    render() {
    return (
<div className={css.feedback}>
    <h2 className={css.title}>Please leave feedback</h2>
        <div className={css.buttonList}>
            <button type='button' onClick={this.handleGood}>Good</button>
            <button type='button' onClick={this.handleNeutral}>Neutral</button>
            <button type='button' onClick={this.handleBad}>Bad</button>
        </div>
    <h2 className={css.title}>Statistics</h2>    
            <ul className={css.statisticsList}>
            <li className={css.statisticsItem}>Good: <span className={css.statisticsItemValue}>{this.state.good}</span></li>
            <li className={css.statisticsItem}>Neutral: <span className={css.statisticsItemValue}>{this.state.neutral}</span></li>
            <li className={css.statisticsItem}>Bad: <span className={css.statisticsItemValue}>{this.state.bad}</span></li>
            <li className={css.statisticsItem}>Total: <span className={css.statisticsItemValue}>{this.countTotalFeedback()}</span></li>
            <li className={css.statisticsItem}>Positive feedback: <span className={css.statisticsItemValue}>{this.countPositiveFeedbackPercentage()}%</span></li>
            </ul>    
</div>
        )
    }
}

export default Feedback;