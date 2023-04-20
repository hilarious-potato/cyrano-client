import CopyButton from "./CopyButton";

const Inputfield = (props) => {
  return (
    <div
      className={`relative my-4 grid gap-x-4 gap-y-0 font-body md:grid-cols-8 ${props.className}`}
    >
      <label
        className="flex flex-col justify-center text-gray-400 md:col-span-2 md:text-right"
        htmlFor={props.name}
      >
        {props.label}
      </label>
      <input
        className="overflow-hidden rounded-md border border-gray-600 bg-gray-800/25 px-3 py-1 text-gray-200 backdrop-blur-sm focus:ring-primary md:col-span-6"
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
        <div className="px-4 py-1 text-xs text-gray-400 md:col-span-6 md:col-start-3">
          {props.caption}
        </div>
      )}
    </div>
  );
};

const RequiredTag = () => {
  return (
    <div className="absolute bottom-2 right-0 top-6 flex flex-col justify-center rounded-e-md border border-gray-600 bg-gray-800/25 px-2  backdrop-blur-sm md:top-0">
      <p className="text-sm text-gray-400">required</p>
    </div>
  );
};

export default Inputfield;
