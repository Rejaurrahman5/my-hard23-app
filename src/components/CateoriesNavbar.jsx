import React from 'react';

const CateoriesNavbar = ({catagories, selectCategory, setSelectCategory}) => {
    return (
        <div className='flex flex-wrap justify-start gap-3 md:gap-5 py-10'>
            {
                catagories.map(cat => (
                    <button
                    key={cat}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300
                    
                    ${selectCategory === cat ? "bg-yellow-500 text-black" : "border border-yellow-500 text-gray-300 hover:bg-yellow-500 hover:text-black"}

                        `}
                    >{cat}</button>
                ))
            }
        </div>
    );
};

export default CateoriesNavbar;