import React from 'react';

import { Carousel } from '../components/Carousel';
import { Cards } from '../components/Cards';
import { SearchHeader } from '../components/search-header';
import { Paginations } from '../components/Pagination';

function Home() {
    return (
        <>
            <SearchHeader />
            <Carousel />
            <Cards />
            <Paginations />
        </>
    );
}

export default Home;
