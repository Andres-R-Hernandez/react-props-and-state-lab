import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  createPetComponents = () => {
    return this.props.pets.map((pet,i)=><Pet key={i} pet={pet} onAdoptPet={this.props.onAdoptPet}/>);
  } 
  
  render() {
    return <div className="ui cards">{this.createPetComponents()}</div>
  }
}

export default PetBrowser
