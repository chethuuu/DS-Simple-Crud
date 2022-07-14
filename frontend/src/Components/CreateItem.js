import React, { useState } from 'react';
import axios from 'axios';

function CreateItem() {
    const [item, setItem] = useState({
        item: ""
    });

    function sendData(e) {
        e.preventDefault();
        axios
            .post("http://localhost:5500/api/item", item)
            .then(() => {
                alert("Create");
            })
            .catch((err) => {
                alert(err)
            });
        setItem({
            item: ""
        })
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setItem((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    return (
        <div>
            <form onSubmit={sendData}>
                <input type='text' name="item" onChange={handleChange} value={item.item} placeholder='Enter Item' />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default CreateItem