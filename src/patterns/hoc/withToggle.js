import {useState} from "react";

// Higher Order Component (HOC)
const withToggle = (WrappedComponent) => {
  const WithToggle = (props) => {
    const [toggled, setToggled] = useState(false);

    const handleToggle = () => {
      setToggled(!toggled);
    };

    return (
      <WrappedComponent
        {...props}
        toggled={toggled}
        handleToggle={handleToggle}
      />
    );
  };

  return WithToggle;
};

export default withToggle;