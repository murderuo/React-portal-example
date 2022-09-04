import styles from "./styles.module.css";

// import withSearch from "../hoc/withSearch";
import Test from "../Test/Test";
import withTest from "../hoc/withTest/withTest";

function Home({ search, setSearch }) {
  return (
    <div className={styles.container}>
      This is Home Page <br />
      withTest HOC Search Value={search} <br />doenst work
      <div>
        <Test />
      </div>
      <div className="slidebar"></div>
    </div>
  );
}

export default withTest(Home);
