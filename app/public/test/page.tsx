import { headers } from 'next/headers';

export default async function PublicTest() {
  const header = headers();

  console.log(header.get('x-forwarded-host'));

  return <div></div>;
}
