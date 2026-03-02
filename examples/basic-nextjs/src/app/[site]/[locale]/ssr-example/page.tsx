import { fetchFromEdge } from '../../../../lib/edge-client';
import { SIMPLE_QUERY } from '../../../../lib/queries';

export default async function SampleGraphQL() {
  const data = await fetchFromEdge(SIMPLE_QUERY, { path: '/sitecore/content/tech-savvy/monarch-brand-website/Home' });

  const name = data?.item?.fields?.name?.value ?? 'No title found';

  return (
    <div style={{ padding: 10 }}>
      <h1>Hello from SSR</h1>
      <p>{name}</p>
      <p>AAAA</p>
    </div>
  );
}


