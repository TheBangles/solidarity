import algoliasearch from 'algoliasearch';
import React, { Component } from 'react';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  Configure,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
// import '../App.css';
import { Link } from 'react-router-dom';
const searchClient = algoliasearch('5QW3O4IWII', '4962981df99de5b545e9fbe9911675bf');
const index = searchClient.initIndex('project_index');


// mount pushed data
class Search extends Component {
  async componentDidMount(){
    // length = last nextid of projects, in our contract, nextId starts at 1
    const length = await this.props.drizzle.contracts.Donate.methods.nextId().call();

    // Get all projects for search
    const projects = [];

    for (let i = 1; i < length; i++) {
      let project = await this.props.drizzle.contracts.Donate.methods.readSingleProject(i).call();
      projects.push(project);
    }

    // given built-in "push data to algolia",
    // change saveObject to replaceAllObject, for saving duplicately
    index.replaceAllObjects(projects, {
      autoGenerateObjectIDIfNotExist: true
    }).then(({ objectIDs }) => {
      console.log(objectIDs);
    });

  }

  // built-in demo code
  render() {
    return (
      <div className="ais-InstantSearch">
        <InstantSearch indexName="project_index" searchClient={searchClient}>
          <div className="left-panel">
            <ClearRefinements />
            <Configure hitsPerPage={20} />
          </div>
          <div className="right-panel">
            <SearchBox />
            <Hits hitComponent={Hit} />
            <Pagination />
          </div>
        </InstantSearch>
      </div>
    );
  }
}

// built-in demo with added line 74-79
function Hit(props) {
  return (
    <div>
      <img src={props.hit.image} align="left" alt={props.hit.name} />
      <div className="hit-name">
        <Highlight attribute="name" hit={props.hit} />
      </div>
      <div className="hit-description">
        <Highlight attribute="description" hit={props.hit} />
      </div>
      <div>
        <Link to={`/single`}>
          <div> Name {props.hit[2]}</div>
          <div> imgUrl {props.hit[7]}</div>
        </Link>
      </div>
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default Search;
