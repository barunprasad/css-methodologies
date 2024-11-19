import Link from 'next/link';
import styles from './page.module.css';
import Image from 'next/image';
import { Card, NavigateButton } from 'apps/showcase/src/ui/components';
import { ApproachNames } from 'apps/showcase/src/types';
import { Grid, GridColumn, GridRow } from '@arctic-kit/snow';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <section className={styles.heading}>
        <section className={styles.headingTextContainer}>
          <span>Foundations of CSS Design Patterns</span>

          <p>
            Writing scalable and maintainable CSS has always been a challenge,
            especially for large applications with complex UI structures. The
            core issue lies in how CSS can quickly become chaotic, with styles
            bleeding across components, confusing names, and stylesheets growing
            uncontrollably.
          </p>
          <p>
            To address these challenges, various CSS design methodologies have
            been developed. Let's try and understand a few of these
            methodologies and how they help in organizing and structuring CSS
            effectively.
          </p>
          <NavigateButton href="/bem" label={`Let's explore`} />
        </section>
        <section className={styles.headingImgContainer}>
          <Image
            src="/home-logo.webp"
            width={400}
            height={400}
            alt="home hero image"
          />
        </section>
      </section>
      <section className={styles.content}>
        <h2>Why CSS Design Patterns Matter?</h2>
        <h3>
          CSS design patterns provide a structured approach to writing styles
          that are:
        </h3>
        <section className={styles.contentCards}>
          <Grid spacing={2}>
            <GridRow>
              <GridColumn lg={6}>
                <Card
                  title={'Scalable'}
                  href={`/${ApproachNames.bem}`}
                  hrefLabel="Learn more"
                  description="Suitable for growing applications without compromising performance"
                />
              </GridColumn>
              <GridColumn lg={6}>
                <Card
                  title={'Maintainable'}
                  href={`/${ApproachNames.bem}`}
                  hrefLabel="Learn more"
                  description="Easy to update and debug without introducing side effects"
                />
              </GridColumn>
              <GridColumn lg={6}>
                <Card
                  title={'Reusable'}
                  href={`/${ApproachNames.bem}`}
                  hrefLabel="Learn more"
                  description="Encouraging consistency across components and pages"
                />
              </GridColumn>
              <GridColumn lg={6}>
                <Card
                  title={'Collaborative'}
                  href={`/${ApproachNames.bem}`}
                  hrefLabel="Learn more"
                  description="Allowing teams to work on large projects efficiently"
                />
              </GridColumn>
            </GridRow>
          </Grid>

          {/* {Object.keys(ApproachNames).map((approachKey) => (
            <Card
              title={approachKey.replace('-', ' ')}
              href={`/${approachKey}`}
              hrefLabel="Learn more"
            />
          ))} */}
        </section>
      </section>

      {/* <ul>
        <li>
          <Link href="/bem">Navigate to BEM</Link>
        </li>
      </ul> */}
    </div>
  );
}
