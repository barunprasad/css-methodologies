import { LibComponentType } from '@css-methodologies/shared';
import { Button } from './Button';
import { Button_CSS_Src, Button_JSX_Src } from './Source';

export { Button } from './Button';
export { Button_JSX_Src, Button_CSS_Src } from './Source';

export const ButtonComponent: LibComponentType = {
  Component: Button,
  JSX_Src: Button_JSX_Src,
  CSS_Src: Button_CSS_Src,
  name: 'Button',
};
