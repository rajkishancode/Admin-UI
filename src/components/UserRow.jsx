import React, { useState } from "react";

const UserRow = ({
  user,
  handleSelectUser,
  selected,
  handleDeleteUser,
  handleUpdateUser,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    handleUpdateUser(editedUser);

    setIsEditing(false);
  };

  const handleDelete = () => {
    handleDeleteUser(user.id);
  };

  return (
    <tr className={`${selected ? "bg-gray-200" : ""} border-b`}>
      <td className="px-4 py-2">
        <input
          type="checkbox"
          checked={selected}
          onChange={() => handleSelectUser(user.id)}
        />
      </td>
      <td className="px-4 py-2">
        {isEditing ? (
          <input
            type="text"
            value={editedUser.name}
            onChange={(e) =>
              setEditedUser({ ...editedUser, name: e.target.value })
            }
            className="p-2 border border-gray-300 rounded"
          />
        ) : (
          user.name
        )}
      </td>
      <td className="px-4 py-2">
        {isEditing ? (
          <input
            type="text"
            value={editedUser.email}
            onChange={(e) =>
              setEditedUser({ ...editedUser, email: e.target.value })
            }
            className="p-2 border border-gray-300 rounded"
          />
        ) : (
          user.email
        )}
      </td>
      <td className="px-4 py-2">
        {isEditing ? (
          <input
            type="text"
            value={editedUser.role}
            onChange={(e) =>
              setEditedUser({ ...editedUser, role: e.target.value })
            }
            className="p-2 border border-gray-300 rounded"
          />
        ) : (
          user.role
        )}
      </td>
      <td className="px-4 py-2">
        {isEditing ? (
          <button
            onClick={() => handleSave(editedUser)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Save
          </button>
        ) : (
          <>
            <button
              onClick={handleEdit}
              className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(user.id)}
              className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </>
        )}
      </td>
    </tr>
  );
};

export default UserRow;
