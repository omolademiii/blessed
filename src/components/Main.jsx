import React, { useState } from 'react'
import Result from './Result'

function Main() {
    const [search, setSearch] = useState('');
    const [newSearch, setNewSearch] = useState('');
    const [isResult, setisResult] = useState(false);



    const submitForm = (e) => {
        e.preventDefault();

        if (search.length > 0) {
            setisResult(true);
            setNewSearch(search)
            return true;
        }

        setisResult(false);
        setNewSearch('');
        alert('you have to enter a value');
        return false;

    }
  return (
    <div className='Form'>
      <img src="C:\Users\damil\Downloads\google abeg.png" alt="" />
      <form onSubmit={submitForm} action="">
        <input onChange={(e) => setSearch(e.target.value)} className='something' type="text" />
        <button>Enter</button>
      </form>
      

    {
        isResult == true ? <Result search = {newSearch} /> : ''
    }
      
    </div>
  )
}

export default Main
