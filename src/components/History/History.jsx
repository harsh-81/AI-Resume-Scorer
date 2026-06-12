import React from "react";
import styles from "./History.module.css";
import Skeleton from "@mui/material/Skeleton";
import WithAuthHOC from "../../utils/HOC/withAuthHOC";


const History = () => {
  return (
    <div className={styles.History}>
      <div className={styles.HistoryCardBlock}>
        <Skeleton
          variant="rectangular"
          sx={{ borderRadius: "20px" }}
          width={266}
          height={200}
        />
        <div className={styles.HistoryCard}>
          <div className={styles.cardPercentage}>80%</div>
          <h2> frontend developer</h2>
          <p>Resume Name: Resume.pdf</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim totam
            itaque illum, nam a facilis blanditiis assumenda unde esse aut
            repellendus quia vitae dolor, nostrum est animi libero velit! Ullam.
          </p>
          <p>Dated : 2026-4-18</p>
        </div>

        <div className={styles.HistoryCard}>
          <div className={styles.cardPercentage}>80%</div>
          <h2> frontend developer</h2>
          <p>Resume Name: Resume.pdf</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim totam
            itaque illum, nam a facilis blanditiis assumenda unde esse aut
            repellendus quia vitae dolor, nostrum est animi libero velit! Ullam.
          </p>
          <p>Dated : 2026-4-18</p>
        </div>

        <div className={styles.HistoryCard}>
          <div className={styles.cardPercentage}>80%</div>
          <h2> frontend developer</h2>
          <p>Resume Name: Resume.pdf</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim totam
            itaque illum, nam a facilis blanditiis assumenda unde esse aut
            repellendus quia vitae dolor, nostrum est animi libero velit! Ullam.
          </p>
          <p>Dated : 2026-4-18</p>
        </div>

        <div className={styles.HistoryCard}>
          <div className={styles.cardPercentage}>80%</div>
          <h2> frontend developer</h2>
          <p>Resume Name: Resume.pdf</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim totam
            itaque illum, nam a facilis blanditiis assumenda unde esse aut
            repellendus quia vitae dolor, nostrum est animi libero velit! Ullam.
          </p>
          <p>Dated : 2026-4-18</p>
        </div>

        <div className={styles.HistoryCard}>
          <div className={styles.cardPercentage}>80%</div>
          <h2> frontend developer</h2>
          <p>Resume Name: Resume.pdf</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim totam
            itaque illum, nam a facilis blanditiis assumenda unde esse aut
            repellendus quia vitae dolor, nostrum est animi libero velit! Ullam.
          </p>
          <p>Dated : 2026-4-18</p>
        </div>

        <div className={styles.HistoryCard}>
          <div className={styles.cardPercentage}>80%</div>
          <h2> frontend developer</h2>
          <p>Resume Name: Resume.pdf</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim totam
            itaque illum, nam a facilis blanditiis assumenda unde esse aut
            repellendus quia vitae dolor, nostrum est animi libero velit! Ullam.
          </p>
          <p>Dated : 2026-4-18</p>
        </div>
      </div>
    </div>
  );
};

export default WithAuthHOC(History);
