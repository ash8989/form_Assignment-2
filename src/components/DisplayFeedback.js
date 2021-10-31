import "../components_css/displayFeedback.css";
import UserInput from "./userInput";

const DisplayFeedback = (props) => {
  const { employeeFeedback } = props;

  let style = null;
  if (employeeFeedback.length) {
    style = { padding: "2rem 0" };
  }

  return (
    <div className="displayFeedback" style={style}>
      {employeeFeedback.map((feedback) => (
        <UserInput key={feedback.id} feedback={feedback} />
      ))}
    </div>
  );
};

export default DisplayFeedback;