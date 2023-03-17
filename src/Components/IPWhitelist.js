import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import "../css/IPWhitelist.css";
import { DialogContent } from "@mui/material";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const IPWhitelist = (props) => {
  const [IP, setIP] = useState("");
  const [IPWhitelist, setIPWhitelist] = useState([]);
  const handleChange = () => {
    setIPWhitelist((oldIPWhitelist) => {
      return [...oldIPWhitelist, IP];
    });
    setIP("");
  };
  const removeIP = (index) => {
    const newList = IPWhitelist.filter(
      (ip) => IPWhitelist.indexOf(ip) !== index
    );
    setIPWhitelist(newList);
  };
  const validateIPAddress = (ip) => {
    var regularExpression =
      /^(?:\d{1,3}\.){3}\d{1,3}\/(0|[1-9]\d?|1[0-9]{1,2}|2[0-9]|3[0-2])$/;
    if (regularExpression.test(ip)) {
      return true;
    }
    alert("You have entered an invalid IP address!");
    return false;
  };
  return (
    <>
      <div>
        <Dialog
          className="ipwhitelist-content"
          open={props.open}
          keepMounted
          onClose={props.handleClose}
          PaperProps={{
            style: {
              minHeight: "280px",
              borderRadius: "15px",
              textAlign:"center",
              maxHeight:'500px'
            },
          }}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogContent
            style={{
              width: "480px",
              padding:'0'
            }}
          >
            <br />
            <br />
            <input
              placeholder="Add IP address"
              className="ip-input"
              type="text"
              onChange={(e) => {
                setIP(e.target.value);
              }}
              value={IP}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="#6a9bca"
              className="bi bi-plus-circle-fill add-button"
              viewBox="0 0 16 16"
              onClick={handleChange}
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
            </svg>
            <ul className="ip-list">
              {IPWhitelist.map((ip, index) => (
                  <li key={index} className="ip-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="#6a9bca"
                      className="bi bi-x-circle-fill remove-ip-button"
                      viewBox="0 0 16 16"
                      style={{ cursor: "pointer" }}
                      onClick={() => removeIP(IPWhitelist.indexOf(ip))}
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                    </svg>
                    {ip}
                  </li>
              ))}
            </ul>
          </DialogContent>
          <DialogActions style={{justifyContent:'center',marginBottom:'10px'}}>
            <button className="cancel-button" onClick={props.handleClose}>Cancel</button>
            <button className="submit-button" onClick={props.handleClose}>Submit</button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};
export default IPWhitelist;
