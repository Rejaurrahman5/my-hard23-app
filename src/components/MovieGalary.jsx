import React, { useEffect, useState } from 'react';
import CateoriesNavbar from './CateoriesNavbar';
import toast from 'react-hot-toast';

const MovieGalary = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectCategory, setSelectCategory] = useState("All");
    const [showAll, setShowAll] = useState(false);

    useEffect(()=>{
        fetch('/Movies.json')
        .then(res => res.json())
        .then(data => setMovies(data))
        .catch((error)=>{
            console.log(error);
            toast.error("Failed to movie Data!!!")
        })
        .finally(()=> setLoading(false))
    },[])

    const catagories = ["All", ...new Set(movies.map(m => m.category))]
    const filterMovies = selectCategory === "All" ? movies : movies.
    filter(m => m.category === selectCategory);
    const visibleMovies = showAll ? filterMovies : filterMovies.slice(0, 8)
    return (
        <div className='w-11/12 mx-auto py-16 '>
            <h1 className='text-lg lg:text-xl'>RECOMMENDED FOR YOU</h1>
            <CateoriesNavbar
            catagories= {catagories}
            selectCategory= {selectCategory}
            setSelectCategory = {setSelectCategory} 
            ></CateoriesNavbar>
        </div>
    );
};

export default MovieGalary;