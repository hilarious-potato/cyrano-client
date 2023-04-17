import { useEffect, useState } from "react";

const Button = (props) => {
  const baseClassName = `rounded-md border px-3 py-1 font-body ${
    props.className && props.className
  }`;
  const primaryClassNames = "border-primary text-primary";
  const secondaryClassNames = "border-secondary text-secondary";
  const warningClassNames = "border-warning text-warning";
  const baseColor = "border-gray-600 text-gray-200";

  const [buttonClassName, setButtonClassName] = useState("");

  const concatClassName = () => {
    let str;

    if (props.primary) {
      str = `${baseClassName} ${primaryClassNames}`;
    } else if (props.secondary) {
      str = `${baseClassName} ${secondaryClassNames}`;
    } else if (props.warning) {
      str = `${baseClassName} ${warningClassNames}`;
    } else {
      str = `${baseClassName} ${baseColor}`;
    }

    return str;
  };

  useEffect(() => {
    setButtonClassName(concatClassName());
  }, []);

  const onClick = (event) => {
    if (props.onClick) {
      props.onClick(event);
    } else {
      return null;
    }
  };

  return (
    <button
      type={props.type || "button"}
      className={buttonClassName}
      onClick={(e) => onClick(e)}
    >
      {props.children}
    </button>
  );
};

export default Button;
