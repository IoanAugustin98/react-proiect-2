import React from 'react'
import Layout from '../components/Layout'
import HomeCategory from '../components/HomeCategory'
import products from '../Utils/products.json'

class Home extends React.Component {
  constructor(){
    super();
    this.state={
      categories:[],
      categroyNames:[]
    }
  }
  componentDidMount(){
    const categories = Object.values(products);
    const categroyNames = Object.keys(products);
    this.setState({categories, categroyNames});
  }
  render(){
    return (
      <div>
        <Layout>
          <div className="container">
            <div className="row">
              {
                this.state.categories.map((category,index)=>{
                  return(
                    <HomeCategory
                      key         = {index}
                      image       = {category.image}
                      title       = {category.name}
                      description = {category.description}
                      routeName   = {this.state.categroyNames[index]}
                    />
                  )
                })
              }
            </div>
          </div>
        </Layout>
      </div>
    )
  }
}

export default Home