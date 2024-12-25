import React, { useState } from "react";

import "./Modal.css";

export const FileModal = ({ closeModal, defaultValue }) => {
  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
        <img ></img>
      <div className="modal">  
      </div>
    </div>
  );
};