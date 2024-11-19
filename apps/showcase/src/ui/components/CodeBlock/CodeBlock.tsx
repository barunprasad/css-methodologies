'use client';
import React, { useState } from 'react';
import { Language } from 'prism-react-renderer';
import styles from './CodeBlock.module.css';
import { ChevronRightIcon } from '@arctic-kit/icons';
import { CodeBlockSection } from './CodeBlockSection';
import { Tab, TabPanel, TabPanels, Tabs } from '@arctic-kit/snow';
import { CodeContentType } from 'apps/showcase/src/types';

interface CodeBlockProps {
  language?: Language;
  render?: React.ReactNode;
  title?: string;
  showLineNumbers?: boolean;
  codeContent: CodeContentType[];
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  codeContent,
  language = 'tsx',
  title,
  render,
  showLineNumbers = false,
}) => {
  const [isCodeVisible, setIsCodeVisible] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);

  const handleToggle = () => {
    setIsCodeVisible((prev) => !prev);
  };

  const handleCopy = (text: any) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className={styles.wrapper}>
      <section className={styles.header}>
        <div className={styles.fullWidth}>
          <div className={styles.headerContent}>
            {title && (
              <div className={styles.titleHeader}>
                <div className={styles.title}>{title}</div>
              </div>
            )}
            {render}
          </div>
        </div>
      </section>
      <section className={`${styles.content}`}>
        <button
          className={`${styles.button} ${styles.fullWidth}`}
          onClick={handleToggle}
        >
          <ChevronRightIcon
            className={`${styles.svg} ${isCodeVisible ? styles.rotate : ''}`}
          />
          {isCodeVisible ? 'Hide Code' : 'Show Code'}
        </button>
      </section>
      {isCodeVisible && (
        <>
          <Tabs>
            {codeContent.map((item, index) => (
              <Tab
                key={`tab-${item.label}-${index}`}
                label={item.label}
                index={index}
                selectedTabIndex={tabIndex}
                onClick={() => setTabIndex(index)}
              />
            ))}
          </Tabs>
          <TabPanels>
            {codeContent.map((item, index) => (
              <TabPanel
                key={`tabpanel-${item.label}-${index}`}
                label={item.label}
                selected={tabIndex === index}
              >
                <CodeBlockSection
                  onCopy={handleCopy}
                  language={item.language || language}
                  showLineNumbers={showLineNumbers}
                  visible={isCodeVisible}
                >
                  {item.content}
                </CodeBlockSection>
              </TabPanel>
            ))}
          </TabPanels>
        </>
      )}
    </div>
  );
};

export { CodeBlock };
