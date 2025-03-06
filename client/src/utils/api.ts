import { GET_SQUIRRELS } from "./queries";

export const fetchSquirrels = async () => {
  const response = await fetch("https://squirrelly-test.onrender.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: GET_SQUIRRELS }),
  });

  const { data } = await response.json();
  return data.getSquirrels;
};