import {
  ApproachNames,
  CodeConfigType,
  ComponentPropDefs,
  ModuleComponentConfig,
} from 'apps/showcase/src/types';

import * as BEM_Components from '@css-methodologies/bem';
import * as OOCSS_Components from '@css-methodologies/oocss';
import * as SMACSS_Components from '@css-methodologies/smacss';

import {
  ComponentSizeValues,
  ComponentVariantValues,
  GlobalColorSrc,
  LibComponentType,
} from '@css-methodologies/shared';
import { PropsWithChildren } from 'react';

function getComponentConfig(
  BEM_Component: LibComponentType,
  propDefs: ComponentPropDefs[]
) {
  const codeConfig: CodeConfigType = {
    component: function Demo({ children, ...props }: PropsWithChildren) {
      return (
        <BEM_Component.Component {...props}>{children}</BEM_Component.Component>
      );
    },
    code: [
      {
        label: `${BEM_Component.name}.tsx`,
        content: BEM_Component.JSX_Src,
        language: 'jsx',
      },
      {
        label: `${BEM_Component.name}.module.css`,
        content: BEM_Component.CSS_Src,
        language: 'css',
      },
      { label: 'global.css', content: GlobalColorSrc, language: 'css' },
    ],
    propDefs,
  };
  return codeConfig;
}

const alertProps: ComponentPropDefs[] = [
  {
    name: 'type',
    type: 'radio',
    values: ComponentVariantValues,
    defaultValue: 'primary',
  },
  {
    name: 'children',
    type: 'text',
    defaultValue: 'This is the content of Alert',
  },
];

const avatarProps: ComponentPropDefs[] = [
  {
    name: 'size',
    type: 'segment',
    values: ComponentSizeValues,
    defaultValue: 'medium',
  },
  {
    name: 'src',
    type: 'text',
    values: ComponentVariantValues,
    defaultValue: '/logo-c.png',
  },
  {
    name: 'alt',
    type: 'text',
    defaultValue: 'image alternate text',
  },
];

const buttonProps: ComponentPropDefs[] = [
  {
    name: 'variant',
    type: 'radio',
    values: ComponentVariantValues,
    defaultValue: 'primary',
  },
  {
    name: 'children',
    type: 'text',
    defaultValue: 'Click here',
  },
];

const chipProps: ComponentPropDefs[] = [
  {
    name: 'variant',
    type: 'radio',
    values: ComponentVariantValues,
    defaultValue: 'primary',
  },
  {
    name: 'children',
    type: 'text',
    values: ComponentVariantValues,
    defaultValue: 'success',
  },
];

export const BemConfigs: ModuleComponentConfig = {
  alert: getComponentConfig(BEM_Components.AlertComponent, alertProps),
  avatar: getComponentConfig(BEM_Components.AvatarComponent, avatarProps),
  button: getComponentConfig(BEM_Components.ButtonComponent, buttonProps),
  chip: getComponentConfig(BEM_Components.ChipComponent, chipProps),
};

export const OocssConfigs: ModuleComponentConfig = {
  alert: getComponentConfig(OOCSS_Components.AlertComponent, alertProps),
  avatar: getComponentConfig(OOCSS_Components.AvatarComponent, avatarProps),
  button: getComponentConfig(OOCSS_Components.ButtonComponent, buttonProps),
  chip: getComponentConfig(OOCSS_Components.ChipComponent, chipProps),
};

export const SmacssConfigs: ModuleComponentConfig = {
  alert: getComponentConfig(SMACSS_Components.AlertComponent, alertProps),
  avatar: getComponentConfig(SMACSS_Components.AvatarComponent, avatarProps),
  button: getComponentConfig(SMACSS_Components.ButtonComponent, buttonProps),
  chip: getComponentConfig(SMACSS_Components.ChipComponent, chipProps),
};

type CSS_Approach_ConfigsType = {
  [key in ApproachNames]: ModuleComponentConfig;
};

export const CSS_Approach_Configs: CSS_Approach_ConfigsType = {
  bem: BemConfigs,
  oocss: OocssConfigs,
  smacss: SmacssConfigs,
  itcss: BemConfigs,
  'atomic-design': BemConfigs,
};
