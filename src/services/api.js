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
  const response = await fetch(`${API_URL}/${apiPath}`);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}
export async function getLinks(folderId = "") {
  const query = `folderId=${folderId}`;
  const response = await fetch(`${API_URL}/users/1/links?${query}`);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}

export async function getFolders(userId = "") {
  const response = await fetch(`${API_URL}/users/${userId}/folders`);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}
