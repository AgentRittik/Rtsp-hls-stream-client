import React, { useState } from 'react';
import "./AddOverlayForm.css"
const AddOverlayForm = ({ onAddOverlay, Edit,onEditOverlay }) => {
  const [content, setContent] = useState('');
  const [color, setColor] = useState('#ff0000'); // Default color is red
  const [align, setAlign] = useState('center');
  const [searchRoute , setSearchRoute] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create overlay object with user input
    const overlay = {
      content,
      color,
      align,
    };
    if(Edit){
        onEditOverlay (searchRoute , overlay); 
    }
    else{
        onAddOverlay(overlay);
    }
    // Pass the overlay object to the parent component
    
    // Reset form fields
    setContent('');
    setColor('#ff0000'); // Reset color to red
    setAlign('center');
  };

  return (
    <div className="form-container">
        <form onSubmit={handleSubmit}>
            {Edit && (<div>
                <label htmlFor="searchRoute">Old Content:</label>
                <input type="text" id="searchRoute" value={searchRoute} onChange={(e) => setSearchRoute(e.target.value)} />
            </div>)}
            <div>
                <label htmlFor="content">{Edit ? "New Content :" : "Content :"}</label>
                <input type="text" id="content" value={content} onChange={(e) => setContent(e.target.value)} />
            </div>
            <div>
                <label htmlFor="align">Alignment:</label>
                <select id="align" value={align} onChange={(e) => setAlign(e.target.value)}>
                <option value="center">center</option>
                <option value="left">left</option>
                <option value="right">right</option>
                <option value="top">top</option>
                <option value="bottom">bottom</option>
                <option value="bottom">bottom-left</option>
                <option value="bottom">bottom-right</option>
                <option value="bottom">top-left</option>
                <option value="bottom">top-right</option>
                </select>
            </div>
            <div>
                <label htmlFor="color">Color:</label>
                <input type="color" id="color" value={color} onChange={(e) => setColor(e.target.value)} />
            </div>
            <button type="submit">{Edit ? "EditOverlay" : "Add Overlay"}</button>
        </form>
    </div>
    
  );
};

export default AddOverlayForm;
