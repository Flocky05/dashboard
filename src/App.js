import React, { useEffect, useState } from "react";

const App = () => {
  const [users, setUser] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUser(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);
  return (
    <div className="App">
      <center>
        <table class="table w-[70rem] m-8 ">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-center space-y-4">
            {users?.map((user) => (
              <>
                <tr
                  key={user.id}
                  className="rounded-xl shadow w-full  bg-gray-50 [&>td]:p-8 border"
                >
                  <td>{user.username}</td>
                  <td>
                    <div>
                      <h2 className="font-semibold">Contact</h2>
                    </div>
                    <div>
                      <p>{user.name}</p>
                    </div>
                  </td>
                  <td>
                    <div>
                      <h2 className="font-semibold">City</h2>
                    </div>
                    <div>
                      <p>{user.address.city}</p>
                    </div>
                  </td>
                  <td>
                    <div>
                      <h2 className="font-semibold">phone</h2>
                    </div>
                    <div>
                      <p>{user.phone}</p>
                    </div>
                  </td>
                  <td>
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="bg-red-500 px-3 py-1 rounded-full text-white"
                    >
                      view Detail
                    </button>
                    {isOpen && (
                      <div className="p-4 pt-0 bg-gray-200 border-2">
                        <p className="text-gray-700 text-center">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Laudantium tenetur exercitationem, quisquam
                          eligendi libero vero adipisci voluptatem quod labore
                          sint ex accusantium harum. Possimus qui architecto
                          recusandae, error porro alias?
                        </p>
                      </div>
                    )}
                  </td>
                </tr>
                <br />
              </>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
};

export default App;
