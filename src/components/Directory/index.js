import MenuItem from '../Menu-item';

const MENU = [
  {title: 'Awnings', subtitle: 'Shop now', linkUrl: 'awnings', id: 1, imageUrl: 'https://mcusercontent.com/f1e654632bb93dab85213dd9d/images/8247a934-e1de-4867-b5c0-ef29078e7d06.png'},
  {title: 'Enclosures', subtitle: 'Shop now', linkUrl: 'enclosures', id: 2, imageUrl: 'https://mcusercontent.com/f1e654632bb93dab85213dd9d/images/bd0dbd72-a839-44e8-b8a8-3ecab9085eff.jpg'},
  {title: 'Furniture', subtitle: 'Shop now', linkUrl: 'furniture', id: 3, imageUrl: 'https://mcusercontent.com/f1e654632bb93dab85213dd9d/images/1c0a943a-649c-4f9d-a6f6-303d9d323a82.jpg'},
  {title: 'Special Orders', subtitle: 'Shop now', linkUrl: 'specialorders', id: 4, imageUrl: 'https://mcusercontent.com/f1e654632bb93dab85213dd9d/images/4bca8c07-39bf-43f1-adb2-d1d6ef46eee8.png', size: 'large',},
  {title: 'Contact', subtitle: 'Shop now', linkUrl: 'contact', id: 5, imageUrl: 'https://mcusercontent.com/f1e654632bb93dab85213dd9d/images/8b06d658-0b5b-47bf-b0cc-62a021d59ec3.jpg', size: 'large',},
];

const Directory = () => (
  <div className="directory-menu">
      {MENU.map(({id, ...otherProps}) => {
        return <MenuItem key={id} {...otherProps} />
      })}
  </div>
);

export default Directory;
