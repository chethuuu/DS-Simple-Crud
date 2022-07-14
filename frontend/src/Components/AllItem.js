import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios'

function AllItem() {
    const [item, setItem] = useState();

    useEffect(() => {
        const getItem = async () => {
            const res = await axios.get("http://localhost:5500/api/items");
            setItem(res.data)
        }
        getItem();
    }, []);

    function deleteItem(_id) {
        axios
            .delete("http://localhost:5500/api/item/" + _id)
            .then((res) => {
                console.log(res.data);
                alert('delete');
            }).catch((err) => {
                alert(err);
            })
        setItem(item.filter((item) => item._id !== _id))
    }


    return (
        <div>
            <NavLink to='/item'>
                <button>Create Item</button>
            </NavLink>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Item</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            item && item.map((item, id) => {
                                return (
                                    <tr>
                                        <td>{id + 1}</td>
                                        <td>{item.item}</td>
                                        <th><a
                                            className="btn btn-warning"
                                            href={`/items/${item._id}`} >
                                            &nbsp;&nbsp; Update
                                        </a></th>
                                        <th><button className="btn btn-danger" onClick={() => {

                                            deleteItem(item._id);
                                        }}>Delete</button></th>
                                    </tr>
                                )
                            }
                            )

                        }

                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default AllItem