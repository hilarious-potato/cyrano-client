import CopyButton from "./CopyButton";

const Inputfield = (props) => {
  return (
    <div
      className={`gap-y-0font-body relative my-4 grid grid-cols-8 gap-x-4 ${props.className}`}
    >
      <label
        className="col-span-2 flex flex-col justify-center text-right text-gray-400"
        htmlFor={props.name}
      >
        {props.label}
      </label>
      <input
        className="col-span-6 overflow-hidden rounded-md border border-gray-600 bg-gray-800/25 px-3 py-1 text-gray-200 backdrop-blur-sm focus:ring-primary"
        type={props.type && props.type}
        name={props.name && props.name}
        value={props.value && props.value}
        placeholder={props.placeholder}
        onChange={(e) => {
          props.onChange && props.onChange(e);
        }}
      />
      {props.required && props.value.length <= 0 && <RequiredTag />}
      {props.allowCopy && props.value.length > 0 && <CopyButton />}
      {!props.capture && (
        <div className="col-span-6 col-start-3 px-4 py-1 text-xs text-gray-400">
          {props.caption}
        </div>
      )}
    </div>
  );
};

const RequiredTag = () => {
  return (
    <div className="absolute bottom-2 right-0 top-0 flex flex-col justify-center rounded-e-md border border-gray-600 bg-gray-800/25  px-2 backdrop-blur-sm">
      <p className="text-sm text-gray-400">required</p>
    </div>
  );
};

export default Inputfield;
