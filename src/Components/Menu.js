import React, {useState} from 'react'
import items from "./menuData"
import Categories from "./Categories"

const allCategories =['ALL',... new Set (items.map((item)=> item.category))]; 
console.log(allCategories);

const Menu = () => {

     const [menuItems, setMenuItems] = useState(items)
     const [categories, setCategories] = useState(allCategories)

     const filtrItems = (category) => {
          if(category === 'ALL') {
               setMenuItems(items)
               return;
          }

          const newItems = items.filter((item) => item.category === category)
          setMenuItems(newItems)
     }


     return (
          <section className="tab-menu">
               <div className="container">
                    <div className="row">
                         <div className="col-12">
                              <div className="multi-sentences mb-5">
                                   <h5 className="text-center white">OUR SERVICES</h5>
                                   <p className="text-center white">LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY</p>
                              </div>
                         </div>
                    </div>
                    <Categories categories={categories} mainItem={filtrItems} />

                    <div className="row">
                         {menuItems.map((person) => {
                              const {id, title, img, body} = person
                              return(
                                   <div key={id} className="col-lg-4 col-md-6 col-12 mb-3 main-img">
                                        <img src={img} alt={title} className="w-100" />
                                        <div className="const">
                                             <h1>{body}</h1>
                                        </div>
                                   </div>
                              )
                         })}
                    </div>
               </div>

          </section>
     )
}

export default Menu
