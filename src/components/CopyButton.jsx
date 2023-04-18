const CopyButton = (props) => {
  return (
    <div className="absolute bottom-0 right-0 top-0 flex flex-col justify-center rounded-e-md border-b border-e border-t border-gray-600 bg-gray-800/25  px-2 backdrop-blur-sm">
      <button
        onClick={() => props.onClick()}
        className="m-auto block text-sm text-primary"
      >
        copy{props.type && ` ${props.type}`}
      </button>
    </div>
  );
};

export default CopyButton;
