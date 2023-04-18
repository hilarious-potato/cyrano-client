import CopyButton from "./CopyButton";

const Outputfield = (props) => {
  const onClick = (event) => {
    // Copy the text inside the text field
    navigator.clipboard.writeText(props.value);

    // Alert the copied text
    alert("Copied the text: " + props.value);
  };

  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(props.value);
      console.log("Content copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div
      className={
        "relative my-4 grid grid-cols-7 gap-4 font-body " + props.className
      }
    >
      <label className="col-span-2 flex flex-col justify-center text-right text-gray-400">
        {props.label}
      </label>

      <div className="col-span-5 overflow-hidden rounded-md border border-gray-600 bg-gray-800 px-3 py-1 text-gray-200 focus:ring-primary">
        {props.type === "link" ? (
          <a className="text-secondary underline" href={props.value}>
            {props.value}
          </a>
        ) : (
          props.value
        )}
      </div>

      <CopyButton onClick={copyContent} type={props.type} />
    </div>
  );
};

export default Outputfield;
