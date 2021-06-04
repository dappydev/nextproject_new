import { PostCard } from "./postCard"

const Posts = ({ data }) => {
  return (
    <main className="flex-1">
      {data && data.map((data, index) => <PostCard key={index} data={data} />)}
    </main>
  )
}

export default Posts