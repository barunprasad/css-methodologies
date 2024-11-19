'use client';
import { ModuleComponentNames } from 'apps/showcase/src/types';
import { Sidebar } from './Sidebar';
import { useParams } from 'next/navigation';
const items = Object.keys(ModuleComponentNames);

export function SidebarComponents() {
  const { approach } = useParams();
  return <Sidebar items={items} urlPrefix={approach as string} />;
}
