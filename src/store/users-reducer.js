
const defaultStore = {
    users: [
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
    ]
}

export const usersReducer =(state = defaultStore, action)=> {
    switch (action.type) {


        default:
            return state

    }
};