export const apiGet = (url) => () => fetch(url).then(response => response.json())

export const apiPut = (url, id, obj) => () =>
    fetch(`${url}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(obj),
    headers: new Headers({'Content-type': 'application/json'})
}).then(response => response.json())
// .then(res => {
//     if(res.error) {
//         return({error: res.validation})
//     }
//     return res
// })

export const apiPost = (url, obj) => () =>
    fetch(`${url}`, {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: new Headers({'Content-type': 'application/json'})
}).then(response => response.json())

export const apiDelete = (url, id) => () =>
    fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: new Headers({'Content-type': 'application/json'})
}).then(response => {
    response.json()
    return id
})
// .then(res => {
//     if(res.error) {
//         return({error: res.validation})
//     }
//     return id
// })