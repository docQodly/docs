import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Qodly Studio',
    Svg: require('@site/static/img/qodly-studio.svg').default,
    description: (
      <>
        Create and design web business apps in an intuitive and
        comprehensive environment, using a simple browser.
      </>
    ),
  },
  {
    title: 'Qodly Server',
    Svg: require('@site/static/img/qodly-server.svg').default,
    description: (
      <>
        A powerful and secured server running the QodlyScript language
		and ready to handle the most demanding applications. 
      </>
    ),
  },
  {
    title: 'Qodly Cloud',
    Svg: require('@site/static/img/qodly-cloud.svg').default,
    description: (
      <>
        A dedicated infrastructure to launch and monitor
        your applications through a sophisticated dashboard.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
