import PropsType from 'prop-types'
const Bookmark = ({bookmark}) => {
  const {title} = bookmark;
  return (
    <div className='bg-slate-200 p-4 m-4 rounded-xl'>
      <h2 className='text-2xl'>{title}</h2>
    </div>
  );
};

Bookmark.propsType ={
  bookmark: PropsType.object.isRequired
}

export default Bookmark;