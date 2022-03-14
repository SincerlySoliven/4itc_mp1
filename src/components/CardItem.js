import React from 'react';


function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__div'>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Needed Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h4 className='cards__item__text'>{props.text}</h4>
            <p className='cards__item__text'>{props.spec}</p>
            <p className='cards__item__text'>{props.school}</p>

          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
