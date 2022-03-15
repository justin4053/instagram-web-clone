import React, { useEffect, useState } from "react"
import Post from "./Post"
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { db } from "../firebase"

// const posts = [
//   {
//     id: "123",
//     username: "justin1",
//     userImg: "https://img.ltn.com.tw/Upload/news/600/2022/02/27/74.jpg",
//     img: "https://img.ltn.com.tw/Upload/news/600/2022/02/27/74.jpg",
//     caption: "AAAAAABBBBBBBBBBCCCCCCCCCCCCC",
//   },
//   {
//     id: "123",
//     username: "justin2",
//     userImg: "https://img.ltn.com.tw/Upload/news/600/2022/02/27/74.jpg",
//     img: "https://img.ltn.com.tw/Upload/news/600/2022/02/27/74.jpg",
//     caption: "AAAAAABBBBBBBBBBCCCCCCCCCCCCC",
//   },
//   {
//     id: "123",
//     username: "justin3",
//     userImg: "https://img.ltn.com.tw/Upload/news/600/2022/02/27/74.jpg",
//     img: "https://img.ltn.com.tw/Upload/news/600/2022/02/27/74.jpg",
//     caption: "AAAAAABBBBBBBBBBCCCCCCCCCCCCC",
//   },
// ]

function Posts() {
  const [posts, setPosts] = useState([])
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs)
        }
      ),
    [db]
  )
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  )
}

export default Posts
