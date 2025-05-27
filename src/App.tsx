import Button from "./components/Button";
import Card from "./components/Card";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import LoginForm from "./components/LoginForm";
import NoticeBox from "./components/NoticeBox";
import UserCard from "./components/UserCard";
import useToggle from "./customHooks/useToggle";

const App = () => {
  const [isVisible, toggleVisibility] = useToggle();

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
      <Card title="My Blog Post" footer={<span>&copy; 2025</span>}>
        <p>
          This is the content of the blog Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Unde, soluta!
        </p>
      </Card>
      <Button onClick={() => alert("Clicked!")}>Click Me</Button>

      <div>
        <button onClick={toggleVisibility}>
          {isVisible ? "hide" : "show"}
        </button>
      </div>
    </div>
  );
};

export default App;
