import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";
//second argument
const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();

    setUsers(users);
    console.log(users);
  };
  useEffect(() => {
    getUsers();
    // if we don't setup an empty array, or depencency array it will be an infinite loop because the useEffect runs after each rerender
  }, []);
  return (
    <>
      <h3>github users</h3>
      <ul className="users">
        {/* we iterate over all users for each and every users */}
        {users.map((user) => {
          // user is an object so we desctruct the user 
          const { id, login, avatar_url, html_url } = user;
          return (
            // remember each and every time we have a list we have to pass this unique key
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
