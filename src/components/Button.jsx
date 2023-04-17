import { useEffect, useState } from "react";

const Button = (props) => {
  const baseClassName =
    "rounded-md border px-3 py-1 font-body " +
    (props.className && props.className);
  const primaryClassNames = "border-primary text-primary";
  const secondaryClassNames = "border-secondary text-secondary";
  const warningClassNames = "border-warning text-warning";
  const baseColor = "border-gray-600";

  const [buttonClassName, setButtonClassName] = useState("");

  const concatClassName = () => {
    let str = baseClassName;

    if (props.primary) {
      str += " " + primaryClassNames;
    } else if (props.secondary) {
      str += " " + secondaryClassNames;
    } else if (props.warning) {
      str += " " + warningClassNames;
    } else {
      str += " " + baseColor;
    }

    return str;
  };

  useEffect(() => {
    setButtonClassName(concatClassName());
  }, []);

  return (
    <button
      type={props.type || "button"}
      className={buttonClassName}
      onClick={(e) => props.onClick(e)}
    >
      {props.children}
    </button>
  );
};

export default Button;
