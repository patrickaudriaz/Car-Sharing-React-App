import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTextFilter} from '../../actions/filters';

class RideListFilters extends Component {
  state = {
    calendarFocused: null
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };
  render() {
    return (
      <div>
        <input hidden
          placeholder = "Enter Driver Name"
          type="text"
          value={this.props.filters.text}
          onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />
      </div>
    );
  };
};

//get values from redux store
const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(RideListFilters);
