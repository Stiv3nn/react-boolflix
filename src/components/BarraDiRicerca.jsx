import { useState } from "react";


function BarraDiRicerca({ onSearch }) {
    const [query, setQuery] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSearch(query);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Cerca un film" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Cerca</button>
      </form>
    );
  }
  
  export default BarraDiRicerca;