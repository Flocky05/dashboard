import { useState } from "react";

const Item = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(user);
  return (
    <>
      <>
        <div
          key={user.id}
          className="rounded-xl shadow w-full grid grid-cols-5 bg-gray-50 [&>td]:p-8 "
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
          </td>
          {isOpen && (
            <div className="p-4 pt-0 col-span-full bg-gray-50 ">
              <div className="border rounded-xl mt-16 shadow-lg p-10 m-6 [&_h2]:font-semibold">
                <strong>Description</strong>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Iure, aliquam? Illum nam delectus, doloremque praesentium
                  labore laborum consequuntur qui amet eligendi nisi optio eius.
                  Optio laboriosam fugiat quae molestiae dignissimos.
                </p>

                <div className="grid grid-cols-12 mt-10">
                  <div className="col-span-4">
                    <h2>Contact Person</h2>
                    <p>{user.name}</p>
                    <h2>Designation</h2>
                    <p>Imran</p>
                    <h2>Emails </h2>
                    <p>{user.email}</p>
                    <h2> Phones</h2>
                    <p>{user.phone}</p>
                  </div>
                  <div className="col-span-8">
                    <h2>Address </h2>
                    <p>{user.address.street}</p>
                    <h2>City</h2>
                    <p>{user.address.city}</p>
                    <h2>Zipcode</h2>
                    <p>{user.address.zipcode}</p>
                    <h2>Country</h2>
                    <p>India</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <br />
      </>
    </>
  );
};

export default Item;
