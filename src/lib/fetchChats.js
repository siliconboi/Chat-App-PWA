export const fetchChats = async ({pageParam=0})=>{
    const res = await fetch(`https://3.111.128.67/assignment/chat?page=${pageParam}`)
    if(!res.ok)throw new Error('invalid query fetch')

    const json = await res.json()
    return { json, nextPage: pageParam + 1, totalPages:10};

}