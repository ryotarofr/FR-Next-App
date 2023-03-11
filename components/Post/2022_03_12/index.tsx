import Image from "next/image";
import styles from "./index.module.css";
import { GrFavorite } from "react-icons/gr";
import { AiOutlineClockCircle } from "react-icons/ai";
import { SlOptions } from "react-icons/sl";

export const Post2 = () => {
  // 画像path
  const path = "/assets/thumbnail/1.png";

  return (
    <div className={styles.postWrapper}>
      <div className={styles.flex_col}>
        <Image
          className={styles.thumbnail}
          src={path}
          alt=""
          width={200}
          height={100}
        />
        <div className={styles.title}>
          文がいくつか集まり、かつ、まとまった内容を表すもの。内容のうえで前の文と密接な関係をもつと考えられる文は、そのまま続いて書き継がれ、前の文と隔たりが意識されたとき、次の文は行を改めて書かれる。
        </div>
        <div className={styles.desc}>
          文がいくつか集まり、かつ、まとまった内容を表すもの。内容のうえで前の文と密接な関係をもつと考えられる文は、そのまま続いて書き継がれ、前の文と隔たりが意識されたとき、次の文は行を改めて書かれる。
        </div>
        <div className={styles.postMenu}>
          <div className={styles.postDate}>2022/01/11</div>
          <div className={styles.postIcons}>
            <GrFavorite className={styles.icon_favorite} />
            <AiOutlineClockCircle className={styles.icon_clockcircle} />
            <SlOptions className={styles.icon_options} />
          </div>
        </div>
      </div>
    </div>
  );
};
