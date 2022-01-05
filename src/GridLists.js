import { MailIcon, PhoneIcon } from '@heroicons/react/solid';

const items = [
  {
    name: 'Jane Cooper',
    role: 'Admin',
    descripcion: 'Regional Paradigm Technician',
    imgUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Cody Fisher',
    role: 'Admin',
    descripcion: 'Regional Paradigm Technician',
    imgUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Esther Howard',
    role: 'Admin',
    descripcion: 'Regional Paradigm Technician',
    imgUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Jenny Wilson',
    role: 'Admin',
    descripcion: 'Regional Paradigm Technician',
    imgUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
];

const GridLists = () => {
  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 '>
      {items.map((item) => (
        <GridItem key={item.name} {...item} />
      ))}
    </div>
  );
};

const GridItem = ({ name, role, descripcion, imgUrl }) => {
  return (
    <div className='bg-white rounded-lg drop-shadow-md'>
      <div className='flex justify-around items-center p-6'>
        <div>
          <p>
            {name}
            <span className='ml-4 px-2 rounded-full bg-green-200 font-bold text-green-700'>
              {role}
            </span>
          </p>
          <p className='text-gray-500'>{descripcion}</p>
        </div>
        <div>
          <img src={imgUrl} alt={name} className='rounded-full w-12' />
        </div>
      </div>
      <div className='flex justify-around border-t-2'>
        <div className='w-full border-r-2'>
          <button className='flex items-center justify-center py-4 h-full w-full'>
            <MailIcon className='block w-4 mr-2' />
            <p>Email</p>
          </button>
        </div>
        <div className='w-full'>
          <button className='flex items-center justify-center py-4 h-full w-full'>
            <PhoneIcon className='block w-4 mr-2' />
            <p>call</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export { GridLists };
