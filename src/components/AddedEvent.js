import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../App";
import VolunteerCard from "./VolunteerCard";
import swal from "sweetalert";
import MilitaryTechRoundedIcon from "@mui/icons-material/MilitaryTechRounded";

const AddedEvent = () => {
  const [user, setUser] = useContext(UserContext);
  const [data, setData] = useState([]);
  const [numevents, setNumEvents] = useState(0);
  let [color, setColor] = useState("");
  let [badge, setBadge] = useState("");
  let [trophy, setTrophy] = useState("");

  useEffect(() => {
    fetch("http://localhost:3006/task?mail=" + user.mail)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });

    userEvents();
    ColorChange();

    //  console.log(numevents)
  }, [numevents, color]);

  const userEvents = async () => {
    const variable = { name: user.name };
    //    console.log(variable)

    await fetch("http://localhost:3006/numEvents", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(variable),
    })
      .then((res) => res.json())
      .then((data, err) => {
        setNumEvents(data.statement);
      });
  };

  function removeWork(id) {
    // console.log(id);
    // console.log(user.mail)

    fetch(`http://localhost:3006/delete/${id}?mail=` + user.mail, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((datas) => {
        //   console.log(datas)
        swal({
          title: "REMOVED EVENT 🥺!",
          text: "Removed Successfully!",
          icon: "success",
          dangerMode: true,
          button: false,
          timer: 850,
        });
      });

    var items = data.filter((key) => key._id !== id);
    console.log(items);
    setData(items);
    setNumEvents(numevents - 1);
    removeWork = { removeWork };
  }
  const ColorChange = () => {
    if (numevents >= 20) {
      setColor("#FF0000");
      setBadge("Elite");
      setTrophy("warning");
    } else if (numevents >= 15) {
      setColor("#FFA500");
      setBadge("Master");
      setTrophy("secondary");
    } else if (numevents >= 10) {
      setColor("#00FFFF");
      setBadge("Specialist");
      setTrophy("primary");
    } else if (numevents >= 5) {
      setColor("#7FFF00");
      setBadge("Apprentice");
      setTrophy("success");
    } else {
      setColor("#DCDCDC");
      setBadge("Beginner");
      setTrophy("action");
    }
    //  console.log(JSON.stringify(color)+" "+numevents)
    color = JSON.stringify(color);
    badge = JSON.stringify(badge);
    console.log(numevents);
  };

  return (
    <>
      <div>
        <h3 className="text-center my-3" style={{ color: color }}>
          <b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{badge}</b>
        </h3>
        <h4 className="text-center my-3" style={{ color: "white" }}>
          Added Event List
          for&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total Events{" "}
        </h4>
        {/* <h4 className="text-center my-3"> */}

        <h4 className="text-center my-3" style={{ color: color }}>
          <MilitaryTechRoundedIcon />
          {user.name}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {numevents}
        </h4>
        {/* </h4> */}
      </div>

      <div className="container ">
        <div className="row">
          {data.map((key) => (
            <VolunteerCard
              userEvents={userEvents}
              removeWork={removeWork}
              datas={key}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AddedEvent;
