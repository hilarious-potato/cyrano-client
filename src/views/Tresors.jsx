import { useContext, useEffect, useState } from "react";
import tresorService from "../services/tresor.service";
import CreateTresor from "../components/CreateTresor";
import { AuthContext } from "../context/auth.context";
import Header from "../components/Header";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import TypedSpinner from "../components/TypedSpinner";

function Tresors() {
  const { authenticateUser, user } = useContext(AuthContext);
  const [tresorList, setTresorList] = useState(null);
  const fetchTresors = () => {
    console.log("now we are in tresors and user is", user);
    if (user) {
      tresorService.fetchUserList().then((usersTresors) => {
        setTresorList(usersTresors);
      });
    }
  };
  useEffect(() => {
    fetchTresors();
    // setTresorList(user.tresors);
  }, [user]);
  const handleDelete = (tresorId) => {
    tresorService.deleteTresor(tresorId).then((deletedTresor) => {
      console.log("we deleted", deletedTresor);
      fetchTresors();
    });
  };
  const renderEmptyTresors = () => {
    if (!tresorList || tresorList.length === 0) {
      return (
        <div>
          <TypedSpinner context="emptyTresors" />
        </div>
      );
    }
    return <></>;
  };
  return (
    <section className="xxl:w-1/3 relative lg:w-2/3">
      {renderEmptyTresors()}
      <CreateTresor fetchTresors={fetchTresors} />
      <div>
        {tresorList && tresorList.length > 0 && (
          <>
            <Header title="your tresors" />
            {tresorList.map((tresor) => {
              return (
                <div
                  className="my-4 grid w-full gap-2 rounded-xl p-4 outline-1 hover:outline  hover:outline-gray-500"
                  key={tresor._id}
                >
                  <h2 className="text-xl ">{tresor.title}</h2>
                  <div className="grid w-full grid-cols-4 gap-2">
                    <Button
                      onClick={() => {
                        handleDelete(tresor._id);
                      }}
                      warning
                      className="col-start-3"
                    >
                      delete
                    </Button>
                    <Button primary className="">
                      <Link to={"/tresors/" + tresor._id}>open</Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </section>
  );
}

export default Tresors;
