import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

const FeatureList = [
  {
    title: 'Getting Started',
    Svg: require('@site/static/img/q-get-started.svg').default,
    description: (
      <>
        Connect to Qodly Studio and unlock a world of app-building possibilities.s
      </>
    ),
		link: "4DQodlyPro/gettingStarted"
  },
  {
    title: 'Develop',
    Svg: require('@site/static/img/q-dev.svg').default,
    description: (
      <>
        Design and build powerful business apps with intuitive, browser-based tools.
      </>
    ),
	link: "4DQodlyPro/qodlyStudioInterface"
  },
  {
    title: 'Deploy',
    Svg: require('@site/static/img/q-dep-run-mng.svg').default,
    description: (
      <>
        Seamlessly integrate and deploy Qodly pages within your 4D environment.
      </>
    ),
		link: "cloud/consoleOverview"
  },
  {
    title: 'Cloud',
    Svg: require('@site/static/img/q-dev.svg').default,
    description: (
      <>
        Take your Qodly apps to the next level with our all-in-one cloud platform — develop, launch, and monitor from anywhere.
      </>
    ),
		link: "QodlyinCloud/quickstart"
  }
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={styles.feature}>
          <Link to={useBaseUrl(link)}>

       <div className="text--center">
        <Svg className={styles.featureSvg} role="test" />
	  </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      </Link>

    </div>

  );
}

export default function HomepageFeatures() {
  return (
    <div className={styles.featuresRow}>
    <section className={styles.features}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
    </section>
    </div>

  );
}
