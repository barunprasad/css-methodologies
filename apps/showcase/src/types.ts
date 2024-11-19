export interface FlatRoute {
  path: string;
  label: string;
  clickable?: boolean;
}

export interface Route extends FlatRoute {
  children?: Route[];
}

export interface RouteMetadata extends FlatRoute {
  order?: number;
  children?: RouteMetadata[];
}

export type ComponentPropType =
  | 'ddl'
  | 'text'
  | 'number'
  | 'boolean'
  | 'segment'
  | 'radio';

export interface ComponentPropDefs {
  name: string;
  type: ComponentPropType;
  values?: string[];
  defaultValue?: string | number | boolean;
}

export interface CodeContentType {
  label: string;
  content: string;
  language?: string;
}

export interface CodeConfigType {
  component: React.JSX.ElementType;
  code: CodeContentType[];
  propDefs: ComponentPropDefs[];
}

export type MetaType = {
  title: string;
  subTitle: string;
  slug: string;
};

export interface Document {
  id: string;
  title: string;
  content: string;
  parent?: string;
}

export type SearchableDocument = {
  id: string;
  slug: string;
  content: string;
  parentTitle: string;
  parentSlug: string;
};

export enum ModuleComponentNames {
  alert = 'alert',
  avatar = 'avatar',
  button = 'button',
  chip = 'chip',
}

export type ModuleComponentConfig = {
  [key in ModuleComponentNames]: CodeConfigType;
};

export enum ApproachNames {
  bem = 'bem',
  oocss = 'oocss',
  smacss = 'smacss',
  'atomic-design' = 'atomic-design',
  itcss = 'itcss',
}

export type ExplainationType = { [key in ApproachNames]: string };

export const ApproachNameDescriptions: ExplainationType = {
  [ApproachNames.bem]: 'Block-Element-Modifier',
  [ApproachNames.oocss]: 'Object-Oriented CSS',
  [ApproachNames.smacss]: 'Scalable and Modular Architecture for CSS',
  [ApproachNames['atomic-design']]: '',
  [ApproachNames.itcss]: 'Inverted Triangle CSS',
};
