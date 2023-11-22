import React, { useEffect, useState } from "react";
import { CgGirl } from "react-icons/cg";
import axios from "axios";
import mainBoard from "../styles/mainBoard.module.css"
import QnAContents from "./QnAContents";
import CodeContents from "./CodeContents";

                 
                    
function MainContents() {
  return(
      <>
          <QnAContents />
          <CodeContents />
      </>
  );

}

export default MainContents;