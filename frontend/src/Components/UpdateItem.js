import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router";

const UpdateItem = () => {
  const [item, setItem] = useState({
    item: ""
  })

  const {id} = useParams();

  useEffect(() => {
    function getItem() {
      axios
        .get(`http://localhost:5500/api/item/${id}`)
        .then((res) => {
          setItem(res.data)
        })
        .catch((err) => {
          alert(err.message)
        })
    }
    getItem();
  },[]);

  function sendData(e) {
    e.preventDefault();
    const updateItem = item;
    axios.put(`http://localhost:5500/api/item/${id}`, updateItem)
      .then(() => {
        alert('Updated')
      })
      .catch((err) => {
        alert(err)
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
        <input type='text' name="item" onChange={handleChange} value={item.item} placeholder='Item' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default UpdateItem