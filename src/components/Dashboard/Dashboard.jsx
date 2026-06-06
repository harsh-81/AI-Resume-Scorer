import React from "react";
import styles from "./Dashboard.module.css";
import CreditScoreIcon from '@mui/icons-material/CreditScore';

const Dashboard = () => {
  return (
    <div className={styles.Dashboard}>
      <div className={styles.DashboardLeft}>
        <div className={styles.DashboardHeader}>
          <div className={styles.DashboardHeaderTitle}>
            Smart Resume Screening
          </div>
          <div className={styles.DashboardHeaderLargeTitle}>
            Resume Match Score
          </div>
        </div>

        <div className={styles.alertInfo}>
          <div>🔔 Important Instructions</div>
          <div className={styles.dashboardInstruction}>
            <div>
              📄 Please paste the complete job description in the "Job
              Description" field before submitting.
            </div>
            <div>📎 Only PDF format (.pdf) resumes are accepted.</div>
          </div>
        </div>
        <div className={styles.DashboardUploadResume}>
          <div className={styles.DashboardResumeBlock}>Upload Your Resume</div>
          <div className={styles.DashboardInputField}>
            <label htmlFor="inputField" className={styles.analyzeAIBtn}>
              Upload Resume
            </label>
            <input type="file" accept=".pdf" id="inputField" />
          </div>
        </div>
        <div className={styles.jobDesc}>
          <textarea className={styles.textArea} placeholder='Paste Your Job Description' rows={10} cols={50} ></textarea> 
          <div className={styles.AnalyzeBtn}>Analyze</div>
        </div>
      </div>

      <div className={styles.DashboardRight}>
        <div className={styles.DashboardRightTopCard}>
          <div>Analyze With AI</div>
          
          <img className={styles.profileImg} src="" alt="" />
          <h2>CodingHunger</h2>
        </div>

        <div className={styles.DashboardRightTopCard}>
          <div>Result</div>
          
          <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: 20}}>
              <h1>75%</h1>
              <CreditScoreIcon sx={{fontsize:22}}/>
          </div>
          
          <div className={styles.feedback}>
            <h3>Feedback</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit nobis fuga quod id cupiditate. Ex voluptate blanditiis quia quisquam nostrum nobis quasi, iure a quis optio, est porro, eaque distinctio!</p>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Dashboard;
