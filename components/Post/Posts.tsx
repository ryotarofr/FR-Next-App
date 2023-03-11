import styles from "./Posts.module.css"
import Post1 from "./2022_3_11"
import { Post2 } from "./2022_03_12"

const Posts = () => {
  return (
    <div className={styles.posts}>
      {/* <div>New Post</div> */}
      <div className={styles.postList}>
        {/* <Post2 /> */}
        <Post1 />
      </div>
    </div>
  )
}

export default Posts