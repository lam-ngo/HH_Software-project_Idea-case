import PropTypes from 'prop-types';
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllIdeas } from "../actions";

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
  titleColumn: {
    width: '790px',
    textAlign: 'center',
    verticalAlign: 'text-top',
  },
  viewColumn: {
    width: '120px',
    textAlign: 'center',
    verticalAlign: 'text-top',
  }
};

class IdeaIndex extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.props.fetchAllIdeas();
  }

  renderIdeas = () => {
    let ideaList = this.props.ideaList;
    if(ideaList === undefined){
      return '';
    } else {
      const listAllIdeas = ideaList.map((idea) => (
          <tr style={customStyle.row} key={idea.id}>
            <td style={customStyle.idColumn} >{idea.id}</td>
            <td style={customStyle.titleColumn} >{idea.title}</td>
            <td style={customStyle.viewColumn} >
              <Link to={`/ideas/${idea.id}`}>View idea</Link>
            </td>
          </tr>
        ));
      return listAllIdeas;
    }
  }

  render() {
    let ideaTable;

    if(this.props.ideaList === undefined) {
      ideaTable =
        <tr>
          <td></td>
          <td>Loading...</td>
          <td></td>
        </tr>
      ;
    } else {
      ideaTable = this.renderIdeas();
    }

    return (
      <div>

        <div className="container">
          <h3 style={customStyle.heading} >IDEA BOARD</h3>
          <table>
            <thead>
              <tr style={customStyle.rowHead}>
                <th style={customStyle.idColumn} >ID</th>
                <th style={customStyle.titleColumn} >Title</th>
                <th style={customStyle.viewColumn} ></th>
              </tr>
            </thead>
            <tbody>
              {ideaTable}
            </tbody>
          </table>
        </div>

        <div className="container">
            <Link to="/ideas/new">
              <button className="button button-primary button-text">
                ADD NEW IDEA
              </button>
            </Link>
        </div>

      </div>
    );
  }
}

IdeaIndex.PropTypes = {
  ideaList: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return { ideaList: state.idea.ideaList };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllIdeas: () => fetchAllIdeas(dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(IdeaIndex);
