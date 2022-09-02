import styles from './styles.module.css';

import withSearch from '../hoc/withSearch';

function Home() {
  return (
    <div className={styles.container}>
      This is Home Page
      <div className="slidebar"></div>
    </div>
  );
}

export default withSearch(Home);
