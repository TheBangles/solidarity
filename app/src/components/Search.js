import algoliasearch from 'algoliasearch';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Highlight,
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
      console.log(projects)
    }

    // given built-in "push data to algolia",
    // change saveObject to replaceAllObject, to avoid saving duplicately
    await index.replaceAllObjects(projects, {
      autoGenerateObjectIDIfNotExist: true
    });
  }

  // built-in demo code
  render() {
    return (
      <InstantSearch indexName="project_index" searchClient={searchClient} refresh>
          <Configure hitsPerPage={50} />
          <div style={{ padding: '20px 0'}}>
            <SearchBox />
          </div>
          <Hits hitComponent={Hit} />
      </InstantSearch>
    );
  }
}

// built-in demo with added Link
function Hit(props) {
  return (
    <div className="container">
      <div className="flex-container">
      <Highlight attribute="name" hit={props.hit} />
      <Highlight attribute="description" hit={props.hit} />
      <div className="individual-flex">
        {<Link to={`/single/${props.hit[0]}`}>
            <img src={props.hit[7]} alt={props.hit.name} width='300px' height="300"/>
            <br/>
            <div> {props.hit[2]} </div>
          </Link>
        }
        </div>
      </div>
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default Search;
