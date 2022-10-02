import React, { useEffect, useState } from "react";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

import { Button } from "reactstrap";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";

export default function OrganizationTableData(props) {
  // console.log(props)
  const [information, setInformation] = useState(props.info);
  useEffect(() => {
    setInformation(props.info);
  }, [props.info]);

  //  console.log(information)
  console.log(typeof information);

  const {
    name,
    date,
    mail,
    location,
    volnumber,
    description,
    organize,
    _id,
    fileName,
  } = information;
  let [finalimage, setfinalImage] = useState(fileName?.path);
  let [tempfinalimage, settempfinalImage] = useState();
  const [open, setOpen] = React.useState(false);
  const [openname, setOpenName] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenName = () => setOpenName(true);
  const handleCloseName = () => setOpenName(false);

  if (finalimage !== undefined) {
    tempfinalimage = String(finalimage.substring(10));
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 420,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const stylename = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 220,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <tbody>
      <tr>
        <td>
          <b onClick={handleOpenName}  style={{ textAlign: "center",color:"white" }}>{name}</b>
          {/* <Button onClick={handleOpenName}>Open modal</Button> */}
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openname}
            onClose={handleCloseName}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 1500,
            }}
          >
            <Fade in={openname}>
              <Box sx={stylename}>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Description
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 3 }}>
                  <b> {description}</b>
                </Typography>
              </Box>
            </Fade>
          </Modal>
        </td>
        <td style={{ textAlign: "center",color:"white" }}>{mail}</td>
        <td style={{ textAlign: "center",color:"white"  }}>{date}</td>
        <td style={{ textAlign: "center",color:"white"  }}>{volnumber}</td>
        <td style={{ textAlign: "center",color:"white"  }}>{location}</td>
        <td style={{ textAlign: "center",color:"white"  }}>{organize}</td>
        <td style={{ textAlign: "center",color:"white"  }}>
          {" "}
          <Button color="primary" onClick={handleOpen}>
            Link
          </Button>
        </td>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Certificate Verification
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {finalimage && (
                <img src={tempfinalimage} style={{ width: "100%" }} alt="" />
              )}
              {/* hello */}
            </Typography>
          </Box>
        </Modal>

        <td style={{ textAlign: "center" }}>
          <Button
            onClick={() => props.onClickDelete(_id)}
            className="btn btn-danger"
          >
            DELETE
          </Button>
        </td>
      </tr>
    </tbody>
  );
}
