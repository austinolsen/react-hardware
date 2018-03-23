import React, {Component} from 'react'
import AdminView from './AdminView'

class HomePage extends Component {
  state = {
    itemCurrentlyOnSale: 'A Hammer',
    editSaleItem: false,
    productList: [
      {
        productName: 'Hammer',
        description: 'Itsa hammer',
        price: 12.3,
        id: 1
      },
      {
        productName: 'Nail',
        description: 'Itsa nail',
        price: 0.12,
        id: 2
      }]
    }

    toggleEditSaleItem = () => {
      // const newState = {...this.state}
      // newState.editSaleItem = !this.state.editSaleItem
      // this.setState(newState)

      const editSaleItem = !this.state.editSaleItem
      this.setState({editSaleItem})
    }

    handleItemCurrentlyOnSaleChange = (event) => {
      const itemCurrentlyOnSale = event.target.value
      this.setState({ itemCurrentlyOnSale })
    }

    addNewProductToProductList = (newProduct) => {
      const productList = [...this.state.productList]
      newProduct.id = productList.length
      productList.push(newProduct)
      this.setState({productList})
    }

    deleteProductById = (productIdToDelete) => {
      const productList = [...this.state.productList]
      const productToDelete = productList.find((product) => {
        return product.id === productIdToDelete
      })
      const indexToDelete = productList.indexOf(productToDelete)
      productList.splice(indexToDelete, 1)
      this.setState({productList})
    }




    render() {
      return (
        <div>
          <h1>My Hardware Store</h1>
          <div>
            <span>Currently On Sale: { this.state.itemCurrentlyOnSale }!</span>
            <span>
              <button onClick={this.toggleEditSaleItem}>
                { this.state.editSaleItem ? 'Hide' : 'Edit Sale Item' }
              </button>
            </span>

            {this.state.editSaleItem ?
              <div>
                <input
                  onChange={this.handleItemCurrentlyOnSaleChange}
                  value={this.state.itemCurrentlyOnSale}
                  type="text" />
                </div>
                : null
              }

              <AdminView productList = {this.state.productList}
                addNewProductToProductList={this.addNewProductToProductList}
                deleteProductById={this.deleteProductById} />

              </div>
            </div>
          )
        }
      }

      export default HomePage;
