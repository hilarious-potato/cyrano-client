const Inputfield = (props) => {
  return (
    <div
      className={"relative grid grid-cols-7 gap-4 font-body " + props.className}
    >
      <label
        className="col-span-2 flex flex-col justify-center text-right text-gray-600"
        htmlFor={props.name}
      >
        {props.label}
      </label>

      <input
        className="col-span-5 rounded-md border border-gray-600 p-2 focus:ring-primary"
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        onChange={(e) => {
          props.onChange && props.onChange(e);
        }}
      />
      {props.required && props.value.length <= 0 && <RequiredTag />}
    </div>
  );
};

const RequiredTag = () => {
  return (
    <div className="absolute right-4 top-2">
      <p className="text-sm text-gray-400">required</p>
    </div>
  );
};

export default Inputfield;
