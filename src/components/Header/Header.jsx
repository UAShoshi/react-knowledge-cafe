import profile from '../../assets/images/profile.png'
const Header = () => {
  return (
    <div className='flex justify-between items-center p-4 border-b-2 max-w-7xl mx-auto'>
<header className='text-4xl font-bold'>React Knowlege Cafe</header>      
<img src={profile} alt="" />
    </div>
  );
};

export default Header;