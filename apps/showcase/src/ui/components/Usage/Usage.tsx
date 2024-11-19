import { PropsWithChildren, useState } from 'react';
import { CodeBlock } from '../CodeBlock';
import { ComponentUsage } from './ComponentUsage';
import { CodeContentType, ComponentPropDefs } from '../../../types';
import styles from './ComponentUsage.module.css';

function parseStateProps(propsDefinition: ComponentPropDefs[]) {
  let props: any = {};
  if (propsDefinition.length > 0) {
    for (const def of propsDefinition) {
      if (def.defaultValue) {
        props[def.name] =
          def.defaultValue || (def.type === 'boolean' ? false : '');
      }
    }
  }
  return props;
}

export function Usage({
  code,
  component: Component,
  propDefs,
  title = 'Live Preview',
  separator = '=',
}: PropsWithChildren<{
  component: any;
  code: CodeContentType[];
  propDefs: ComponentPropDefs[];
  separator?: '=' | ':';
  title?: string;
}>) {
  const [componentProps, setComponentProps] = useState<any>({
    ...parseStateProps(propDefs),
  });

  const joinString = separator === ':' ? ', \n\t  ' : ' ';

  const propsString = Object.entries(componentProps)
    .map(([key, value]) => {
      if (key === 'children') {
        return '';
      } else if (typeof value === 'string') {
        return `${key}${separator}"${value}"`;
      } else if (typeof value === 'boolean') {
        return value ? (separator === ':' ? `${key}:true` : key) : ''; // Only include boolean props if they are true
      } else if (typeof value === 'number') {
        return `${key}={${value}}`;
      } else {
        return '';
      }
    })
    .filter(Boolean) // Remove any empty strings (e.g., for false boolean values)

    .join(joinString);

  const updatedCode = code.map((codeItem) => ({
    ...codeItem,
    content: codeItem.content
      .replace('{{props}}', propsString)
      .replace('{{children}}', componentProps.children as string),
  }));

  return (
    <>
      <div className={styles.usageContentTitle}>{title}</div>
      <CodeBlock
        render={
          <ComponentUsage
            onChange={(name, value) =>
              setComponentProps((prevProps: any) => ({
                ...prevProps,
                [name]: value,
              }))
            }
            values={componentProps}
            propDefs={propDefs}
          >
            <Component {...componentProps} />
          </ComponentUsage>
        }
        codeContent={updatedCode}
      />
    </>
  );
}
