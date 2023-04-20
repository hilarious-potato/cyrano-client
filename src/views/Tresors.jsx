import { useContext, useEffect, useState } from "react";
import tresorService from "../services/tresor.service";
import CreateTresor from "../components/CreateTresor";
import { AuthContext } from "../context/auth.context";

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
  return (
    <>
      <h2>Create Tresor</h2>
      <CreateTresor fetchTresors={fetchTresors} />
      {tresorList &&
        tresorList.length > 0 &&
        tresorList.map((tresor) => (
          <div key={tresor._id}>
            <h2>{tresor.title}</h2>
            <a href={"/tresors/" + tresor._id}>Open Tresor</a>
          </div>
        ))}
    </>
  );
}

export default Tresors;
