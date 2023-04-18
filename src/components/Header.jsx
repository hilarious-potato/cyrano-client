const Header = (props) => {
  return (
    <header className="mb-6 flex items-baseline justify-between">
      <h2 className="font-heading text-xl font-bold text-secondary ">
        {props.title}
      </h2>
      {props.children}
    </header>
  );
};

export default Header;
