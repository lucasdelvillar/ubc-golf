const TestimonialCard = ({ testimonial, description, profilePicture, name, title }) => {
    return (
      <div className='space-y-5 bg-gray-900 h-auto w-auto rounded-lg px-5 py-5'>
        <p className='testimonial-header text-white font-bold'>
          {testimonial}
        </p>
        <p className='description text-gray-400 text-sm'>
          {description}
        </p>
        <div className='profile-container flex flex-row justify-start items-start'>
          <img className='profile-picture w-[40px] h-auto' src={profilePicture} alt='profile'></img>
          <div className='profile-title-container flex-col justify-start items-center mx-5'>
            <p className='name text-white'>
              {name}
            </p>
            <p className='title text-gray-400 text-sm'>
              {title}
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default TestimonialCard;