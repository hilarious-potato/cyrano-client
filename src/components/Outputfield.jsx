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
      className={`relative my-4 grid gap-x-4 gap-y-0 font-body md:grid-cols-8 ${props.className}`}
    >
      <label className="flex flex-col justify-center text-gray-400 md:col-span-2 md:text-right">
        {props.label}
      </label>

      <div className="relative overflow-hidden truncate rounded-md border border-gray-600 bg-gray-800 px-3 py-1 text-gray-200 ring-primary focus:ring-2 md:col-span-6">
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
        <div className="px-4 py-1 text-xs text-gray-400 md:col-span-6 md:col-start-3">
          {props.caption}
        </div>
      )}
    </div>
  );
};

export default Outputfield;
