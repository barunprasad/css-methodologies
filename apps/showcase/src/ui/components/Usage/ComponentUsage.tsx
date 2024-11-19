'use client';
import { PropsWithChildren, useEffect, useState } from 'react';
import styles from './ComponentUsage.module.css';
import { PropsRenderer } from './PropsRenderer';
import { ComponentPropDefs } from '../../../types';

export function ComponentUsage({
  children,
  values = {},
  onChange,
  propDefs,
}: PropsWithChildren<{
  onChange: (name: string, value: any) => void;
  values: any;
  propDefs: ComponentPropDefs[];
}>) {
  const [componentProps, setComponentProps] = useState<any>(values);
  useEffect(() => {
    if (values && Object.keys(values).length > 0) {
      setComponentProps({ ...values });
    }
  }, [values]);
  return (
    <div className={styles.container}>
      <div className={styles.codeContainer}>{children}</div>
      {propDefs.length > 0 && (
        <div className={styles.propsContainer}>
          {propDefs.map((prop) => (
            <PropsRenderer
              key={prop.name}
              onChange={(val) => onChange(prop.name, val)}
              {...prop}
              value={componentProps[prop.name]}
            />
          ))}
        </div>
      )}
    </div>
  );
}
