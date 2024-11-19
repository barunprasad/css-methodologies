import { ComponentPropType } from '../../../types';
import {
  OptionType,
  RadioGroup,
  SegmentedControl,
  SegmentedControlButton,
  Select,
  Switch,
  TextInput,
} from '@arctic-kit/snow';
import { useMemo } from 'react';
function autoCapitalize(str: string) {
  if (!str) {
    return '';
  }
  // Add a space before each uppercase letter, then capitalize the first letter of the resulting words
  return str
    .replace(/([A-Z])/g, ' $1') // Insert space before each uppercase letter
    .replace(/\b\w/g, (char) => char.toUpperCase()) // Capitalize the first letter of each word
    .trim(); // Remove any leading spaces that may have been added
}

type PropsRendererProps = {
  name: string;
  type: ComponentPropType;
  onChange: (value: string | boolean) => void;
  value: string | boolean;
  values?: string[];
};
export function PropsRenderer({
  name,
  type,
  onChange,
  value,
  values,
}: PropsRendererProps) {
  const label = useMemo(() => autoCapitalize(name), [name]);
  if (type === 'boolean') {
    return (
      <Switch
        id={name}
        label={label}
        checked={value as boolean}
        onToggle={() => onChange(!(value as boolean))}
      />
    );
  }

  if (type === 'ddl') {
    return (
      <Select
        label={label}
        id={name}
        value={value ? autoCapitalize(value as string) : ''}
        options={
          values?.map((item) => ({
            label: autoCapitalize(item),
            value: item,
          })) as OptionType[]
        }
        onChange={(val) => onChange((val as OptionType)?.value)}
      />
    );
  }

  if (type === 'text' || type === 'number') {
    return (
      <TextInput
        type={type}
        label={label}
        value={value as string}
        onChange={(event) => onChange(event.target.value)}
      />
    );
  }

  if (type === 'segment') {
    return (
      <SegmentedControl
        initialSelectedIndex={values?.findIndex((item) => item === value) ?? -1}
        label={label}
      >
        {values?.map((item) => (
          <SegmentedControlButton key={item} onClick={() => onChange(item)}>
            {autoCapitalize(item)}
          </SegmentedControlButton>
        ))}
      </SegmentedControl>
    );
  }

  if (type === 'radio') {
    return (
      <RadioGroup
        label={label}
        options={
          values?.map((item) => ({
            label: autoCapitalize(item),
            value: item,
          })) as OptionType[]
        }
        value={(value as string) || ''}
        id={label}
        onChange={(val) => onChange(val)}
      ></RadioGroup>
    );
  }

  return null;
}
