import classes from "./comment-list.module.css";
import { useState } from "react";

function CommentList(props) {
  const [comments, setComments] = useState([]);

  const { eventId } = props;

  fetch("/api/feedback")
    .then((response) => response.json())
    .then((data) => {
      const filteredComments = data.feedback.filter(
        (comment) => comment.eventId === eventId
      );
      setComments(filteredComments);
    });

  if (comments.length === 0) {
    return <p>No comments yet.</p>;
  }
  return (
    <ul className={classes.comments}>
      {comments.map((comment) => (
        <li key={comment.id}>
          <p>{comment.feedback}</p>
          <div>
            By{" "}
            <address>
              {comment.email} - {comment.name}
            </address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
