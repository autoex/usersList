import {useState} from 'react'
function UsersList() {

    const [users, setUsers] = useState([
        {
            "name": "V_aDi_M",
            "id": 15950,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
        {
            "name": "AlexFox",
            "id": 15949,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
        {
            "name": "D3adduck",
            "id": 15948,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": true
        }
    ])
    return (<>
            {users.map(u=>(
                <div className='item'>{u.name}</div>)
            )}



        </>

    );
}

export default UsersList;
