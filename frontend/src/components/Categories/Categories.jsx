import React, { useState } from 'react';
import './Categories.scss';

const Categories = () => {

    const [activeIndex, setActiveIndex] = React.useState(0);

    const categories = ['Новинки', 'Популярные', 'Случайные', 'Обновленные', 'Онгоинги'];

    return (
        <div className='Categories'>
            {
                <ul>
                    <li></li>
                </ul>
            }
        </div>
    );
}

export default Categories;
