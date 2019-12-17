import React, { useState, useEffect } from "react";
import Icon from "components/core/view/Icon";
import { formatTime } from "utils/Date";

import firebase from "src/Firebase/firebase";

export default function CommentList() {
  const [comments, setComments] = useState();
  const commentRef = firebase
    .database()
    .ref()
    .child("comments");

  useEffect(() => {
    // Should not ever set state during rendering, so do this in useEffect instead.
    commentRef.on("value", (snapshot: any) => {
      setComments(snapshot.val());
    });
  }, []);

  const renderGrid = (): any => {
    if (comments) {
      let comment: any = [];
      Object.keys(comments)
        .reverse()
        .forEach((key: any) => {
          let date = formatTime(comments[key].date);
          comment.push(
            <div className="comment" key={key}>
              <div>
                <span className="comment_avatar">
                  <Icon
                    name={comments[key].avatarNumber}
                    subFolder="avatar"
                    boxSize={40}
                  />
                </span>
                <span className="comment_userName">{comments[key].name}</span>
                <span className="comment_time">
                  <span className="comment_date">{`${date.year}/${date.month}/${date.day}`}</span>
                  <span className="comment_hour">{`${date.hour}:${date.minutes}`}</span>
                </span>
              </div>
              <div className="comment_message">{comments[key].message}</div>
            </div>
          );
          // do something with obj
        });
      return comment;
    } else {
      return null;
    }
  };

  return <div>{renderGrid()}</div>;
}
