import React, { Component } from "react";

const customStyle = {
  heading: {
    margin: '0px 0px 30px 0px',
  },
  rowHead: {
    height: '80px',
  },
  row: {
    height: '100px',
  },
  idColumn: {
    width: '50px',
    textAlign: 'center',
    verticalAlign: 'text-top',
  },
  createdColumn: {
    width: '150px',
    textAlign: 'center',
    verticalAlign: 'text-top',
  },
  memberIdColumn: {
    width: '120px',
    textAlign: 'center',
    verticalAlign: 'text-top',
  },
  viewColumn: {
    textAlign: 'center',
    verticalAlign: 'text-top',
  }
}

class ShowAllComments extends Component {
  render() {
    const { commentList } = this.props;

    let allComment;

    if(!commentList) {
      allComment = <div>Loading comments...</div>;
    } else {
      allComment = commentList.map((comment) =>
        <tr style={customStyle.row} key={comment.id}>
          <td style={customStyle.idColumn}>{comment.id}</td>
          <td style={customStyle.createdColumn}>
            {comment.timestamp.substring(0,10)}<br/>
            at {comment.timestamp.substring(11,19)}
          </td>
          <td style={customStyle.memberIdColumn}>{comment.memberId}</td>
          <td style={customStyle.viewColumn}>{comment.commentLine}</td>
        </tr>
      );
    }

    return (
      <table>
        <thead>
          <tr style={customStyle.rowHead}>
            <th style={customStyle.idColumn}>Id</th>
            <th style={customStyle.createdColumn}>Created</th>
            <th style={customStyle.memberIdColumn}>Member id</th>
            <th style={customStyle.viewColumn}>Comment</th>
          </tr>
        </thead>
        <tbody>
          {allComment}
        </tbody>
      </table>
    );
  }
}

export default ShowAllComments;
