import React from 'react'
import unsplash from '../api/unsplash'


function SearchBar({term, setTerm, setPics}) {

    const onInputChange = (e) => {
        let input = e.target.value;
        setTerm(input)
    }

    const onFormSubmit = async (e) => {
        e.preventDefault()
        const res = await unsplash.get('/search/photos', {
            params: {query: term}
        })
        console.log(res.data.results)
        setPics(res.data.results)
    }

    return (
        <div className="ui segment">
            <form 
                className="ui form"
                onSubmit={onFormSubmit}
            >
                <div className="field">
                    <label>Image Search</label>
                    <input 
                        type="text" 
                        onChange={onInputChange} 
                        value={term}
                    />
                </div>
            </form>
        </div>
    );
}

export default SearchBar;