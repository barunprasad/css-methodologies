'use client';
import { Usage } from 'apps/showcase/src/ui/components/Usage';
import { useParams } from 'next/navigation';
import { ApproachNames, ModuleComponentNames } from 'apps/showcase/src/types';
import { useMemo } from 'react';
import { CSS_Approach_Configs } from 'apps/showcase/src/app/(css-patterns)/configs';
import { Breadcrumbs } from '@arctic-kit/snow';

export default function Index() {
  const { component, approach } = useParams();

  const codeConfig = useMemo(
    () =>
      CSS_Approach_Configs[approach as ApproachNames][
        component as ModuleComponentNames
      ],
    [component]
  );
  const displayableApproach = (approach as string)
    .replace('-', ' ')
    .toUpperCase();

  const displayableComponent = (component as string)
    .replace('-', ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());

  console.log('generic:came here with component name as: ', component);
  console.log('approach: ', approach);
  return (
    <>
      <Breadcrumbs
        items={[
          { title: 'Home', href: '/' },
          { title: displayableApproach, href: `/${approach}` },
          { title: displayableComponent, href: `/${approach}/${component}` },
        ]}
      />
      <Usage
        code={codeConfig.code}
        component={codeConfig.component}
        propDefs={codeConfig.propDefs}
      />
    </>
  );
}
