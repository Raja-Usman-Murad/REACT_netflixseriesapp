import Images from './Images';

function Cards(props) {
    return(
        <>
        
    <div class='container-fluid float'>
        <div class="card cardN rounded-top" style={{width: 19+'rem'}}>
  <img src={props.imgSrc} class="card-img imgN" />
  <div class="card-body cardinfoN">
    <h3 class="card-title HN mx-n3">{props.sname}</h3>
    <h1 class="card-text HN mx-n3">{props.cname}</h1>
    <a href={props.link} target="blank" class="hn mx-n2"><button className='buttonN'>Watch Now</button></a>
  </div>
</div>
</div>

      {/* <div className="cardN">
      <Images imgSrc={props.imgSrc}/>
        <div className="cardinfoN">
          <h3 className='HN'>{props.sname}</h3>
          <h1 className='HN'>{props.cname}</h1>
          <a className='HN' href={props.link} target="blank">
            <button className='buttonN'>Watch Now</button>
          </a>
        </div>
      </div> */}


</>
    )
}
export default Cards;