import { LibComponentType } from '@css-methodologies/shared';
import { CSS_Src, JSX_Src } from './Source';
import { Chip } from './Chip';

export { Chip } from './Chip';
export { JSX_Src as Chip_JSX_Src, CSS_Src as Chip_CSS_Src } from './Source';

export const ChipComponent: LibComponentType = {
  Component: Chip,
  JSX_Src,
  CSS_Src,
  name: 'Chip',
};
