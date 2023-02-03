import React, { useEffect, useState } from "react";
import Item from "./Page/accordion/Item";

const App = () => {
  const [users, setUser] = useState([]);
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
          <tbody className="space-y-4 ">
            {users?.map((user) => (
              <Item user={user} />
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
};

export default App;
