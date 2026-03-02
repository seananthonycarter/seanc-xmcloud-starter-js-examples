export async function fetchFromEdge(query: string, variables: Record<string, string> = {}) {
  console.log('hello');
  const response = await fetch(`https://xmc-sitecoresaa3d8b-seancxmclou93ba-dev2a35.sitecorecloud.io/sitecore/api/graph/edge`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'sc_apikey': '28d7b5cec44d459b9a8a0bcec5afe67b'
    },
    body: JSON.stringify({ query, variables })
  });

  const json = await response.json();

  console.log(json.data.stringify);
  return json.data;
}
