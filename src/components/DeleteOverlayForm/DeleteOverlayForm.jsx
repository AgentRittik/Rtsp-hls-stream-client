import React, { useState } from 'react';

const DeleteOverlayForm = ({ onDeleteOverlay }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create overlay object with user input
    // Pass the overlay object to the parent component
    // make an api call foe delete overlay
    alert(content);
    onDeleteOverlay(content);

    // Reset form fields
    setContent('');
  };

  return (
    <div className="form-container">
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="content">Content:</label>
                <input type="text" id="content" value={content} onChange={(e) => setContent(e.target.value)} />
            </div>
            <button type="submit">Delete Overlay</button>
        </form>
    </div>
    
  );
};

export default DeleteOverlayForm;
