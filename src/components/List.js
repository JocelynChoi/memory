import React from "react";
import PropTypes from 'prop-types';
import "./List.css";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
class List extends React.Component {
  state = {
    clicked: [],
    score: 0
  }


  imageClick = (evt) => {
    const id = evt.target.dataset.id;
    if (this.state.clicked.includes(id)) {

      alert("Game over");

    } else {
      this.state.clicked.push(id)
      this.setState({ score: ++this.state.score })

      //not clicked, you should increment the score

    }


  }

  render() {

    return (
      <div>
        <div>
          <h3> Score: ({this.state.score}) </h3>
        </div>

        <div className="list-group">
          {this.props.images.map(image => (
            <div className="list-group-item" key={image.id}>
              <img data-id={image.id} onClick={this.imageClick} alt="" src={image.image} />
            </div>
          ))}

        </div>
    
      </div>

    )
  }
};

List.propTypes = {
  animals: PropTypes.array
}

export default List;
