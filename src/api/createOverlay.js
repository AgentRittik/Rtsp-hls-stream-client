

const createOverlay = async (data) => {
    try{
        const url = `http://localhost:5000/create`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        console.log(result);
        return result;
    }
    catch(error){
        throw error;
    }
   
};

export default createOverlay;