import React from "react";
import PropTypes from 'prop-types';
import ".component/List.css";


// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
class List extends React.Component {
  
  render () {

    return (
      <div className="list-group">
        {this.props.animals.map(item => (
          <div className="list-group-item" key={item.id}>
            {item.name}
          </div>
        ))}
      </div>
    )
  }
};

List.propTypes = {
  animals: PropTypes.array
}

export default List;




