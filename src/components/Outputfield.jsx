import CopyButton from "./CopyButton";

const Outputfield = (props) => {
  const onClick = (event) => {
    // Copy the text inside the text field
    navigator.clipboard.writeText(props.value);

    // Alert the copied text
    alert("Copied the text: " + props.value);
  };

  const copyContent = async (event) => {
    event.preventDefault();
    try {
      await navigator.clipboard.writeText(props.value);
      console.log("Content copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div
      className={`gap-y-0font-body relative my-4 grid grid-cols-8 gap-x-4 ${props.className}`}
    >
      <label className="col-span-2 flex flex-col justify-center text-right text-gray-400">
        {props.label}
      </label>

      <div className="relative col-span-6 overflow-hidden truncate rounded-md border border-gray-600 bg-gray-800 px-3 py-1 text-gray-200 ring-primary focus:ring-2">
        {props.type === "link" ? (
          <a className="text-secondary underline" href={props.value}>
            {props.value}
          </a>
        ) : (
          props.value
        )}
        <CopyButton onClick={copyContent} type={props.type} />
      </div>

      {!props.capture && (
        <div className="col-span-6 col-start-3 px-4 py-1 text-xs text-gray-400">
          {props.caption}
        </div>
      )}
    </div>
  );
};

export default Outputfield;
