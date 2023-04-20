function Alert(props) {
  return (
    <div className="rounded-md border-2 border-warning p-4 text-warning">
      {props.message}
    </div>
  );
}

export default Alert;
