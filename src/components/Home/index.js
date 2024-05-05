import {Component} from 'react'
import Header from '../Header'
import DishCategory from '../DishCategory'
import DishList from '../DishList'

import './index.css'

class Home extends Component {
  state = {
    restaurantName: '',
    dishCategory: [],
    // dishData: [],
    activeCategory: '',
    quantity: 0,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const apiUrl =
      'https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const fetchedData = await response.json()

    const restaurantName = fetchedData[0].restaurant_name
    this.setState({
      restaurantName,
    })
    /* const updatedDishData =
      fetchedData[0].table_menu_list[0].category_dishes.map(item => ({
        id: item.dish_id,
        name: item.dish_name,
        price: item.dish_price,
        image: item.dish_image,
        currency: item.dish_currency,
        calories: item.dish_calories,
        description: item.dish_description,
        availability: item.dish_Availability,
        type: item.dish_Type,
        addOn: item.addonCat,
      }))

    console.log(updatedDishData) */
    const dishCategoryData = fetchedData[0].table_menu_list.map(list => ({
      category: list.menu_category,
      categoryId: list.menu_category_id,
      dishData: list.category_dishes.map(item => ({
        id: item.dish_id,
        name: item.dish_name,
        price: item.dish_price,
        image: item.dish_image,
        currency: item.dish_currency,
        calories: item.dish_calories,
        description: item.dish_description,
        availability: item.dish_Availability,
        type: item.dish_Type,
        addOn: item.addonCat,
      })),
    }))

    console.log(dishCategoryData)
    this.setState({
      dishCategory: dishCategoryData,
      // dishData: updatedDishData,
      activeCategory: dishCategoryData[0].categoryId,
    })
  }

  setActiveCategoryId = newId => {
    this.setState({activeCategory: newId})
  }

  renderCategoryList = () => {
    const {activeCategory, dishCategory} = this.state

    return (
      <ul className="filters-list">
        {dishCategory.map(eachCategory => (
          <DishCategory
            key={eachCategory.categoryId}
            isActive={eachCategory.categoryId === activeCategory}
            categoryDetails={eachCategory}
            setActiveCategoryId={this.setActiveCategoryId}
          />
        ))}
      </ul>
    )
  }

  onDecrementQuantity = () => {
    const {quantity} = this.state
    if (quantity > 1) {
      this.setState(prevState => ({quantity: prevState.quantity - 1}))
    }
  }

  onIncrementQuantity = () => {
    this.setState(prevState => ({quantity: prevState.quantity + 1}))
  }

  renderDishList = () => {
    const {activeCategory, dishCategory, quantity} = this.state

    return (
      <ul className="dish-list">
        {dishCategory.map(eachCategory =>
          eachCategory.categoryId === activeCategory
            ? eachCategory.dishData.map(item => (
                <DishList
                  key={item.id}
                  details={item}
                  quantity={quantity}
                  onDecrementQuantity={this.onDecrementQuantity}
                  onIncrementQuantity={this.onIncrementQuantity}
                />
              ))
            : null,
        )}
      </ul>
    )
  }

  render() {
    const {restaurantName, quantity} = this.state
    return (
      <div>
        <Header name={restaurantName} quantity={quantity} />
        {this.renderCategoryList()}
        {this.renderDishList()}
      </div>
    )
  }
}

export default Home
