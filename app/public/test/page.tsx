import { headers } from 'next/headers';

export default async function PublicTest() {
  const header = headers();

  for (const [key, value] of header.entries()) {
    console.log(`${key}: ${value}`);
  }

  return <div>asdasd</div>;
}
