import { useState } from "react";

const useToggle = (initial: boolean = false): [boolean, () => void] => {
  const [state, setState] = useState<boolean>(initial);
  const toggle = () => setState((prev) => !prev);
  return [state, toggle];
};

export default useToggle;
