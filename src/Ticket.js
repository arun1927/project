import React from "react";
import "./Ticket.css";

import PersonAddIcon from "@material-ui/icons/PersonAdd";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function Ticket() {
  return (
    <div className="ticket">
      <div className="ticket_right">
        <h2>Ticket</h2>
      </div>
      <div className="ticket_left">
        <div className="ticket_icon">
          <PersonAddIcon />{" "}
        </div>

        <div className="ticket_menu">
          <MoreVertIcon />
        </div>
      </div>
    </div>
  );
}

export default Ticket;
