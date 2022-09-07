import styles from './styles.module.css';

import withSearch from '../hoc/withSearch';

function Home() {
  return (
    <div className={styles.container}>
      <h1> This is Home Page</h1>
    </div>
  );
}

export default withSearch(Home);
