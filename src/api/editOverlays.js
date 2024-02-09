

const editOverlay = async (route , data) => {

    try{
        const url = `http://localhost:5000/edit/${route}`;
        const newData = {
            new_content: {
                content: data.content,
                color: data.color,
                align: data.align
            }
        };
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)
        });
        const result = await response.json();
        console.log(result);
        return result;
    }
    catch(error){
        throw error;
    }

};

export default editOverlay;