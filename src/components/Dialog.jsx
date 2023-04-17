import Button from "./Button";

const Dialog = (props) => {
  return (
    <>
      <div
        onClick={() => props.toggle()}
        className={`Backdrop fixed bottom-0 left-0 right-0 top-0 z-10 bg-gray-800/25 backdrop-blur-sm ${
          props.open ? "block" : "hidden"
        }`}
      ></div>
      <dialog
        className="z-10 w-3/4 rounded-lg border border-gray-300 bg-gray-800/25 p-4 backdrop-blur-sm"
        id={props.id}
        open={props.open ? "open" : false}
      >
        <header className="mb-6 flex items-baseline justify-between">
          <h2 className="font-heading text-xl font-bold text-secondary ">
            {props.title}
          </h2>
          <Button
            onClick={() => {
              props.toggle();
            }}
          >
            close
          </Button>
        </header>
        {props.children}
      </dialog>
    </>
  );
};

export default Dialog;
