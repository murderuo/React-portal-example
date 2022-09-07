import withTest from "../hoc/withTest/withTest";

function Test(props) {
  const { search, setSearch } = props;
  // console.log(search);
  return (
    <div className="container">
      <h1>Test component</h1>
      <h2>state input Value:{search}</h2>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
}

export default withTest(Test);
