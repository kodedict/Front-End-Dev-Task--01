/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

//import view
import SearchSection from "./view/searchForm";
import ListSection from "./view/listBookContent";


const App = () => {
  const [query, setQuery] = useState("");
  const [bookContent, setBook] = useState([]);
  const [home, setHome] = useState(true);

  useEffect(() => {
    getBookContent();
  }, [query]);

  const getBookContent = async () => {
    try {
      if (query !== "") {
        let bookSearch = query.replace(' ','-');
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q==${bookSearch.toLocaleLowerCase()}`
        );
        const data = await response.json();
        setBook(data.items);
        setHome(false);
      }
    } catch {
      setHome(true);
    }
  };

  const getSearch = (searchText) => {
    setQuery(searchText);
  };

  const redirectHome = (getClick) => {
    setHome(getClick);
  };

  return (
    <div>
      {home ? (
        <div>
          <SearchSection searchText={getSearch} />
        </div>
      ) : (
        <div>
          <div className="mt50">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <button className="btn" onClick={redirectHome}>Back Home</button>
                  <h3 style={{ color: "#1e296388" }}>
                    Showing book content for <span className="text-capitalize">{query}</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mainListCover">
              <div className="container">
                <div className="row listRow">
                  {bookContent.map((book, index) => (
                    <ListSection
                      key={index}
                      searchTitle={query}
                      title={book.volumeInfo.title}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      description={book.volumeInfo.description}
                      publishedDate={book.volumeInfo.publishedDate}
                      category={book.volumeInfo.categories}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
