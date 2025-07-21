// SortableItem.js
import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import styles from "./MediaUpload.module.css";

const SortableItem = ({ id, url, onDelete }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className={styles.thumbnail}>
      <img src={url} alt="sortable" className={styles.thumbnailImage} />
      <a href={url} download className={styles.downloadBadge}>Download</a>
      <button className={styles.deleteButton} onClick={onDelete}>✕</button>
    </div>
  );
};

export default SortableItem;
