import { useEffect } from "react";
import "./App.css";
import { useQuery } from "react-query";
import { fetchUser } from "./utils/helper";
import Loading from "./Components/Loading";
import Error from "./Components/Error";

const App: React.FC = () => {
  const { data, isLoading, isError, error, refetch } = useQuery(
    "user",
    fetchUser
  );

  const { name, email } = data?.results[0] || {};

  useEffect(() => {
    if (name && email) {
      localStorage.setItem(
        "userName",
        `${name?.title} ${name?.first} ${name?.last}`
      );
      localStorage.setItem("userEmail", email);
    }
  }, [name, email]);

  const handleClick = () => {
    refetch();
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error message={(error as Error).message} />;
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="mb-6">
        <h2 className="text-lg font-semibold"> User Name:</h2>
        <p>
          {name?.title} {name?.first} {name?.last}
        </p>
        <h2 className="text-lg font-semibold">Email:</h2>
        <p>{email}</p>
      </div>
      <div>
        <button
          className="bg-violet-600 px-3 py-2 rounded-md text-yellow-50 hover:bg-violet-800"
          onClick={handleClick}
        >
          Fetch User
        </button>
      </div>
    </div>
  );
};

export default App;
