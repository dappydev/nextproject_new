import { PostCard } from "./postCard"

const Posts = ({ data }) => {
  return (
    <main className="flex-1">
      {data && data.map((item, index) => <PostCard key={index} data={item} />)}
    </main>
  )
}

export default Posts