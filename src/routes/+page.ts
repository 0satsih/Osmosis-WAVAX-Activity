import type { PageLoad } from './$types';

export const load: PageLoad = (async ({ fetch }) => {
    const res = await fetch(`./src/lib/data/data.json`);
    const item = await res.json();
    return { item };
  }) satisfies PageLoad;