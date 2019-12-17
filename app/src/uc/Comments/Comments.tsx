import * as React from "react";
import Comment from "src/uc/Comments/Comment";
import CommentList from "src/uc/Comments/CommentList";

class Comments extends React.Component {
  render() {
    return (
      <div>
        <Comment />
        <CommentList />
      </div>
    );
  }
}

export default Comments;
