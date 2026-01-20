'use client';

import { 
  makeStyles, 
  tokens, 
  Button,
  Input,
  Avatar,
} from '@fluentui/react-components';
import { 
  Search24Regular,
  GitBranch24Regular,
  Issue24Regular,
  Bell24Regular,
} from '@fluentui/react-icons';

const useStyles = makeStyles({
  nav: {
    backgroundColor: tokens.colorNeutralBackground2,
    borderBottom: `1px solid ${tokens.colorNeutralStroke1}`,
    paddingLeft: tokens.spacingHorizontalXL,
    paddingRight: tokens.spacingHorizontalXL,
    paddingTop: tokens.spacingVerticalM,
    paddingBottom: tokens.spacingVerticalM,
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalM,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalS,
    color: tokens.colorNeutralForeground1,
    fontWeight: tokens.fontWeightSemibold,
    fontSize: tokens.fontSizeBase400,
    textDecoration: 'none',
  },
  navTabs: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalXS,
    flex: 1,
    marginLeft: tokens.spacingHorizontalXL,
  },
  navTab: {
    color: tokens.colorNeutralForeground2,
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightRegular,
    paddingLeft: tokens.spacingHorizontalM,
    paddingRight: tokens.spacingHorizontalM,
    paddingTop: tokens.spacingVerticalS,
    paddingBottom: tokens.spacingVerticalS,
    textDecoration: 'none',
    borderBottom: `2px solid transparent`,
    '&:hover': {
      color: tokens.colorNeutralForeground1,
    },
  },
  navTabActive: {
    color: tokens.colorNeutralForeground1,
    borderBottomColor: '#fd7e14',
    fontWeight: tokens.fontWeightSemibold,
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalM,
  },
  searchInput: {
    width: '272px',
    backgroundColor: tokens.colorNeutralBackground1,
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    color: tokens.colorNeutralForeground1,
    '&::placeholder': {
      color: tokens.colorNeutralForeground3,
    },
  },
  iconButton: {
    color: tokens.colorNeutralForeground1,
    minWidth: 'auto',
  },
  avatar: {
    cursor: 'pointer',
  },
});

export default function NavigationBar() {
  const styles = useStyles();

  return (
    <nav className={styles.nav}>
      <a href="#" className={styles.logo}>
        <svg height="32" viewBox="0 0 16 16" width="32" fill="currentColor">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
        </svg>
        <span>SpencerReynolds18</span>
      </a>
      
      <div className={styles.navTabs}>
        <a href="#" className={`${styles.navTab} ${styles.navTabActive}`}>
          Overview
        </a>
        <a href="#" className={styles.navTab}>
          Repositories <span style={{ color: tokens.colorNeutralForeground3 }}>24</span>
        </a>
        <a href="#" className={styles.navTab}>
          Projects
        </a>
        <a href="#" className={styles.navTab}>
          Packages
        </a>
        <a href="#" className={styles.navTab}>
          Stars <span style={{ color: tokens.colorNeutralForeground3 }}>1</span>
        </a>
      </div>

      <div className={styles.rightSection}>
        <Input
          placeholder="Type to search"
          className={styles.searchInput}
          contentBefore={<Search24Regular />}
        />
        <Button
          appearance="subtle"
          icon={<GitBranch24Regular />}
          className={styles.iconButton}
        />
        <Button
          appearance="subtle"
          icon={<Issue24Regular />}
          className={styles.iconButton}
        />
        <Button
          appearance="subtle"
          icon={<Bell24Regular />}
          className={styles.iconButton}
        />
        <Avatar
          name="Spencer Reynolds"
          className={styles.avatar}
          size={20}
        />
      </div>
    </nav>
  );
}
