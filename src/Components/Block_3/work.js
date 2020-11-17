import React from 'react';
import classes from "./Block_3.module.css"


const Work = (props) => {
  return (
          <div className={classes.work}>
              <div className={classes.workImg}>
                  <button>Смотреть</button>
                  <img src={props.worksUrlImg} alt=""/>
              </div>
              <div className={classes.workDiscription}>
                  <div className={classes.border}>
                      <h1>{props.worksDiscription}</h1>
                  </div>
              </div>
          </div>
  );
}

export default Work;