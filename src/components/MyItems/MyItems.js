import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [myItems, setMyItems] = useState([])

    useEffect(() => {
        if (user?.email) {
            axios.get(`http://localhost:5000/allproducts?email=${user.email}`)
                .then(function (response) {
                    // handle success
                    setMyItems(response.data);
                })
        }
    }, [user])

    return (
        <div>
            <table>
                <tr>
                    <th>name</th>
                    <th>name</th>
                    <th>name</th>
                    <th>name</th>
                    <th>name</th>
                    <th>name</th>
                    <th>name</th>
                </tr>
                <tr>
                    <td>forhad hasan faruk ami bese ase u kmon asees  re vai valo naki</td>
                    <td>forhad</td>
                    <td>forhad</td>
                    <td>forhad hasan faruk ami bese ase u kmon asees  re vai valo naki</td>
                    <td>forhad</td>
                    <td>forhad</td>
                    <td>forhad</td>
                </tr>
            </table>
        </div>
    );
};

export default MyItems;