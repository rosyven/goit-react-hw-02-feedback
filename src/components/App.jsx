import React, { Component } from "react";
import { Section } from "./Feedback/Section";
import { FeedbackOptions } from "./Feedback/FeedbackOptions";
import { Notification } from "./Feedback/Notification";
import { Statistics } from "./Feedback/Statistics";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

   handleFeedback = (type) => {
     this.setState(prevState => ({
       [type]: prevState[type] + 1
     })
    );
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };


  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onClick={this.handleFeedback}
          />

          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
                <Statistics
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={total}
                  positivePercentage={positivePercentage}
                />
            )}
        </Section>
      </div>
    );
  }
}