import React, {useState} from 'react'
import { FaConnectdevelop } from "react-icons/fa";
import achieve from "./dataAchieve"
const Achievement = () => {

     const [people, setPeople] = useState(achieve)

     return (
          <section className="achievement">
               <div className="absolute"></div>
               <div className="container">
                    <div className="row">
                         <div className="col-12">
                           <div className="multi-sentences">
                              <h5 className="text-center white">OUR ACHIEVMENTS</h5>
                              <p className="text-center white">LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY</p>
                              
                           </div>
                         </div>
                         {/*  */}
                         {people.map((person)=> {
                              const {id, icon, number, info} = person
                              return(
                                   <div className="col-3" key={id}>
                                        <div className="card border-0">
                                             <div className="card-body text-center">
                                                  <span>
                                                       {icon}
                                                  </span>
                                                  <h1>{number}</h1>
                                                  <h2>{info}</h2>

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

export default Achievement