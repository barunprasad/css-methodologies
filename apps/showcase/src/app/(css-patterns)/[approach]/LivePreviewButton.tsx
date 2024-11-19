'use client';
import { useParams } from 'next/navigation';
import { NavigateButton } from 'apps/showcase/src/ui/components';

export function LivePreviewButton() {
  const { approach } = useParams();
  return <NavigateButton href={`/${approach}/alert`} label="Live preview" />;
}
