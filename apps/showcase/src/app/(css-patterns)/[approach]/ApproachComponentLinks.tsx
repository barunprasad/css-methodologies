'use client';

import { Stack } from '@arctic-kit/snow';
import { ModuleComponentNames } from 'apps/showcase/src/types';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function ApproachComponentLinks() {
  const { approach } = useParams();
  return (
    <Stack spacing={3}>
      {Object.keys(ModuleComponentNames).map((key) => (
        <Link key={key} href={`/${approach}/${key}`}>
          {key}
        </Link>
      ))}
    </Stack>
  );
}
