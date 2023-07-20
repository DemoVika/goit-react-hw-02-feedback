import Feedback from 'components/feedback/Feedback';

export const App = () => {
  return (
    <div>
      <Feedback initialValue={0} />
    </div>

    // <div>
    //    <Section title="Please leave feedback">
    //     <FeedbackOptions options={ } onLeaveFeedback={ }></FeedbackOptions>
    //   </Section>

    //   <Section title="Statistics">
    //     <Statistics good={ } neutral={ } bad={ } total={ } positivePercentage={ }/>
    //   </Section>
    // </div>
  );
};
