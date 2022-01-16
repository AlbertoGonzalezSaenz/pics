import React from 'react'
import axios from 'axios'


function SearchBar({term, setTerm, setPics}) {

    const onInputChange = (e) => {
        let input = e.target.value;
        setTerm(input)
    }

    const onFormSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers : {
                Authorization : 'Client-ID NGVbq1wpFNyCDzw9v8QPTpb3QG8kWfKXSMtE9N55db0'
            }
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