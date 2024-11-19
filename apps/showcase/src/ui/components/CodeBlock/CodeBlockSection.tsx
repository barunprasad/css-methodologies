'use client';
import { Highlight, Language, themes } from 'prism-react-renderer';
import { ActionButton } from './ActionButton';
import styles from './CodeBlockSection.module.scss';
import clsx from 'clsx';

export function CodeBlockSection({
  children,
  language = 'js',
  showLineNumbers,
  onCopy,
  visible = true,
}: {
  children: string;
  language?: Language;
  showLineNumbers?: boolean;
  onCopy?: (text: string) => void;
  visible?: boolean;
}) {
  const handleCopyClick = (text: any) => {
    if (onCopy) {
      onCopy(text);
    } else {
      navigator.clipboard.writeText(text);
    }
  };

  return (
    <section className={clsx(styles.codeBlock, { [styles.visible]: visible })}>
      <Highlight
        code={children.trim()}
        language={language}
        theme={themes.oneLight}
      >
        {({ tokens, getLineProps, getTokenProps }) => (
          <pre className={styles.container}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {showLineNumbers && (
                  <span className={styles.lineNumber}>{i + 1}</span>
                )}
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
      <ActionButton onClick={() => handleCopyClick(children.trim())} />
    </section>
  );
}
