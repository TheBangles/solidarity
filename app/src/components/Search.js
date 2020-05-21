import algoliasearch from 'algoliasearch';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  Configure,
} from 'react-instantsearch-dom';
const searchClient = algoliasearch('5QW3O4IWII', '4962981df99de5b545e9fbe9911675bf');
const index = searchClient.initIndex('project_index');


class Search extends Component {

  // mount pushed data
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
      <InstantSearch indexName="project_index" searchClient={searchClient}>
          <ClearRefinements />
          <Configure hitsPerPage={20} />
          <SearchBox />
          <Hits hitComponent={Hit} />
          <Pagination />
      </InstantSearch>
    );
  }
}

// built-in demo with added line 74-79
function Hit(props) {
  return (
    <div>
      {/* <img src={props.hit[7]} align="left" alt={props.hit.name} /> */}
      <Highlight attribute="name" hit={props.hit} />
      <Highlight attribute="description" hit={props.hit} />
      <div>
        <Link to={`/single/${props.hit[0]}`}>
          <div> Name {props.hit[2]} </div>
          <div> imgUrl {props.hit[7]} </div>
        </Link>
      </div>
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default Search;
