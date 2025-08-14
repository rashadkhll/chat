import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "./manageWidget.scss";
const ManageWidget = () => {
  const handleSubmit = () => {
    Swal.fire({
      title: "<strong>HTML <u>example</u></strong>",
      icon: "info",
      html: `
    You can use <b>bold text</b>,
    <a href="#" autofocus>links</a>,
    and other HTML tags
  `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `
    <i class="fa fa-thumbs-up"></i> Great!
  `,
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: `
    Cancel
  `,
      cancelButtonAriaLabel: "Thumbs down",
    });
  };
  return (
    <div className="manage__widget">
      <h1>Manage Widget</h1>
      <form>
        <label htmlFor="widgetTitle">Widget Title</label>
        <input type="text" id="widgetTitle" />
        <label htmlFor="themeColor">Theme Color</label>
        <input type="color" id="themeColor" />
        <label htmlFor="widgetIcon">Widget Icon</label>
        <input type="input" id="widgetIcon" />
        <label htmlFor="inputPlaceHolder">Input Placeholder</label>
        <input type="text" id="inputPlaceHolder" />
        <label htmlFor="buttonTitle">Button Title</label>
        <input type="text" id="buttonTitle" />
        <button
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          Generate Widget
        </button>
      </form>
    </div>
  );
};

export default ManageWidget;
