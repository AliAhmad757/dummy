import React from "react";

const page = async (props) => {
  let data = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${props.params.id}`
  );
  data = await data.json();
  console.log(data);
  return (
    <>
      <h1>
        {data.id} and the title is {data.title}
      </h1>
    </>
  );
};

export default page;

// export async function generateStaticParams() {
//   let data = await fetch(`https://jsonplaceholder.typicode.com/todos`);
//   data = await data.json();
//   return data.map((user) => ({
//     id: user.id.toString(),
//   }));
// }
