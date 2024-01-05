import styles from "@/assets/css/loading.module.css";
const LoadingSpinner = () => {
  return (
    <div className={styles["lds-grid"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
export default LoadingSpinner;
