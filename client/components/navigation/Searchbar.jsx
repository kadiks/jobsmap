import React, { useState, useEffect } from 'react'

const Searchbar = () => {
    const [ searchTerm, setSearchTerm ] = useState('')
    const [ keywords, setKeywords ] = useState([])
    const [ showSuggestions, setShowSuggestions ] = useState(false)
    function onInputChange(event){
        const {value} = event.target
        setSearchTerm(value)
    }
    useEffect(() => {
        console.log(searchTerm)
        if(searchTerm.length > 2 && !keywords.length){
            const dev = process.env.NODE_ENV !== "production";
            const server = dev ? "http://localhost:3002/api" : "https://mapojob.herokuapp.com/api";
            fetch(`${server}/keywords`)
            .then( res => res.json() )
            .then( json => {
                console.log(json)
                setKeywords(json.data)
            });
        }
    })
    return (
        <div className="flex w-100 justify-end px-4 py-2">
            <div className="flex items-center justify-center w-1/3">
                <form className="w-full">
                    <div className="relative text-gray-600 focus-within:text-gray-400">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </button>
                    </span>
                    <input
                        onChange={onInputChange}
                        onFocus={()=>setShowSuggestions(true)}
                        onBlur={()=>setShowSuggestions(false)}
                        value={searchTerm}
                        type="search"
                        name="q"
                        className="font-sans py-2 shadow text-sm text-white w-full border rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
                        placeholder="Rechercher..."
                        autocomplete="off" />
                    </div>
                    {showSuggestions &&
                    <ul
                    className="py-2"
                    style={{cursor: 'pointer', backgroundColor: 'white', position:'fixed', width: '200px', zIndex:'401'}}>
                        {keywords.map( keyword => <li className="py-2">keyword</li>)}
                    </ul>
                    }
                </form>
            </div>
        </div>
    );
};

export default Searchbar;