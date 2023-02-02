import React from "react";

const App = () => {
  return (
    <div className="App">
      <center>
        <table class="table w-[50rem] bg-gray-50 m-8 shadow-lg ">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr className="rounded [&>td]:p-8">
              <td>my name</td>
              <td>
                <div>
                  <h2 className="font-semibold">Contact</h2>
                </div>
                <div>
                  <p>Rakibul</p>
                </div>
              </td>
              <td>
                <div>
                  <h2 className="font-semibold">City</h2>
                </div>
                <div>
                  <p>Dhaka</p>
                </div>
              </td>
              <td>
                <div>
                  <h2 className="font-semibold">State</h2>
                </div>
                <div>
                  <p>Bangladesh</p>
                </div>
              </td>
              <td>
                <button className="bg-red-500 px-3 py-1 rounded-full text-white">
                  view Detail
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  );
};

export default App;
