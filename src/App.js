import React from "react";

const App = () => {
  return (
    <div className="App">
      <center>
        <table class="table w-[32rem] border-2 bg-gray-50 rounded-lg m-8 p-11">
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
            <tr>
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
                <button className="bg-orange-600 px-2 py-1 rounded-md text-white">
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
