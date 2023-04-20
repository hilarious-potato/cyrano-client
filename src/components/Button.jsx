import { useEffect, useState } from "react";

const Button = (props) => {
  const baseClassName = `rounded-md border px-3 py-1 font-body bg-gray-800/25 backdrop-blur-sm ${
    props.className && props.className
  }`;
  const primaryClassNames =
    "border-primary/60 text-primary hover:border-primary  active:border-primary/40 active:text-primary/40";
  const secondaryClassNames =
    " border-secondary/60 text-secondary hover:border-secondary  active:border-secondary/40 active:text-secondary/40";
  const warningClassNames =
    "border-warning/60 text-warning hover:border-warning active:border-warning/40 active:text-warning/40";
  const baseColor =
    "border-gray-300/60 text-gray-300 hover:border-gray-300  active:border-gray-300/40 active:text-gray-300/40 ";
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
