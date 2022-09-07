import React, { useState } from "react";

function withTest(Wrapped) {
  return function (props) {
    const [search, setSearch] = useState("");

    //   props['search'] = search;
    //   props['setSearch'] = setSearch;
    return <Wrapped search={search} setSearch={setSearch} {...props} />;
  };
}

export default withTest;
