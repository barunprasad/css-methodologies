import {
  ApproachNames,
  CodeConfigType,
  ComponentPropDefs,
  ModuleComponentConfig,
} from 'apps/showcase/src/types';

import * as BEM_Components from '@css-methodologies/bem';
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

export const BemConfigs: ModuleComponentConfig = {
  alert: getComponentConfig(BEM_Components.AlertComponent, [
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
  ]),
  avatar: getComponentConfig(BEM_Components.AvatarComponent, [
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
  ]),
  button: getComponentConfig(BEM_Components.ButtonComponent, [
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
  ]),

  chip: getComponentConfig(BEM_Components.ChipComponent, [
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
  ]),
};

type CSS_Approach_ConfigsType = {
  [key in ApproachNames]: ModuleComponentConfig;
};

export const CSS_Approach_Configs: CSS_Approach_ConfigsType = {
  bem: BemConfigs,
  oocss: BemConfigs,
  smacs: BemConfigs,
  itcss: BemConfigs,
  'atomic-design': BemConfigs,
};
