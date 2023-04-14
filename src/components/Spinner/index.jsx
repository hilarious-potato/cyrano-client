import "./style.css";

const Spinner = () => {
  return (
    <div className="Spinner flex-column m-auto flex min-h-full justify-center">
      <div className="lds-ripple relative mx-auto inline-block h-32 w-32">
        <div className="absolute rounded-full border-4 border-black opacity-100 "></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
