'use client';
import { Breadcrumbs } from '@arctic-kit/snow';
import {
  ApproachNameDescriptions,
  ApproachNames,
  ExplainationType,
} from 'apps/showcase/src/types';
import { useParams } from 'next/navigation';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export function ApproachExplaination({ data }: { data: ExplainationType }) {
  const { approach } = useParams();

  const content = data[approach as ApproachNames];
  const displayableApproach = (approach as string)
    .replace('-', ' ')
    .toUpperCase();

  const approachDescription =
    ApproachNameDescriptions[approach as ApproachNames];

  return (
    <>
      <Breadcrumbs
        items={[
          { title: 'Home', href: '/' },
          { title: displayableApproach, href: `/${approach}` },
        ]}
      />
      <h1>
        <strong>{displayableApproach}</strong>
        {approachDescription && (
          <span>({ApproachNameDescriptions[approach as ApproachNames]})</span>
        )}
      </h1>
      <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
    </>
  );
}
