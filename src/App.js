import './App.css';
import { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      person: null,
    }
  }

  async componentDidMount() {
      const url = 'https://api.randomuser.me';
      const response = await fetch(url);
      const data = await response.json();
      this.setState({
        person: data.results[0],
      })
       

      console.log(data.results[0].gender)
  }

  render() {
    return (
      <div className='App-main-container'>
        {/* Если профайл еще не подгрузился, то покажи Loading...
        Если инфа получена, то выведи её на экран */}
          {!this.state.person ? <p>Loading...</p> : 

          <div className='App-container'>

          <img className='App-image' src={this.state.person.picture.large} alt='userPic'/>
          <p className='App-name'>{this.state.person.name.first} 
          <span> {this.state.person.name.last}</span></p>
          <p className='App-gender'>Gender: {this.state.person.gender}</p>
          <p>{this.state.person.email}</p> 

          </div>

          }

      </div>
    )
  }
}



