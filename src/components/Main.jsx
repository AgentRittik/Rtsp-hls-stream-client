import React, { useEffect, useState } from 'react';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import AddOverlayForm from './AddOverlayForm/AddOverlayForm';
import DeleteOverlayForm from './DeleteOverlayForm/DeleteOverlayForm';
import getSettings from "../api/getSettings";
import deleteSettings from "../api/deleteSetting";
import createOverlay from '../api/createOverlay';
import editOverlay from '../api/editOverlays';

const Main = () => {
  const hlsStreamUrl = 'http://localhost:5000/hls/stream.m3u8';
  const [overlays, setOverlays] = useState([{ content: 'Hello', align : "center", color :"red"}]);
  const [add , setAdd] = useState(1);
  const [change , setChange] = useState(false);
  const [loading, setLoading] = useState(false);
  const [edit , setEdit] = useState(false);

  useEffect(() => {
    setLoading(false)
    getSettings().then(data => {
      console.log(data);
      setOverlays(data);
      
    });
    setLoading(true);
  },[]);

  useEffect(() => {
    setLoading(false)
    getSettings().then(data => {
      console.log("data comes here",data);
      setOverlays(data);
    });
    setLoading(true);
  },[change]);

  const handleAddOverlay = (overlay) => {
    // Update overlays state with the new overlay
    createOverlay(overlay).then(data => {
      console.log(data);
      setChange(!change);
    });
  };
  const handleDeleteOverlay = (content) => {
    // Update overlays state with the new overlay
    deleteSettings(content).then(data => {
      console.log(data);
      setChange(!change);
    });
  };
  const handleEditOverlay = (content , newContent) => {
    // Update overlays state with the new overlay
    editOverlay(content , newContent).then(data => {
      console.log(data);
      setChange(!change);
    });

  };

  return (
    <div className="App">
        <div className="video">
            {loading && <VideoPlayer videoUrl={hlsStreamUrl} overlays={overlays} />}
        </div>
        <div className="buttons">
            <button className={add===1 ? "active" : "btn"} onClick={()=> {setAdd(1);setEdit(false)}}>Add Overlay</button>
            <button className={add===2 ? "active" : "btn"} onClick={()=>setAdd(2)}>Delete Overlay</button>
            <button className={add===3 ? "active" : "btn"} onClick={()=>{setAdd(3); setEdit(true)}}>Edit Overlay</button>
        </div>
      
        {add === 1 && <AddOverlayForm onAddOverlay={handleAddOverlay} onEditOverlay={handleEditOverlay} Edit={edit} />}
        {add === 2 && <DeleteOverlayForm onDeleteOverlay={handleDeleteOverlay}/>}
        {add === 3 && <AddOverlayForm onAddOverlay={handleAddOverlay} onEditOverlay={handleEditOverlay} Edit={edit}/>}
    </div>
  );
};

export default Main;
