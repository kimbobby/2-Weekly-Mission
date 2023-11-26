const API_URL = "https://bootcamp-api.codeit.kr/api";

// async function postApiItems({ value }) {
//   const response = await fetch(`${API_URL}/`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(value),
//   });
//   return response;
// }
export async function getApiItems(apiPath) {
  const path = `${apiPath}`;
  const response = await fetch(`${API_URL}/${path}`);
  const body = await response.json();
  return body;
}
