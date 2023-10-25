import Sylver from '../assets/chairman.jpg';
import May from '../assets/may.jpg';

// const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];


const unsplashPhotos = [
  { id: "sylver", src:Sylver, name:'Sylver Okumu', width: 4000, height: 5000 },
  { id: "may", src:May, name: 'May Modesta' ,width: 4000, height: 5000 },
];

const photos = unsplashPhotos.map((photo) => ({
  src: photo.src,
  width: photo.width,
  height: photo.height
}));

export default photos;