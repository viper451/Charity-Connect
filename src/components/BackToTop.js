import Button from "@mui/material/Button";
import NorthIcon from "@mui/icons-material/North";
import "./style.css";

const BackToTop = () => {
  return (
    <Button
      className="back_to_top"
      onClick={() => window.scroll({ top: 0, left: 0, behavior: "smooth" })}
    >
      {/* window.scroll({top: 0, left: 0, behavior: 'smooth' })  */}
      <NorthIcon />
    </Button>
  );
};

export default BackToTop;
