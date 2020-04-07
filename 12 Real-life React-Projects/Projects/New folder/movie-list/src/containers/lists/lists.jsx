import React from 'react';

import Card  from '../../components/cards/cards';

class List extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
      loading: true
    }
  };

  async componentDidMount() {
    try {
      const movies = await fetch('../../../assets/data.json');
      const movieJSON = await movies.json();
      if (movieJSON) {
        this.setState({
          data: movieJSON,
          loading: false
        })
      };
    } 
    catch(error) {
      console.log(error);
      // do something with error
    }
  };

  render() {
    const { data, loading } = this.state;
    if (loading) {
      return <div>Loading...</div>
    }
    return data.map( movie => <Card key={movie.id} movie={movie} /> )
  };
};

export default List;