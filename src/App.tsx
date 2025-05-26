import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import LoginForm from "./components/LoginForm";
import NoticeBox from "./components/NoticeBox";
import UserCard from "./components/UserCard";

const App = () => {
  return (
    <div>
      {/* <h1>Hello</h1> */}
      <Greeting name="Phoenix" isLoggedIn={true} />
      <UserCard
        username="empress"
        email="empress@kings.com"
        isVerified={true}
      />
      <NoticeBox title="Heads up!">hELLO</NoticeBox>
      <NoticeBox
        title="Caution!"
        type="warning"
        autoDismiss={true}
        dismissDelay={7000}>
        Please double-check your inputs.
      </NoticeBox>
      <NoticeBox
        title="Oops!"
        type="error"
        dismissible={true}
        autoDismiss={true}>
        Something went wrong.
      </NoticeBox>
      <Counter />
      <LoginForm />
    </div>
  );
};

export default App;
