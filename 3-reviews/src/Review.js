import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {id, image, name, job, text} = people[index];

  const checkNum = (num) => num < 0 ? people.length - 1 : 
                          (num > people.length - 1 ? 0 : num); 

  const nextPerson = () => {
    setIndex(checkNum(index+1));
  }

  const prevPerson = () => {
    setIndex(checkNum(index-1));
  }

  const randomPerson = () => {
    const randNum = Math.floor(Math.random() * people.length-1)
    setIndex(randNum === index ? checkNum(randNum+1) : checkNum(randNum))
  }
  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='randon-btn' onClick={randomPerson}>
        surprise me
      </button>
    </article>
  )
};

export default Review;
