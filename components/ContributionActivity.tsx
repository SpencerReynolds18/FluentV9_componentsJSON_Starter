'use client';

import {
  makeStyles,
  tokens,
  Text,
  Link,
  Button,
} from '@fluentui/react-components';
import { CheckmarkCircle24Filled } from '@fluentui/react-icons';

const useStyles = makeStyles({
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalL,
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
  monthSelector: {
    fontSize: tokens.fontSizeBase300,
    color: tokens.colorNeutralForeground2,
  },
  activityItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalM,
    paddingBottom: tokens.spacingVerticalL,
    borderBottom: `1px solid ${tokens.colorNeutralStroke1}`,
    '&:last-child': {
      borderBottom: 'none',
    },
  },
  activityTitle: {
    fontSize: tokens.fontSizeBase300,
    color: tokens.colorNeutralForeground1,
    fontWeight: tokens.fontWeightSemibold,
  },
  repoList: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalXS,
    marginTop: tokens.spacingVerticalXS,
  },
  repoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalS,
    fontSize: tokens.fontSizeBase300,
  },
  repoLink: {
    color: tokens.colorBrandForeground1,
    textDecoration: 'none',
    fontWeight: tokens.fontWeightSemibold,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  commitCount: {
    color: tokens.colorNeutralForeground3,
  },
  progressBar: {
    height: '8px',
    backgroundColor: tokens.colorNeutralBackground3,
    borderRadius: tokens.borderRadiusSmall,
    overflow: 'hidden',
    flex: 1,
    maxWidth: '200px',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#26a641',
    borderRadius: tokens.borderRadiusSmall,
  },
  prList: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalXS,
    marginTop: tokens.spacingVerticalXS,
  },
  prItem: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalS,
    fontSize: tokens.fontSizeBase300,
  },
  prTitle: {
    color: tokens.colorNeutralForeground1,
    textDecoration: 'none',
    '&:hover': {
      color: tokens.colorBrandForeground1,
      textDecoration: 'underline',
    },
  },
  mergedBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalXXS,
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground3,
    padding: `${tokens.spacingVerticalXXS} ${tokens.spacingHorizontalXS}`,
    backgroundColor: tokens.colorNeutralBackground3,
    borderRadius: tokens.borderRadiusSmall,
  },
  dateText: {
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground3,
  },
  showMoreButton: {
    marginTop: tokens.spacingVerticalM,
  },
  guideLink: {
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground3,
    textDecoration: 'none',
    '&:hover': {
      color: tokens.colorBrandForeground1,
      textDecoration: 'underline',
    },
  },
});

const commits = [
  { repo: 'SpencerReynolds18/personal-productivity-dashboard', count: 9 },
  { repo: 'SpencerReynolds18/improved-tokens', count: 4 },
  { repo: 'SpencerReynolds18/aca-simplification-...', count: 2 },
  { repo: 'SpencerReynolds18/FluentTokens', count: 1 },
  { repo: 'SpencerReynolds18/ScrapingDesignVaria...', count: 1 },
];

const pullRequests = [
  { title: 'Icon stroke color', date: 'Jan 19', merged: true },
  { title: 'Updates', date: 'Jan 19', merged: true },
  { title: 'Weather updates and label updates for the task items', date: 'Jan 16', merged: true },
  { title: 'Dashboard iteration', date: 'Jan 16', merged: true },
];

export default function ContributionActivity() {
  const styles = useStyles();

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <Text className={styles.title}>Contribution activity</Text>
        <Text className={styles.monthSelector}>January 2026</Text>
      </div>

      <div className={styles.activityItem}>
        <Text className={styles.activityTitle}>
          Created 17 commits in 5 repositories
        </Text>
        <div className={styles.repoList}>
          {commits.map((commit, idx) => (
            <div key={idx} className={styles.repoItem}>
              <Link href="#" className={styles.repoLink}>
                {commit.repo}
              </Link>
              <span className={styles.commitCount}>{commit.count} commits</span>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${(commit.count / 9) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.activityItem}>
        <Text className={styles.activityTitle}>
          Created 7 repositories
        </Text>
      </div>

      <div className={styles.activityItem}>
        <Text className={styles.activityTitle}>
          Opened 4 pull requests in{' '}
          <Link href="#" className={styles.repoLink}>
            SpencerReynolds18/personal-productivity-dashboard
          </Link>
        </Text>
        <div className={styles.prList}>
          {pullRequests.map((pr, idx) => (
            <div key={idx} className={styles.prItem}>
              <Link href="#" className={styles.prTitle}>
                {pr.title}
              </Link>
              <span className={styles.mergedBadge}>
                <CheckmarkCircle24Filled style={{ fontSize: '14px' }} />
                merged
              </span>
              <span className={styles.dateText}>{pr.date}</span>
            </div>
          ))}
        </div>
      </div>

      <Button appearance="subtle" className={styles.showMoreButton}>
        Show more activity
      </Button>

      <Link href="#" className={styles.guideLink}>
        Seeing something unexpected? Take a look at the GitHub profile guide.
      </Link>
    </section>
  );
}
