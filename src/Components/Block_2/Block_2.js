import React from 'react';
import classes from "./Block_2.module.css"
import Skill from "./skill";
import htmlImg from "./../../img/html5.svg"
import cssImg from "./../../img/css-logo.svg"
import javascriptImg from "./../../img/Unofficial_JavaScript_logo_2.svg"
import reactJsImg from "./../../img/React-icon.svg"
import nodeJsImg from "./../../img/Node.js_logo.svg"
import webPackImg from "./../../img/webpack.svg"


const Block_2 = () => {
    let skils = [
        {id:1,skillTitleImg: htmlImg,percent: 90,skillDiscription:"HTML 5 Стандартизированный язык разметки документов в интернете. Уровень владения:"},
        {id:2,skillTitleImg: cssImg,percent: 85,skillDiscription:"CSS 3 Язык описания внешнего вида документа. Уровень владения:"},
        {id:3,skillTitleImg: javascriptImg,percent: 60,skillDiscription:"JavaScript ES6 Язык программирования высокого уровня, использующийся для придания интерактивности веб-страницам. Уровень владения:"},
        {id:4,skillTitleImg: reactJsImg,percent: 60,skillDiscription:"React JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. Уровень владения:"},
        {id:5,skillTitleImg: nodeJsImg,percent: 20,skillDiscription:"NodeJS Программная платформа, позволяющая использовать JavaScript как язык общего назначения вне окна браузера. Уровень владения:"},
        {id:6,skillTitleImg: webPackImg,percent: 20,skillDiscription:"Webpack Наиболее мощный инструмент для проведения сборки frontend'а веб-сайтов. Уровень владения:"}
    ]
  return (
      <section className={classes.section}>
          <div className={classes.skillsBlock}>
            <h1>Мои навыки</h1>
            <div className={classes.skills}>
                {skils.map(s=><Skill key={s.id} skillTitleImg={s.skillTitleImg} skillDiscription={s.skillDiscription} percent={s.percent}/>)}
            </div>
          </div>
      </section>
  );
}

export default Block_2;