import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.pillShape}>
        <span className={styles.starIcon}>★</span>
        <span className={styles.pillText}>次世代AIプラットフォーム</span>
      </div>

      <h1 className={styles.title}>
        最速かつ最強の
        <br />
        AIプラットフォーム
      </h1>

      <p className={styles.subtitle}>
        業界をリードするモデルとツールで、革新的なAI体験を構築。
        <br />
        思考のスピードで創造し、セキュリティを最優先に。
      </p>

      <div className={styles.buttonsContainer}>
        <button className={`${styles.buttonBase} ${styles.primaryButton}`}>
          今すぐ始める
        </button>
        <button className={`${styles.buttonBase} ${styles.secondaryButton}`}>
          デモを見る
        </button>
      </div>
    </section>
  );
}
