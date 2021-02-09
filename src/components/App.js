import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  onFindPetsClick = () => {
    let x = this.state.filters.type
    if (x === 'all') {
      fetch(`/api/pets`)
      .then(resp=>resp.json())
      .then(data=>{
        this.setState({
          pets: data
        })
      })  
    } else if (x === 'cat') {
      fetch(`/api/pets?type=cat`)
      .then(resp=>resp.json())
      .then(data=>{
        this.setState({
          pets: data
        })
      })  
    } else if (x === 'dog') {
      fetch(`/api/pets?type=dog`)
      .then(resp=>resp.json())
      .then(data=>{
        this.setState({
          pets: data
        })
      })  
    } else if (x === 'micropig') {
      fetch(`/api/pets?type=micropig`)
      .then(resp=>resp.json())
      .then(data=>{
        this.setState({
          pets: data
        })
      })  
    }
  }

  onAdoptPet = (id) => {
    let currentPets = this.state.pets
    let pet = currentPets.find(pet=>pet.id===id);
    pet.isAdopted = true
    this.setState({
      pets: currentPets
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters type={this.state.filters.type} onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
