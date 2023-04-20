const Header = (props) => {
  return (
    <header className="relative mb-6 flex w-full items-baseline justify-between">
      <h2 className="font-heading text-xl font-bold text-secondary ">
        {props.title}
      </h2>
      {props.children}
    </header>
  );
};

export default Header;
