import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import { gql, useQuery } from '@apollo/client';
import "../style/DropdownMenu.css";


// Create genre query
const GET_GENRES = gql`
  query GetGenres {
      items {
          genre
      }
  }
`;

function DropdownMenu() {
    const [value, setValue] = useState('');
    const handleSelect = (e) => {
        setValue(e)
    }

    // run query
    const { loading, error, data } = useQuery(GET_GENRES);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    // get unique genres
    const genres = data.items.map(item => item.genre)
        .filter((value, index, self) => self.indexOf(value) === index);

    genres.forEach(g => console.log(g));

    return (
        <DropdownButton
            alignRight
            title="Make a Selection"
            id="dropdown-menu-align-left"
            onSelect={handleSelect}
            className="btn dropdown-toggle dropdown-menu-xl-left"
            data-toggle="dropdown"
            data-display="static"
            aria-haspopup="true"
            aria-expanded="false"

        >

            {/* {create dropdown item per genre} */}
            {genres.map(function (genre, _) {
                return <Dropdown.Item
                    class="dropdown-menu dropdown-menu-lg-right dropdown-item"
                    type="button"
                    eventKey={genre}>{genre}</Dropdown.Item>;
            })}
        </DropdownButton>
    );
}


export default DropdownMenu;