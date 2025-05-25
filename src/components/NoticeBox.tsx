import { useEffect, useState } from "react";
import "../index.css";

interface Noticeprops {
  title: string;
  type?: "info" | "warning" | "error";
  children?: React.ReactNode;
  dismissible?: boolean;
  autoDismiss?: boolean;
  dismissDelay?: number; // in ms
}

const NoticeBox = ({
  title,
  type = "info",
  dismissible,
  autoDismiss,
  dismissDelay,
  children,
}: Noticeprops) => {
  const [showExit, setShowExit] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  //   const [displayComponent, setDisplayComponent] = useState("");

  //   METHOD 1 //
  const noticeClass =
    {
      info: "info",
      warning: "warning",
      error: "error",
    }[type] ?? "notice-info"; // fallback, just in case ?? "notice-info"

  // METHOD 2 //
  //   const styles = {
  //     info: "notice-info",
  //     warning: "notice-warning",
  //     error: "notice-error",
  //   };
  //   const styles = { ... };
  //   const noticeClass = styles[type];

  // METHOD 3 //
  //   let noticeClass;
  //   if (type === "info") {
  //     noticeClass = "notice-info";
  //   } else if (type === "warning") {
  //     noticeClass = "notice-warning";
  //   } else if (type === "error") {
  //     noticeClass = "notice-error";
  //   }

  //   const exit = () => {
  //     if (dismissible === true} {
  //         return "showExit";
  //     }
  //   }

  const handleClick = () => {
    // setShowExit(false);
    // setDisplayComponent("displayNone");
    setFadeOut(true);
    setTimeout(() => {
      setShowExit(false);
    }, 300); // matches animation duration
  };

  useEffect(() => {
    if (autoDismiss) {
      const timer = setTimeout(handleClick, dismissDelay ?? 3000);

      return () => clearTimeout(timer);
    }
  }, [autoDismiss, dismissDelay]);

  if (!showExit) return null; // Don't render at all if dismissed

  return (
    <div className={`notice-box ${noticeClass} ${fadeOut ? "fade-out" : ""}`}>
      {dismissible && showExit && (
        <span className="exitBtn" onClick={handleClick}>
          ❌
        </span>
      )}
      <h1>
        <strong>{title}</strong>
      </h1>
      <div>{children}</div>
    </div>
  );
};

export default NoticeBox;
