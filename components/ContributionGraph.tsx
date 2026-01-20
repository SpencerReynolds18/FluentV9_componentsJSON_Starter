'use client';

import {
  makeStyles,
  tokens,
  Text,
  Select,
  Option,
} from '@fluentui/react-components';

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
  controls: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalM,
  },
  graphContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalS,
  },
  graph: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalXXS,
  },
  weekLabels: {
    display: 'flex',
    gap: tokens.spacingHorizontalXXS,
    paddingRight: tokens.spacingHorizontalS,
  },
  weekLabel: {
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground3,
    width: '15px',
    textAlign: 'right',
  },
  weeksRow: {
    display: 'flex',
    gap: '3px',
  },
  monthLabels: {
    display: 'flex',
    paddingLeft: '31px',
    gap: tokens.spacingHorizontalXXS,
    marginBottom: tokens.spacingVerticalXS,
  },
  monthLabel: {
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground3,
    width: '15px',
  },
  dayCell: {
    width: '11px',
    height: '11px',
    borderRadius: '2px',
    backgroundColor: '#161b22',
    border: `1px solid ${tokens.colorNeutralStroke1}`,
  },
  dayCellLevel0: {
    backgroundColor: '#161b22',
  },
  dayCellLevel1: {
    backgroundColor: '#0e4429',
  },
  dayCellLevel2: {
    backgroundColor: '#006d32',
  },
  dayCellLevel3: {
    backgroundColor: '#26a641',
  },
  dayCellLevel4: {
    backgroundColor: '#39d353',
  },
  legend: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalXS,
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground3,
  },
  legendDots: {
    display: 'flex',
    gap: '2px',
  },
  legendDot: {
    width: '10px',
    height: '10px',
    borderRadius: '2px',
  },
  learnLink: {
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorBrandForeground1,
    textDecoration: 'none',
    marginLeft: tokens.spacingHorizontalS,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

// Generate contribution data (simplified - in real app, this would come from API)
const generateContributionData = () => {
  const weeks: number[][] = [];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  // Generate 53 weeks of data
  for (let week = 0; week < 53; week++) {
    const weekData: number[] = [];
    for (let day = 0; day < 7; day++) {
      // Random contribution level (0-4)
      weekData.push(Math.floor(Math.random() * 5));
    }
    weeks.push(weekData);
  }
  
  return { weeks, months };
};

export default function ContributionGraph() {
  const styles = useStyles();
  const { weeks, months } = generateContributionData();

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <Text className={styles.title}>28 contributions in 2026</Text>
        <div className={styles.controls}>
          <Select defaultValue="2026" appearance="subtle">
            <Option value="2026">2026</Option>
            <Option value="2025">2025</Option>
            <Option value="2024">2024</Option>
            <Option value="2023">2023</Option>
          </Select>
        </div>
      </div>

      <div className={styles.graphContainer}>
        <div className={styles.monthLabels}>
          {months.map((month, idx) => (
            <span key={idx} className={styles.monthLabel}>
              {idx % 3 === 0 ? month : ''}
            </span>
          ))}
        </div>

        <div className={styles.graph}>
          <div className={styles.weekLabels}>
            <span className={styles.weekLabel}></span>
            <span className={styles.weekLabel}>Mon</span>
            <span className={styles.weekLabel}></span>
            <span className={styles.weekLabel}>Wed</span>
            <span className={styles.weekLabel}></span>
            <span className={styles.weekLabel}>Fri</span>
            <span className={styles.weekLabel}></span>
          </div>

          <div className={styles.weeksRow}>
            {weeks.map((week, weekIdx) => (
              <div key={weekIdx} style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                {week.map((level, dayIdx) => (
                  <div
                    key={dayIdx}
                    className={`${styles.dayCell} ${styles[`dayCellLevel${level}` as keyof typeof styles]}`}
                    title={`${level} contributions`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.legend}>
          <span>Less</span>
          <div className={styles.legendDots}>
            <div className={`${styles.legendDot} ${styles.dayCellLevel0}`}></div>
            <div className={`${styles.legendDot} ${styles.dayCellLevel1}`}></div>
            <div className={`${styles.legendDot} ${styles.dayCellLevel2}`}></div>
            <div className={`${styles.legendDot} ${styles.dayCellLevel3}`}></div>
            <div className={`${styles.legendDot} ${styles.dayCellLevel4}`}></div>
          </div>
          <span>More</span>
          <a href="#" className={styles.learnLink}>
            Learn how we count contributions
          </a>
        </div>
      </div>
    </section>
  );
}
