import React, {useState} from 'react'
import data from "./data"

const Slider = () => {

     const [people, setPeople] = useState(data)
     const [readMore, setReadMore] = useState(false)

     const removeItem = (id) => {
          const newPeople = people.filter((people) => people.id !== id)
          setPeople(newPeople)
     }

     return (
          <section className="slider">
               <div className="container">
                    <div className="row">
                         <div className="col-12">
                              <div className="multi-sentences">
                              <h5 className="offer text-center">WHAT WE OFFER</h5>
                              <p className="text-center">LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY</p>
                              
                         </div>

                         </div>
                         
                        {people.map((person) => {
                             const {id, image, icon, title, body} = person
                             return(
                                  <div key={id} className="col-4">
                                       <div className="card border-0">
                                            <img src={image} alt="vxvxv" className="w-100" />
                                            <div className="card-body text-center">
                                                 <span>
                                                      {icon}
                                                 </span>
                                                 <h1 className="font-roboto-bold">{title}</h1>
                                                 <p>
                                                    {readMore ? body : `${body.substring(0, 50)}...`}  
                                                    <button type="button" onClick={()=> setReadMore(!readMore)}>
                                                         {readMore ? 'Show less' : 'Read more'}
                                                    </button>
                                                 </p>
                                                  
                                            </div>
                                            <div className="card-footer text-center">
                                                 <button type="button" className="btn btn-danger" onClick={()=>removeItem(id)}>Delete each one</button>
                                            </div>
                                       </div>
                                  </div>
                             )
                        })}
                       
                    </div>
               </div>

          </section>
     )
}

export default Slider
