import './index.css'

const DishList = props => {
  const {details, quantity, onIncrementQuantity, onDecrementQuantity} = props
  const {
    name,
    price,
    image,
    currency,
    calories,
    description,
    availability,
    type,
    addOn,
  } = details

  const rendertype = () => {
    if (type === 1) {
      return (
        <>
          <img
            className="type-img"
            src="https://vectorified.com/images/non-veg-icon-21.png"
            alt="non-veg"
          />
        </>
      )
    }
    return (
      <>
        <img
          className="type-img"
          src="https://www.pngkey.com/png/full/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png"
          alt="veg"
        />
      </>
    )
  }
  const onClickIncrement = () => {
    onIncrementQuantity()
  }

  const onClickDecrement = () => {
    onDecrementQuantity()
  }

  const rendercart = () => (
    <>
      <div className="quantity-container">
        <button
          type="button"
          className="quantity-controller-button"
          onClick={onClickDecrement}
        >
          -
        </button>
        <p className="quantity">{quantity}</p>
        <button
          type="button"
          className="quantity-controller-button"
          onClick={onClickIncrement}
        >
          +
        </button>
      </div>
    </>
  )
  return (
    <>
      <li>
        <div className="dish-card">
          <div className="name-card">
            <h1>
              {rendertype()}
              {name}
            </h1>
            <p>
              {currency} {price}
            </p>
            <p>{description}</p>
            <p>{availability ? rendercart() : 'Not available'}</p>
            <p>{addOn.length > 0 ? 'Customizations available' : null}</p>
          </div>
          <div>
            <p>{calories} calories</p>
          </div>
          <div>
            {' '}
            <img className="img" src={image} alt="img" />
          </div>
        </div>
      </li>
    </>
  )
}
export default DishList

/*
     id: item.dish_id,
        name: item.dish_name,
        price: item.dish_price,
        image: item.dish_image,
        currency: item.dish_currency,
        calories: item.dish_calories,
        description: item.dish_description,
        availability: item.dish_Availability,
        type: item.dish_Type,
        addOn: item.addonCat, */
