
type GreetingProps = {
  name: string;
  isLoggedIn: boolean;
};

const   Greeting = ({ name, isLoggedIn }: GreetingProps) => {
  return <h1>{isLoggedIn ? `Welcome, ${name}!` : "Please log in."}</h1>;
};

export default Greeting;
