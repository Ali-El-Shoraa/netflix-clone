import { useState } from "react";

function SearchBar({ setQurySearch, qurySearch }) {
  const [qury, setQuru] = useState();

  const SetData = () => {
    setQurySearch({ ...qurySearch, name: qury });
  };
  return (
    <section className="search-bar">
      <div className="container">
        <div className="search-input">
          <input type="text" value={qury} onChange={(e) => setQuru(e.target.value)} />
          <button onClick={SetData}>Search</button>
        </div>

        <div className="btn-all-movies">
          {qurySearch.name && (
            <button
              onClick={() => {
                setQurySearch({ name: "", page: 0 || 1 });
                setQuru("");
              }}
            >
              All Videos
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default SearchBar;
