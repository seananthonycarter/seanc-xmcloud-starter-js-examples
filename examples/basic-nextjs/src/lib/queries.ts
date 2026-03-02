export const SIMPLE_QUERY = `
  query GetSampleItem($path: String!) {
    item(path: $path, language: "en") {
      id
      name
    }
  }
`;
