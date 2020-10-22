import React, { useState } from "react";

function SearchSection({ searchText }) {
  const [search, setSearch] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setSearch("");
    searchText(search);
  };
  return (
    <div className="searchFormDiv">
      <div className="d-flex justify-content-center align-items-center searchFormOuter">
        <div className="d-flex align-items-center order-12 searchFormCover">
          <div className="container searchFormInner">
            <h1 className="text-center">.search for books contents.</h1>
            <form onSubmit={onSubmit} className="searchForm">
              <div className="form-row">
                <div className="col">
                  <div className="form-group">
                    <input
                      className="form-control text-capitalize"
                      type="text"
                      placeholder="Type a book title, e.g Harry Porter"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary" type="submit">
                      Search Book
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
