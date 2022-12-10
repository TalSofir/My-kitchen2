import React, { Component } from 'react'
import FCRecipes from '../Functional Components/FCRecipes'
import recipesArr from '../Data'
import FCRecipe from '../Functional Components/FCRecipe'


export default class CCMyKitchen extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      arr: recipesArr,
      arrDone: []

    })
  }

  getIdToDelFromRecipes = (idToDel) => {
    let newArr = this.state.arr.filter(recipe => recipe.id !== idToDel);
    let temp = recipesArr.find(r => r.id == idToDel);
    alert(temp.name);

    this.setState({
      arr: newArr, arrDone: [...this.state.arrDone, temp]
    })
  }

  getIdToDelFromRecipesDone = (idToDel) => {
    let newArr = this.state.arrDone.filter(recipe => recipe.id !== idToDel);
    let temp = recipesArr.find(r => r.id == idToDel);
    alert(temp.name);
    this.setState({ arrDone: newArr, arr: [...this.state.arr, temp] })
  }



  render() {
    return (
      <div className='container'>
          <FCRecipes arr={this.state.arr} sendIdToDelFromRecipes={this.getIdToDelFromRecipes} btnName={"Praper"} />
        <h1>Recipes Done: {this.state.arrDone.length}</h1>
          <FCRecipes arr={this.state.arrDone} sendIdToDelFromRecipes={this.getIdToDelFromRecipesDone} btnName={"Eat"} />
      </div>
    )
  }
}
