import { useRouter } from 'next/router'

const PostPage = () => {
  const router = useRouter()
  const { name } = router.query
  if (!name) {
    router.push('/404')
  }
  return <h1>Post: {name}</h1>
}

export default PostPage