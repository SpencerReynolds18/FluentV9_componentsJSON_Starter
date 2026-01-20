'use client';

import {
  makeStyles,
  tokens,
  Card,
  Text,
  Link,
  Badge,
} from '@fluentui/react-components';
import { Star24Regular } from '@fluentui/react-icons';

const useStyles = makeStyles({
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalM,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: tokens.fontSizeBase500,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
  },
  customizeLink: {
    fontSize: tokens.fontSizeBase300,
    color: tokens.colorBrandForeground1,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: tokens.spacingVerticalM,
  },
  repoCard: {
    padding: tokens.spacingVerticalM,
    backgroundColor: tokens.colorNeutralBackground2,
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    borderRadius: tokens.borderRadiusMedium,
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalS,
  },
  repoHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  repoName: {
    fontSize: tokens.fontSizeBase400,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorBrandForeground1,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  repoDescription: {
    fontSize: tokens.fontSizeBase300,
    color: tokens.colorNeutralForeground2,
  },
  repoFooter: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalM,
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground3,
  },
  languageDot: {
    width: '12px',
    height: '12px',
    borderRadius: tokens.borderRadiusCircular,
    display: 'inline-block',
  },
  publicBadge: {
    fontSize: tokens.fontSizeBase200,
    padding: `${tokens.spacingVerticalXXS} ${tokens.spacingHorizontalXS}`,
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    borderRadius: tokens.borderRadiusSmall,
  },
});

const repositories = [
  { name: 'javascript-workbook', language: 'JavaScript', color: '#f1e05a', stars: 1, forked: true },
  { name: 'insurance-ui', language: 'HTML', color: '#e34c26' },
  { name: 'student-handbook', language: 'CSS', color: '#563d7c' },
  { name: 'intro-workbook', language: 'JavaScript', color: '#f1e05a' },
  { name: 'aca-blog', language: 'HTML', color: '#e34c26' },
  { name: 'workshop-resources', language: 'JavaScript', color: '#f1e05a' },
];

export default function PopularRepositories() {
  const styles = useStyles();

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <Text className={styles.title}>Popular repositories</Text>
        <Link href="#" className={styles.customizeLink}>
          Customize your pins
        </Link>
      </div>
      
      <div className={styles.grid}>
        {repositories.map((repo) => (
          <Card key={repo.name} className={styles.repoCard}>
            <div className={styles.repoHeader}>
              <Link href="#" className={styles.repoName}>
                {repo.name}
              </Link>
              <Badge className={styles.publicBadge} appearance="outline">
                Public
              </Badge>
            </div>
            {repo.forked && (
              <Text className={styles.repoDescription}>
                Forked from another repository
              </Text>
            )}
            <div className={styles.repoFooter}>
              <span>
                <span
                  className={styles.languageDot}
                  style={{ backgroundColor: repo.color }}
                />
                {' '}
                {repo.language}
              </span>
              {repo.stars && (
                <span>
                  <Star24Regular style={{ fontSize: '14px', verticalAlign: 'middle' }} />
                  {' '}
                  {repo.stars}
                </span>
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
