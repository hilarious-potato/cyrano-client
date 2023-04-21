const MainFooter = (props) => {
  return (
    <footer className="mt-16 flex justify-center bg-gray-950 py-8 text-gray-400">
      <div className="m-auto text-center">
        <p className="mb-3">
          <span className="text-primary">cyrano</span> is learning project by{" "}
          <a
            className="text-primary/80 underline underline-offset-2 hover:text-primary"
            href="https://github.com/hilarious-potato"
          >
            hilarious potato.
          </a>
        </p>
        <p className="mb-3">
          come and see our code on github: <br />
          <a
            className="text-primary/80 underline underline-offset-2 hover:text-primary"
            href="https://github.com/hilarious-potato/cyrano-client"
          >
            cyrano client{" "}
          </a>
          &amp;{" "}
          <a
            className="text-primary/80 underline underline-offset-2 hover:text-primary"
            href="https://github.com/hilarious-potato/cyrano-server"
          >
            cyrano server.
          </a>
        </p>
        <p className="mb-3">Made with ❤️ in Berlin!</p>
      </div>
    </footer>
  );
};

export default MainFooter;
