export const fetchChats = async ({queryKey})=>{
    const id=queryKey[1]
    const res = await fetch(`http://3.111.128.67/assignment/chat?page=${id}`)
    if(!res.ok)throw new Error('invalid query fetch')

    const json = await res.json()
    return { json, nextPage: id + 1};

}