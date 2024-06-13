import React from 'react';
import { Link } from 'react-router-dom';

function CategoryItem({ name, href, backgroundColor, color = '#000' }) {
    const style = {
        backgroundColor: backgroundColor,
        color: color,
        borderColor: color
    }

    return (
        <div>
            <Link to={href} className='uppercase px-6 py-2 text-center rounded-full border' style={style}>
                {name}
            </Link>
        </div>
    );
}

function CategoryList() {
    return (
        <div className=' relative bottom-14  flex items-center justify-center gap-7'>
            <CategoryItem name="Table_Plants "  href="/categories/table-plants" backgroundColor="#99F3BD" color="#000" />
            <CategoryItem name="Indoor_Plants" href="/categories/indoor-plants" backgroundColor="#F5DAD2" color="#000" />
            <CategoryItem name="Cactus_Plants" href="/categories/cactus-plants" backgroundColor="#DCBFFF" color="#000" />
            <CategoryItem name="Potted_Plants" href="/categories/potted-plants" backgroundColor="#FEFFD2" color="#000" />
            <CategoryItem name="Outdoor_Plants" href="/categories/outdoor-plants" backgroundColor="#FFC478" color="#000" />
            <CategoryItem name="Air_Purify_Plants" href="/categories/air-purify-plants" backgroundColor="#A3D8FF" color="#000" />
        </div>
    );
}

const CategoryWrapper = () => {
  return (
    <div>
        <CategoryList />
    </div>
  );
}

export default CategoryWrapper;
