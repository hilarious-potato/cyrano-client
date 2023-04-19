const CopyButton = (props) => {
  return (
    <button
      onClick={(e) => props.onClick(e)}
      className="absolute bottom-0 right-0 top-0 h-full rounded-e-md  bg-gray-800/25 px-2 text-sm text-primary outline outline-gray-600 backdrop-blur-sm"
    >
      copy
    </button>
  );
};

export default CopyButton;
