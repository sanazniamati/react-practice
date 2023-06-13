import React from "react";

function List({ users, searchTerm }) {
  return (
    <ul>
      {users
        .filter(({ name }) => name.includes(searchTerm))
        .map((item) => (
          <li key={item.id}>
            {item.id}: {item.name}
          </li>
        ))}
    </ul>
  );
}

export default List;
