import React from 'react'
import '../styles/doctor.css'

const Doctor = () => {
  return (
    <div>
      <div><div className="doc2">
    <section className="home" id="home">
        <div className="content">
            <h3>AL-EAZE CARE</h3>
            <p> Professional care for your loved ones</p>
            <a href="#" className="btn2">BOOK APPOINTMENT</a>
        </div>
        <div className="imgdoc-container">
            <img src={require("../images/img3.jpg")}/>
        </div>
    </section>
    <section className="doc1">
    <br></br>
    <br></br>
    <br></br>
    <br/><br/>
    <br></br>
        <h1 className="heading">
            Meet Our Doctors
        </h1>
    <div className="doc">
        
                    <div className="box">
                        <img src={require("../images/doc1.jpg")} alt=""/>
                        <h3>Dr. Gaurav Sharma</h3>
                        
                    </div>
                    <div className="box">
                        <img src={require("../images/doc2.jpg")} alt=""/>
                        <h3>Dr. Ayushi Mehra</h3>
                       
                    
                </div>
                
                    <div className="box">
                        <img src={require("../images/doc3.jpg")} alt=""/>
                        <h3>Dr. Tanya Mishra</h3>
                        
                  
                </div>
               </div>
               <div className="doc">
                    <div className="box">
                        <img src={require("../images/doc4.jpg")}alt=""/>
                        <h3>Dr. Daniel Mike</h3>
                        
                    </div>
              
                
                    <div className="box">
                        <img src={require("../images/doc5.jpg")} alt=""/>
                        <h3>Dr. Aashna Mukherjee</h3>
                        
                    </div>
               
                
                    <div className="box">
                        <img src={require("../images/doc6.jpg")} alt=""/>
                        <h3>Dr. Clara Mathew</h3>
                        
                    </div>
                
            </div>
    </section>
    <div className="home">
        <div className="content">
            <p> Providing you the best medical services that all of you can trust.<br/>We will give you the most advanced and coordinated care</p>
        </div>
        <div className="img-container1">
        <img src={require("../images/img4.jpg")}/></div>
    </div>
        </div>
    </div>
    </div>
  )
}

export default Doctor
