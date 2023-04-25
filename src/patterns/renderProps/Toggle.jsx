import { useState } from "react";

function Toggle({ children }) {
  const [on, setOn] = useState(false);

  function toggle() {
    setOn((prevOn) => !prevOn);
  }

  return children({
    on,
    toggle,
  });
}

export default Toggle;
