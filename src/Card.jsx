import Images from './Images';
import Heading from './Heading';
function Card (props) {
    // console.log(props);
    return (
  
      <>
  
      <div className = "cards">
        <div className = "card">
          {/* Making more component of it */}
          {/* <img src = {props.imgsrc} alt = "myPic" className = "card_img"/> */}
          <Images imgsrc ={props.imgsrc}/>
      <div className = "card_info">
            <span className = "card_category">{props.title}</span>
             {/* Making more component of it */}
            {/* <h3 className = "card_title">{props.sname}</h3> */}

            <Heading sname = {props.sname}/>
            <a href = {props.link} target = "blank">
              <button> Watch Now </button>
            </a>
      </div>
        </div>
    </div>
      </>
    );
  }
  export default Card;