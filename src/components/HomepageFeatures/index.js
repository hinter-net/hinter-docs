import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import {useColorMode} from '@docusaurus/theme-common';

const FeatureList = [
  {
    title: 'Curate intelligence',
    SvgLight: require('@site/static/img/icon-1-light.svg').default,
    SvgDark: require('@site/static/img/icon-1-dark.svg').default,
    description: (
      <>
        Systematically build a private knowledge base, transforming insights into assets.
      </>
    ),
  },
  {
    title: 'Exchange reports',
    SvgLight: require('@site/static/img/icon-2-light.svg').default,
    SvgDark: require('@site/static/img/icon-2-dark.svg').default,
    description: (
      <>
        Swap tailored reports with peers to uncover new opportunities and mitigate risks.
      </>
    ),
  },
  {
    title: 'Forge an inner circle',
    SvgLight: require('@site/static/img/icon-3-light.svg').default,
    SvgDark: require('@site/static/img/icon-3-dark.svg').default,
    description: (
      <>
        Establish a high-trust network founded on a history of mutual support.
      </>
    ),
  },
];

function Feature({SvgLight, SvgDark, title, description}) {
  const {colorMode} = useColorMode();
  const Svg = colorMode === 'dark' ? SvgDark : SvgLight;
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
