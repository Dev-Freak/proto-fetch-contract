export const fetchAPI = async (endpoint, payload) =>
  await fetch(`/api/${endpoint}`, {
    method: "POST",
    body: JSON.stringify(payload),
  })
    .then(res => res.json())
    .then(data => data)
    .catch(e => console.log(e));
