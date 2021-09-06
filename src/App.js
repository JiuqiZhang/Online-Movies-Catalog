import React, { Component} from 'react';

import {CardList} from './components/card_list/card_list_conponent';
import './App.css';
import {SearchBox} from './components/search-box/search_box';
class App extends Component{
  constructor(){
    super();

    this.state = {
      movies:[],
      searchField:'',
      filterField:'',
      response:'',
      error_message:'',
      searched: false
    };

  }

  componentDidMount(){
    if(this.state.searchField!==''){
      this.setState({searched:true});
    }
    fetch(`https://www.omdbapi.com/?apikey=159c6e1e&s=${this.state.searchField}`)
      .then(response => response.json())
      //.then(users => console.log(users.Search))
      .then(
        users => {
          this.setState({movies: users.Search})
          this.setState({response:users.Response})
          this.setState({error_message:users.Error});
      }
      );     
    
  }


  onKeyPressed = (e) =>{
    if(e.key === 'Enter'){
      this.setState({searchField: e.target.value});
      if(this.state.searchField!==''){
        this.setState({searched:true});
      }
      fetch(`https://www.omdbapi.com/?apikey=159c6e1e&s=${this.state.searchField}`)
        .then(response => response.json())
        //.then(users => console.log(users.Search))
        .then(
          users => {
            this.setState({movies: users.Search})
            this.setState({response:users.Response})
            this.setState({error_message:users.Error});
        }
        )
    }
  }
  /* filter function */
  handleChange = (e) => {
    this.setState({filterField :e.target.value});
  };

  handleSearch = (e) =>{
    this.setState({searchField: e.target.value});
  }

  render(){
    const movies = this.state.movies;
    const searched = this.state.searched;
    const filterField = this.state.filterField;



   
    if (searched === false ){

      return(
        <div className='App'>
          <h1 >Online Movies Catalog</h1>
          <main className='initial_page'>
            <h2 className='slogan'>Search for the movie you like</h2>
          <SearchBox
          onKeyDown={this.onKeyPressed}
          className = 'search'
          placeholder = 'Search by names' 
          handleChange = {this.handleSearch}
          />
          <button className="button button2" onClick = { () => this.componentDidMount()}>Search</button>
          </main>
          
        </div>
      )
        
    }
    if(movies !== undefined){
      const filteredMovies = movies.filter(
        movie => movie.Title.toLowerCase().includes(filterField.toLowerCase())
        )

      return (
      <div className="App">
        
        <h1>Online Movies Catalog</h1>
        <SearchBox
         onKeyDown={this.onKeyPressed}         
         className = 'search'
         placeholder = 'Search by names' 
         handleChange = {this.handleSearch}
         />
        <button className="button button2" onClick = { () => this.componentDidMount()}>Search</button>

        <br></br>
        <SearchBox
         className='filter' 
         placeholder = 'Filter by letters' 
         handleChange = {this.handleChange}
        />
        <br></br><br></br>
        <CardList movies = {filteredMovies}></CardList>
      </div>
    )}else
      {
        return(
          <div className='App'>
            <h1>Online Movies Catalog</h1>
            <SearchBox
             onKeyDown={this.onKeyPressed}
            className = 'search'
            placeholder = 'Search by names' 
            handleChange = {this.handleSearch}
            />
            <button className="button button2" onKeyDown={this.onKeyPressed} onClick = {() => this.componentDidMount()}>Search</button>
  
            <br></br>
            <h3 className = 'warning'>No results.</h3><br></br>
            <h3 className = 'warning'>Try again.</h3>
          </div>
        )
      
    };
    
      
  }
}

export default App;
