
// get all user
export const getAllUser = async () => {

    const res = await fetch(`https://doyo-pet-fire-store.vercel.app/users`)
    const data = await res.json()
    return data;

}


// update single user by id 
export const updateUserById = async (user, id) => {
    const res = await fetch(`https://doyo-pet-fire-store.vercel.app/users/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    const data = await res.json()
    return data;
}

// delete single userBy id
export const deleteUserById = async (id) => {
    const res = await fetch(`https://doyo-pet-fire-store.vercel.app/users/${id}`, {
        method: 'DELETE'

    })
    const data = await res.json()
    return data;
}