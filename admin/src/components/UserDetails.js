import React from "react";
import { selectUser } from "../StoreRedux/UserSlice";
import { useSelector } from "react-redux";
const UserDetails = () => {
const userStore= useSelector(selectUser)
    return (
    <>
      <div class="flex flex-wrap gap-8 p-4 m-4 items-center bg-gray-50 dark:bg-gray-900 max-h-full w-full justify-center">
        {userStore.map((user, id) => (
          <div class="max-w-full"  key={id}>
            <div class="bg-white shadow-xl rounded-lg py-3">
              <div class="photo-wrapper ">
                <img
                  class="w-32 h-32 rounded-full mx-auto"
                  src={user.image}
                  alt="John Doe"
                />
              </div>

              <div class="p-4">
                <h3
                  class=" text-xl text-gray-900 font-medium leading-8"
                 
                >
                  {user.company.department}
                </h3>
                <div class=" text-gray-400 text-xs font-semibold">
                  <p></p>
                </div>
                <table class="text-xs my-3">
                  <tbody>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Name:
                      </td>
                      <td class="px-2 py-2">{user.maidenName}</td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        UserID:
                      </td>
                      <td class="px-2 py-2">{user.ssn}</td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">DOB</td>
                      <td class="px-2 py-2">{user.birthDate}</td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Primary Market
                      </td>
                      <td class="px-2 py-2">{user.address.city}</td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Email:
                      </td>
                      <td class="px-2 py-2">{user.email}</td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Password:
                      </td>
                      <td class="px-2 py-2">{user.password}</td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Account:
                      </td>
                      <td class="px-2 py-2 text-blue-500">Verified</td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Status
                      </td>
                      <td class="px-2 py-2">Available</td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Change Status
                      </td>
                      <td class="px-2 py-2">
                        <select id="status" name="status">
                          <option value="volvo">Active</option>
                          <option value="saab">Offline</option>
                          <option value="fiat">Break</option>
                          <option value="audi">Leave</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>{" "}
                </table>

                <div class="text-center my-3">
                  <button
                    class="text-large text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                    href="#"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserDetails;
