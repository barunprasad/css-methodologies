import { LibComponentType } from '@css-methodologies/shared';
import { Alert } from './Alert';
import { Alert_CSS_Src, Alert_JSX_Src } from './Source';

export { Alert } from './Alert';
export { Alert_JSX_Src, Alert_CSS_Src } from './Source';

export const AlertComponent: LibComponentType = {
  Component: Alert,
  JSX_Src: Alert_JSX_Src,
  CSS_Src: Alert_CSS_Src,
  name: 'Alert',
};
