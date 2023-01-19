import '../scss/Card.scss';

export const Card = ({name,img,email,stars}) => {
  return(
    <div className="card">
      <div className="card_section_1">
        <img className="card__img" src={img} alt="" />
        <p className="card__name">{name}</p>
      </div>
      <div>
        <p className='card__stars'>{stars }</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos delectus porro reiciendis eius ea sit mollitia ut dolore quos totam nesciunt, nihil est repellendus, error voluptate! Molestiae facere recusandae tempora.</p>
      </div>
      <p className='card_email'>{email}</p>
    </div>
  )
}