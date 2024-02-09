const getOverlays = async () => {
    const url = `http://localhost:5000/overlay_settings`;
    const response = await fetch(url);
    const overlays = await response.json();
    console.log(overlays);
    return overlays.data;
};

export default getOverlays;