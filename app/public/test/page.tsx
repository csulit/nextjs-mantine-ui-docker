import { headers } from 'next/headers';
import db from '@/database';

export default async function PublicTest() {
  const header = headers();
  const referer = header.get('referer') || 'no-referer';

  const hostname = await db.query.hostname.findFirst({
    columns: { domainId: true },
    where: (fields, { eq }) => eq(fields.domain, referer),
  });

  console.log(hostname);

  return <div>asdasd</div>;
}
