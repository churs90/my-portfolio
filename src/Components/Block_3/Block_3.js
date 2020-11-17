import React from 'react';
import classes from "./Block_3.module.css"
import Work from "./work";

import socialNetworkImg from "./../../img/maxresdefault.jpg";
import vulkanImg from "./../../img/cropped-volcano-brandon-project.jpg";
import todolistImg from "./../../img/todo-list-850x476.jpg";


const Block_3 = () => {
    let works = [
        {id:1,worksUrlImg: socialNetworkImg, worksDiscription: "Social Network"},
        {id:2,worksUrlImg: vulkanImg, worksDiscription: "Project Vulkan"},
        {id:3,worksUrlImg: todolistImg, worksDiscription: "Todolist"}]
  return (
      <section className={classes.section}>
          <div className={classes.worksBlock}>
              <h1>Мои работы</h1>
              <div className={classes.works}>
                  {works.map(w => <Work key={w.id} worksUrlImg={w.worksUrlImg} worksDiscription={w.worksDiscription} />)}
              </div>
          </div>
      </section>
  );
}

export default Block_3;