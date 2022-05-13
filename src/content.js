import { tab } from "@testing-library/user-event/dist/tab";
import { useState, useEffect } from "react";
//1. useEffect(callback)
//-Còn gọi callback mỗi khi components re-render (it dùng)
//- GỌi callback sau khi component thêm element vào DOM
//2. useEffect(callback, [])
//-Chỉ gọi callback 1 lần mỗi khi component mounted
//3. useEffect(callback, [deps])
//-callback sẽ được gọi lại mỗi khi deps thay đổi
//-sưer dụng toán tử so sánh để khi giốg nahu thì k callback lại
const tabs = ['posts', 'comments','albums']
//1. Callback luôn được gọi sau khi components mount
//2. Cleanup function luôn được gọi trước khi components unmounted
function Content() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setTypes] = useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false)
    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res=> res.json())
            .then(posts => {
                setPosts(posts)
           })
    }, [type])

    useEffect(()=>{
        const handleScroll = () =>{
            if(window.scrollY >= 200){
                setShowGoToTop(true)
                console.log('state')
            }else{
                setShowGoToTop(false)
            }
            // setShowGoToTop(window.scrollY >= 200)
        }
        window.addEventListener('scroll', handleScroll)

        //Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[])
    // console.log('re-render')
    return (
       <div>
           {tabs.map(tab =>(
                <button
                style={type === tab ? {
                    color: '#111',
                    backgroundColor: '#333'
                }: {}
             }
                key={tab}
                onClick={()=>setTypes(tab)}>{tab}</button>
           ))}

           <ul>
               {posts.map(post =>(
                    <li key={post.id}>{post.title || post.name}</li>
               ))}
           </ul>
           {showGoToTop && (
               <button
               style={{
                   position: 'fixed',
                   right: 20,
                   bottom: 20,
               }}>Go to top</button>
           )}
       </div>
    )
}

export default Content;