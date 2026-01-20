'use client';

import {
  makeStyles,
  tokens,
  Avatar,
  Button,
  Link,
  Text,
} from '@fluentui/react-components';
import { Location24Regular, Link24Regular, Building24Regular } from '@fluentui/react-icons';

const useStyles = makeStyles({
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalM,
  },
  avatar: {
    width: '280px',
    height: '280px',
    borderRadius: tokens.borderRadiusCircular,
  },
  name: {
    fontSize: tokens.fontSizeBase500,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
  },
  username: {
    fontSize: tokens.fontSizeBase300,
    color: tokens.colorNeutralForeground2,
    fontWeight: tokens.fontWeightRegular,
  },
  bio: {
    fontSize: tokens.fontSizeBase300,
    color: tokens.colorNeutralForeground1,
    lineHeight: tokens.lineHeightBase300,
  },
  editButton: {
    width: '100%',
  },
  stats: {
    fontSize: tokens.fontSizeBase300,
    color: tokens.colorNeutralForeground2,
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalXS,
  },
  infoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalXS,
    fontSize: tokens.fontSizeBase300,
    color: tokens.colorNeutralForeground2,
    textDecoration: 'none',
    '&:hover': {
      color: tokens.colorBrandForeground1,
    },
  },
  icon: {
    fontSize: tokens.fontSizeBase400,
  },
  achievements: {
    marginTop: tokens.spacingVerticalS,
  },
  achievementsTitle: {
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
    marginBottom: tokens.spacingVerticalXS,
  },
  achievementBadge: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '64px',
    height: '64px',
    borderRadius: tokens.borderRadiusCircular,
    backgroundColor: '#0969da',
    fontSize: tokens.fontSizeBase600,
    fontWeight: tokens.fontWeightBold,
    color: tokens.colorNeutralForegroundOnBrand,
  },
});

export default function ProfileSidebar() {
  const styles = useStyles();

  return (
    <div className={styles.sidebar}>
      <Avatar
        name="Spencer Reynolds"
        className={styles.avatar}
        size={280}
        image={{ src: 'https://github.com/SpencerReynolds18.png' }}
      />
      
      <div>
        <Text className={styles.name}>Spencer Reynolds</Text>
        <Text className={styles.username}>SpencerReynolds18</Text>
      </div>

      <Text className={styles.bio}>
        Design Manager at MSFT, formerly IBM, working on Cloud and Developer Tools
      </Text>

      <Button className={styles.editButton} appearance="secondary">
        Edit profile
      </Button>

      <div className={styles.stats}>
        <Link href="#" appearance="subtle">
          5 followers
        </Link>
        <span>•</span>
        <Link href="#" appearance="subtle">
          0 following
        </Link>
      </div>

      <div>
        <Link href="#" className={styles.infoItem}>
          <Building24Regular className={styles.icon} />
          Microsoft
        </Link>
      </div>

      <div>
        <Link href="#" className={styles.infoItem}>
          <Location24Regular className={styles.icon} />
          Allen, Texas
        </Link>
      </div>

      <div>
        <Link href="http://SpencerTReynolds.com/" className={styles.infoItem}>
          <Link24Regular className={styles.icon} />
          SpencerTReynolds.com
        </Link>
      </div>

      <div className={styles.achievements}>
        <Text className={styles.achievementsTitle}>Achievements</Text>
        <div className={styles.achievementBadge}>WWW</div>
      </div>
    </div>
  );
}
