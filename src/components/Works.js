import React,{useState,useEffect} from 'react';
import Card from './Card';
import Data from './Data';
import NewCard from './NewCard';
import Announcement from 'react-announcement'
import logo from './logos/logo.png'
import BackToTop from './BackToTop';
const Works = () => {

    let [Events,setEvents]=useState();
    let [OrgNotification,setOrgNotification]=useState("");
    const [check,setCheck]=useState(true)

    if(check){
     fetch("http://localhost:3006/organizationinfo")
     .then((response)=>response.json())
     .then((data)=>{
        setOrgNotification(data)
     })
    //   console.log(OrgNotification)
       setCheck(false)

    }
      
  

  


 
   
   

   useEffect(() => {

    fetch("http://localhost:3006/neweventinfo")
    .then((response) => response.json())
    .then((data) => {
      setEvents(data);
    });
     

//     console.log(Events)
//    console.log(typeof(Data))

 
 }, [Events]);

 

// console.log(Events)
// console.log(OrgNotification[0]?.date)

    
     
    return (
        <div className="container">
            <div>
                <h4 className=" my-5 text-center">जो जन दान-दक्षिणा देते हैं, 
                वे स्वर्गलोक में उच्च स्थान प्राप्त करते हैं। <span className="font-weight-bold" >-  ऋग्वेद</span> </h4>
     
                
            </div>
     
            <div className="row mt-4 justify-content-center align-items-center">
            {
                Data.map(data=> <Card data={data}></Card>)
            }         
            </div>
            <div className="row mt-4 justify-content-center align-items-center">
            {
                Events?.map(data=> <NewCard data={data} filename={data.fileName}></NewCard>)
                
            }   
             
               <Announcement
          title="Here is your component"
          subtitle="The best announcement component for React is finally here. Install it in all your projects."
          link="https://github.com/kristofferandreasen/react-announcement"
          imageSource={logo}
          daysToLive={3}
          secondsBeforeBannerShows={20}
          closeIconSize={30}
      />      
            </div>
            <BackToTop />
        </div>
        
    );
};

export default Works;