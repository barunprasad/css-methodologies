'use client';
import {
  ApproachNames,
  ModuleAtomicComponentNames,
  ModuleComponentNames,
} from 'apps/showcase/src/types';
import { Sidebar } from './Sidebar';
import { useParams } from 'next/navigation';
const items = Object.keys(ModuleComponentNames);
const atomicItems = Object.keys(ModuleAtomicComponentNames);

export function SidebarComponents() {
  const { approach } = useParams();
  const sidebarItems =
    (approach as string).toLowerCase() === ApproachNames['atomic-design']
      ? atomicItems
      : items;
  return <Sidebar items={sidebarItems} urlPrefix={approach as string} />;
}
