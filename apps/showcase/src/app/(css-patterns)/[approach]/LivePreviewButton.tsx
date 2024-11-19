'use client';
import { useParams } from 'next/navigation';
import { NavigateButton } from 'apps/showcase/src/ui/components';
import { ApproachNames } from 'apps/showcase/src/types';

export function LivePreviewButton() {
  const { approach } = useParams();
  const isITCSS = (approach as string).toLowerCase() === ApproachNames.itcss;

  if (isITCSS) {
    return null;
  }
  const componentName =
    (approach as string).toLowerCase() === ApproachNames['atomic-design']
      ? 'atoms'
      : 'alert';

  return (
    <NavigateButton
      href={`/${approach}/${componentName}`}
      label="Live preview"
    />
  );
}
