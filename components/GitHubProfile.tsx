'use client';

import { makeStyles, tokens } from '@fluentui/react-components';
import NavigationBar from './NavigationBar';
import ProfileSidebar from './ProfileSidebar';
import PopularRepositories from './PopularRepositories';
import ContributionGraph from './ContributionGraph';
import ContributionActivity from './ContributionActivity';

const useStyles = makeStyles({
  container: {
    backgroundColor: tokens.colorNeutralBackground1,
    minHeight: '100vh',
    color: tokens.colorNeutralForeground1,
  },
  content: {
    display: 'flex',
    maxWidth: '1280px',
    margin: '0 auto',
    paddingTop: tokens.spacingVerticalXXL,
    paddingLeft: tokens.spacingHorizontalXL,
    paddingRight: tokens.spacingHorizontalXL,
    paddingBottom: tokens.spacingVerticalXXL,
    gap: tokens.spacingHorizontalL,
  },
  sidebar: {
    width: '296px',
    flexShrink: 0,
  },
  main: {
    flex: 1,
    minWidth: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalXL,
  },
});

export default function GitHubProfile() {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <NavigationBar />
      <div className={styles.content}>
        <aside className={styles.sidebar}>
          <ProfileSidebar />
        </aside>
        <main className={styles.main}>
          <PopularRepositories />
          <ContributionGraph />
          <ContributionActivity />
        </main>
      </div>
    </div>
  );
}
