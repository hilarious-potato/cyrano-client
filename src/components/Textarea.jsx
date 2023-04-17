const Textarea = (props) => {
  return (
    <div
      className={
        "relative my-4 grid grid-cols-7 gap-x-4 gap-y-2 font-body " +
        props.className
      }
    >
      <label
        className="col-span-2 flex flex-col justify-center pl-4  text-gray-400"
        htmlFor={props.name}
      >
        {props.label}
      </label>
      {props.required && props.value.length <= 0 && <RequiredTag />}
      <textarea
        className="col-span-7 h-96 rounded-md border border-gray-600 bg-gray-800 px-3 py-1 text-gray-200 focus:ring-primary"
        name={props.name && props.name}
        value={props.value && props.value}
        placeholder={props.placeholder}
        onChange={(e) => {
          props.onChange && props.onChange(e);
        }}
      />
    </div>
  );
};

const RequiredTag = () => {
  return (
    <div className="absolute right-4 top-1">
      <p className="text-sm text-gray-400">required</p>
    </div>
  );
};

export default Textarea;
