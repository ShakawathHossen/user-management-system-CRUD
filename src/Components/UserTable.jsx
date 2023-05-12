import React from 'react';

const UserTable = ({user}) => {
    const {_id,name, email, gender, phone, nationalid, skill, photo}=user;
    return (
        <div>
              <table className="min-w-full divide-y divide-gray-200">
        <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap"><img className='w-12' src={user.photo} alt="" /></td>
              <td className="px-6 py-4 whitespace-nowrap">{name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{gender}</td>
              <td className="px-6 py-4 whitespace-nowrap">{email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{phone}</td>
              <td className="px-6 py-4 whitespace-nowrap">{skill}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.nationalid}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  className="py-2 px-4 mr-2"
                  onClick={() => handleUpdate(user.id)}
                >
                  <img src="https://i.ibb.co/G08dvDK/edit-button.png" alt="" />
                </button>
                <button
                  className="py-2 px-4 rounded"
                  onClick={() => handleDelete(user.id)}
                >
                  <img src="https://i.ibb.co/b1ngMDt/delete-button.png" alt="" />
                </button>
              </td>
            </tr>
        </tbody>
      </table>
        </div>
    );
};

export default UserTable;