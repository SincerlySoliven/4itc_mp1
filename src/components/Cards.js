import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <h1>Educational Background</h1>
          <ul className='cards__items'>
            <CardItem
              src='images/ust.jpg'
              text='Bachelor of Science in Information Technology'
              spec='Specialized in Web and Mobile Application Development'
              school='UNIVERSITY OF SANTO TOMAS | 2018 - PRESENT'
              label='Tertiary'
            />
            <CardItem
              src='images/ue.jpg'
              text='Science, Technology, Engineering, and Mathematics '
              spec='Graduated with High Honors'
              school='UNIVERSITY OF THE EAST | 2016 - 2018'
              label='Senior High School'
            />
          </ul>
          {/* Work Experience */}
          <h1>Work Experience</h1>
          <ul className='cards__items'>
            <CardItem
              src='images/Agri Logo-3.png'
              text='Capstone 1 & 2'
              spec='Agri Shopping'
              label='Front-End Developer'
            />
            <CardItem
             src='images/site-logo.png'
             text='Software Engineering 1 & 2'
             spec='iSITE Organizational Tracker'
             label='Quality Assurance officer'
            />
            <CardItem
             src='images/cics.jpg'
             text='College of Information and Computing Sciences - Student Council'
            //  school='UNIVERSITY OF SANTO TOMAS'
             label='Staff for External Affairs'
            />
            <CardItem
               src='images/site-logo.png'
              text='Society of Information Technology Enthusiasts'
              // school='UNIVERSITY OF SANTO TOMAS'
              label='Finance Committee Staff'
            />
          </ul>
          {/* certifications and seminars */}
          <h1>Certification and Seminar</h1>
          <ul className='cards__items'>
            <CardItem
               src='images/phil.jpg'
              text='ITPEC Fundamentals of IT Passport Exam - Level 1 Certified'
              spec='CANDIDATE ID: IP01-0019'
              school='Certification Date: October 2021'
              label='Certification'
            />
            <CardItem
            src='images/comptia.png'
            text='CompTIA ITF+ CERTIFIED'
            spec='CANDIDATE ID: COMP001021518111'
            school='Certification Date: May 30, 2019'
            label='Certification'
            />
          </ul>

          {/* seminar */}
          <ul className='cards__items'>
            <CardItem
            src='images/accenture.png'
            text='ACCENTURE LEADERSHIP TRAINING'
            school='University of Santo Tomas | October 2021'
            label='Seminar'
            />
            <CardItem
              src='images/as.png'
              text='ASURION TECHNOLOGY SUMMIT'
              school='University of Santo Tomas | October 2021'
              label='Seminar'
            />
            <CardItem
              src='images/site-logo.png'
              text='XPERIENCE: Career Building Webinar'
              // spec='Society of Information Technology Enthusiasts'
              school='University of Santo Tomas | April 2021'
              label='Seminar'
            />
            <CardItem
              src='images/is.jpg'
              text='ARISE: Community Development Webinar'
              // spec='Information Systems Society'
              school='University of Santo Tomas | April 2021'
              label='Seminar'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
