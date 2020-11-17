import React from 'react';
import classes from "./Block_1.module.css"
import photo from "./../../img/vad.jpg"

const Block_1 = () => {
  return (
    <section className={classes.section}>
        <div className={classes.about_me}>
            <div className={classes.name}>
                Привет!<br/>
                меня зовут Вадим Чурсин, я front-end разработчик
            </div>
            <div className={classes.foto}>
                <img src={photo} alt="фото"/>
            </div>
        </div>
    </section>
  );
};

export default Block_1;
