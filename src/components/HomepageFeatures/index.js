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
        Connect to the Qodly console and enter
		the application building world!
      </>
    ),
		link: "get-started/quickstart"
  },
  {
    title: 'Develop',
    Svg: require('@site/static/img/q-dev.svg').default,
    description: (
      <>
        Create and design business apps in an intuitive and
        integrated environment, using a simple browser.
      </>
    ),
	link: "studio/overview"
  },
  {
    title: 'Run & Manage',
    Svg: require('@site/static/img/q-dep-run-mng.svg').default,
    description: (
      <>
        Launch and monitor your Qodly applications using a
        full-featured console in our cloud infrastructure.
      </>
    ),
		link: "cloud/consoleOverview"
  },
  {
    title: 'REST API',
    Svg: require('@site/static/img/q-dev.svg').default,
    description: (
      <>
        Access your data from other applications 
        using the highly secured, comprehensive Qodly REST API.
      </>
    ),
		link: "api/overview"
  },
  {
    title: 'Custom Components',
    Svg: require('@site/static/img/q-dev.svg').default,
    description: (
      <>
        Empower your app with Qodly's custom components, designed for unique needs and specialized features.
      </>
    ),
		link: "customComponent/overview"
  },
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
