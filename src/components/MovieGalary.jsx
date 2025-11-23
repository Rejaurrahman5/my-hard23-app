import React, { useEffect, useState } from 'react';
import CateoriesNavbar from './CateoriesNavbar';
import toast from 'react-hot-toast';

const MovieGalary = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectCategory, setSelectCategory] = useState("All");
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('/Movies.json')
            .then(res => res.json())
            .then(data => setMovies(data))
            .catch((error) => {
                console.log(error);
                toast.error("Failed to load movie data!");
            })
            .finally(() => setLoading(false));
    }, []);

    const catagories = ["All", ...new Set(movies.map(m => m.category))];

    const filterMovies =
        selectCategory === "All"
            ? movies
            : movies.filter(m => m.category === selectCategory);

    const visibleMovies = showAll ? filterMovies : filterMovies.slice(0, 8);

    return (
        <div className='w-11/12 mx-auto py-16'>
            <h1 className='text-lg lg:text-xl font-semibold mb-4'>
                RECOMMENDED FOR YOU
            </h1>

            {/* Categories Navbar */}
            <CateoriesNavbar
                catagories={catagories}
                selectCategory={selectCategory}
                setSelectCategory={setSelectCategory}
            />

            {/* Loading */}
            {loading ? (
                <div className='flex justify-center items-center h-64'>
                    <span className="loading loading-dots loading-xl text-yellow-500"></span>
                </div>
            ) : filterMovies.length > 0 ? (
                <>
                    {/* Movie Grid */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8'>
                        {visibleMovies.map((movie, index) => (
                            <div key={index} className='rounded overflow-hidden shadow-md hover:shadow-lg duration-300'>
                                <img
                                    src={movie.card_picture}
                                    alt={movie.title}
                                    className='w-full h-60 object-cover'
                                />
                                <div className='p-3'>
                                    <h2 className='font-semibold text-lg'>{movie.title}</h2>
                                    <p className='text-sm opacity-70'>{movie.category}</p>
                                    <p className='text-sm opacity-70'>{movie.video_quality}</p>
                                    <p className='text-sm opacity-70'>{movie.rating}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Show More / Show Less Button */}
                    {filterMovies.length > 8 && (
                        <div className="text-center mt-6">
                            <button
                                onClick={() => setShowAll(!showAll)}
                                className="px-6 py-2 bg-yellow-500 text-black rounded font-medium hover:bg-yellow-400 duration-300"
                            >
                                {showAll ? "Show Less" : "Show More"}
                            </button>
                        </div>
                    )}
                </>
            ) : (
                <p className='text-center text-gray-400 mt-16 text-xl'>
                    No movies found 😢
                </p>
            )}
        </div>
    );
};

export default MovieGalary;
