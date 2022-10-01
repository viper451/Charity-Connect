import React, { useState, useEffect } from "react";
import Card from "./Card";
import Data from "./Data";
import NewCard from "./NewCard";
import logo from "./logos/logo.png";
import BackToTop from "./BackToTop";

const Works = () => {
  // const [user,setUser]=useContext(useContext)
  let [Events, setEvents] = useState();
  const [OrgNotification, setOrgNotification] = useState();
  const [check, setCheck] = useState(true);
  const [handle, setHandle] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3006/neweventinfo")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      });
  }, []);

  return (
    <div className="container">
      <div>
        <h4 className=" my-5 text-center">
          जो जन दान-दक्षिणा देते हैं, वे स्वर्गलोक में उच्च स्थान प्राप्त करते
          हैं। <span className="font-weight-bold">- ऋग्वेद</span>{" "}
        </h4>
      </div>

      <div className="row mt-4 justify-content-center align-items-center">
        {Data.map((data) => (
          <Card data={data}></Card>
        ))}
      </div>
      <div className="row mt-4 justify-content-center align-items-center">
        {Events?.map((data) => (
          <NewCard data={data} filename={data.fileName}></NewCard>
        ))}
      </div>
      {/* <BackToTop /> */}
    </div>
  );
};

export default Works;
