import React from 'react';
import Modal from 'react-modal';
import ResultsIndexItem from './results_index_item';
import LoadingIcon from './loading_icon';

class ResultsIndex extends React.Component {
  render() {
    let results = this.props.businesses;
    if (!results) {
      return <LoadingIcon />;
    }
    return(
      <ul className="results-index">
        {results.map( (business, i) => <ResultsIndexItem key={i} business={business}/> )}
      </ul>
    );
  }
}

export default ResultsIndex;
