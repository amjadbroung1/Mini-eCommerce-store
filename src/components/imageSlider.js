import SimpleImageSlider from 'react-simple-image-slider';

const images = [
  {
    url: 'https://media.istockphoto.com/id/1335295270/photo/global-connection.jpg?s=1024x1024&w=is&k=20&c=Neqrwz60-JMQOnTEBrnYVPIY0gbfKvhsD-OjWRxALsE=',
  },
  {
    url: 'https://media.istockphoto.com/id/1406732763/photo/e-learning-online-study-concept-student-studying-online-class-via-laptop-computer.jpg?s=1024x1024&w=is&k=20&c=N1TsG4w_5MWZfxp8ixmOumreb6GCDAt2pblaIpBRSXg=',
  },
  {
    url: 'https://media.istockphoto.com/id/1332002332/photo/global-communication-network.jpg?s=1024x1024&w=is&k=20&c=JhuexnYkT0z2zOPx3NAZ-X4kS768uttXFZpOnGog6Ac=',
  },
  {
    url: 'https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
];

const Slider = () => {
  return (
    <div>
      <SimpleImageSlider
        width={'100%'}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};
export default Slider;
