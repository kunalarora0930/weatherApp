// import React, { useState } from 'react';

// function SearchBar(props) {
//     const [searchText, setSearchText] = useState('');

//     const handleInputChange = (event) => {
//         setSearchText(event.target.value);
//     }

//     const handleSearchClick = () => {
//         props.onSearch(searchText);
//     }

//     return (
//         <div className="search-bar">
//             <input type="text" placeholder="search city" value={searchText} onChange={handleInputChange} />
//             <button onClick={handleSearchClick}>Search</button>
//         </div>
//     );
// }

// export default SearchBar;


import React, { useState } from 'react';
import './search.css';

function SearchBar(props) {
    const [query, setQuery] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        props.onLocationChange(query);
        setQuery('');
    }

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="search city"
                value={query}
                onChange={(event) => setQuery(event.target.value)}>

            </input>
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchBar;
