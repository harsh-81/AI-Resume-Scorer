import React from "react";
import styles from "./Admin.module.css";
import Skeleton from "@mui/material/Skeleton";
import WithAuthHOC from "../../utils/HOC/withAuthHOC";

const Admin = () => {
  return (
    <div className={styles.Admin}>
      <div className={styles.AdminBlock}>
        <Skeleton
          variant="rectangular"
          sx={{ borderRadius: "20px" }}
          width={266}
          height={400}
        />
        <div className={styles.AdminCard}>
          <h2>Harsh Coder</h2>
          <p style={{ color: "blue" }}>test@gmail.com</p>
          <h3>Score: 50%</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            soluta non velit optio iusto eos tempora quia ea doloremque vel
            molestias tempore modi expedita quas voluptatibus dicta ipsam,
            voluptatem autem.
          </p>
        </div>

        <div className={styles.AdminCard}>
          <h2>Harsh Coder</h2>
          <p style={{ color: "blue" }}>test@gmail.com</p>
          <h3>Score: 50%</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            soluta non velit optio iusto eos tempora quia ea doloremque vel
            molestias tempore modi expedita quas voluptatibus dicta ipsam,
            voluptatem autem.
          </p>
        </div>

        <div className={styles.AdminCard}>
          <h2>Harsh Coder</h2>
          <p style={{ color: "blue" }}>test@gmail.com</p>
          <h3>Score: 50%</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            soluta non velit optio iusto eos tempora quia ea doloremque vel
            molestias tempore modi expedita quas voluptatibus dicta ipsam,
            voluptatem autem.
          </p>
        </div>

        <div className={styles.AdminCard}>
          <h2>Harsh Coder</h2>
          <p style={{ color: "blue" }}>test@gmail.com</p>
          <h3>Score: 50%</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            soluta non velit optio iusto eos tempora quia ea doloremque vel
            molestias tempore modi expedita quas voluptatibus dicta ipsam,
            voluptatem autem.
          </p>
        </div>

        <div className={styles.AdminCard}>
          <h2>Harsh Coder</h2>
          <p style={{ color: "blue" }}>test@gmail.com</p>
          <h3>Score: 50%</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            soluta non velit optio iusto eos tempora quia ea doloremque vel
            molestias tempore modi expedita quas voluptatibus dicta ipsam,
            voluptatem autem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WithAuthHOC(Admin);
