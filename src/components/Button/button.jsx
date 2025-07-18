// components/ScheduleButton.tsx
"use client";
import styles from "./button.module.css";

export default function ScheduleButton() {
  const handleClick = () => {
    window.open(
      "https://calendar.google.com/calendar/appointments/schedules/AcZssZ01mFZc7J8v9LNHfFA7nt8FhSz_n04SJnRlPtsue8s_zKQIUz-PGRYiDB2zk5RcbEg_3ZXE4Iib?gv=true",
      "_blank"
    );
  };

  return (
    <div className={styles.container}>
     
      <button onClick={handleClick} className={styles.title}>
        Agendar ahora
      </button>
    </div>
  );
}
