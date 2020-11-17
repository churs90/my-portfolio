import React from 'react';
import classes from "./Block_5.module.css"


const Block_5 = () => {
  return (
      <section className={classes.section}>
              <div className={classes.contact}>
                  <h1>Контакты</h1>
                  <form action="">
                      <div className={classes.name}><input type="text" placeholder={"Ваше имя"}/></div>
                      <div className={classes.email}><input type="text" placeholder={"Ваш email"}/></div>
                      <div className={classes.message}><textarea rows={10} placeholder={"Ваше сообщение..."}></textarea></div>
                      <button>Отправить</button>
                  </form>
              </div>
      </section>
  );
}

export default Block_5;