import React from "react";

async function todos() {
  let data = await fetch("https://jsonplaceholder.typicode.com/todos");
  data = await data.json();
  return data;
}

const DummyCom = async () => {
  const todosList = await todos();
  return (
    <>
      {todosList?.map((item, idx) => {
        return (
          <h1 key={idx}>
            {item.id} and the title is {item.title}
          </h1>
        );
      })}
    </>
  );
};

export default DummyCom;
