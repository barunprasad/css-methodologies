import {
  ApproachNames,
  CodeConfigType,
  ComponentPropDefs,
  ModuleComponentConfig,
} from 'apps/showcase/src/types';

import * as BEM_Components from '@css-methodologies/bem';
import * as OOCSS_Components from '@css-methodologies/oocss';
import * as SMACSS_Components from '@css-methodologies/smacss';
import * as AtomicDesign from '@css-methodologies/atomic-design';

import {
  ComponentSizeValues,
  ComponentVariantValues,
  GlobalColorSrc,
  LibComponentType,
} from '@css-methodologies/shared';
import { PropsWithChildren } from 'react';

function getComponentConfig(
  Generic_Component: LibComponentType,
  propDefs: ComponentPropDefs[],
  otherProps?: any
) {
  const codeConfig: CodeConfigType = {
    component: function Demo({ children, ...props }: PropsWithChildren) {
      return (
        <Generic_Component.Component {...props} {...otherProps}>
          {children}
        </Generic_Component.Component>
      );
    },
    code: [
      {
        label: `${Generic_Component.name}.tsx`,
        content: Generic_Component.JSX_Src,
        language: 'jsx',
      },
      {
        label: `${Generic_Component.name}.module.css`,
        content: Generic_Component.CSS_Src,
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

const cardProps: ComponentPropDefs[] = [
  {
    name: 'avatarSrc',
    type: 'text',
    defaultValue: '/logo-c.png',
  },
  {
    name: 'avatarAlt',
    type: 'text',
    defaultValue: 'logo',
  },
  {
    name: 'title',
    type: 'text',
    defaultValue: 'Card with logo',
  },
  {
    name: 'description',
    type: 'text',
    defaultValue:
      'Lorem ipsum odor amet, consectetuer adipiscing elit. Feugiat rutrum sed tristique turpis urna. Pretium bibendum primis vivamus sapien iaculis; blandit tellus maximus. Dictum purus natoque natoque euismod et',
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

const formProps: ComponentPropDefs[] = [
  {
    name: 'buttonVariant',
    type: 'radio',
    values: ComponentVariantValues,
    defaultValue: 'primary',
  },
  {
    name: 'submitLabel',
    type: 'text',
    defaultValue: 'Submit Form',
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

export const AtomicDesignConfigs: ModuleComponentConfig = {
  atoms: getComponentConfig(AtomicDesign.ButtonComponent, buttonProps),
  molecules: getComponentConfig(AtomicDesign.FormComponent, formProps),
  organisms: getComponentConfig(AtomicDesign.CardComponent, cardProps, {
    actions: [{ label: 'Save', onClick: () => console.log }],
  }),
};

type CSS_Approach_ConfigsType = {
  [key in ApproachNames]: ModuleComponentConfig;
};

export const CSS_Approach_Configs: CSS_Approach_ConfigsType = {
  bem: BemConfigs,
  oocss: OocssConfigs,
  smacss: SmacssConfigs,
  itcss: BemConfigs,
  'atomic-design': AtomicDesignConfigs,
};
