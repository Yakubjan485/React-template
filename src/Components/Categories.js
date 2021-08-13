import React from 'react'

const Categories = ({categories, mainItem}) => {
     return (
          <div className="row">
               <div className="col-8 offset-2">
                    <div className="ml-auto mr-auto">
                     {categories.map((category, index)=> {
                    return(
                         
                         
                         <button
                         type="button"
                         className="text-center"
                         onClick={()=> mainItem(category)}
                         key={index}
                         >
                         {category}

                         </button>
                         
                         
                    )
               })}
                    </div>
               
               </div>
               
          </div>
     )
}

export default Categories
