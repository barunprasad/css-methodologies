export type LibComponentType = {
  Component: JSX.ElementType;
  JSX_Src: string;
  CSS_Src: string;
  name: string;
};

export type ComponentVariants =
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'error';

export type ComponentSizes = 'small' | 'medium' | 'large';
