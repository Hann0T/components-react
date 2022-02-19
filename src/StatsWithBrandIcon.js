import { UsersIcon, MailOpenIcon, CursorClickIcon, ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/outline';

const items = [
  { title: 'Total Subscribers', body: '71,897', icon: <UsersIcon />, number: 122, isPercentage: false },
  { title: 'Avg. Open Rate', body: '58.16%', icon: <MailOpenIcon />, number: 5.4, isPercentage: true },
  { title: 'Avg. Click Rate', body: '24.57%', icon: <CursorClickIcon />, number: -3.2, isPercentage: true },
];

const StatItemWithIcon = ({ title, body, icon, number, isPercentage }) => {
  const getIndicator = () => {
    let className = '';
    let arrow = null;

    if (number > 0) {
      className = 'text-green-700';
      arrow = <ArrowUpIcon className='h-4' />;
    }
    if (number < 0) {
      className = 'text-red-700';
      arrow = <ArrowDownIcon className='h-4' />;
    }

    return (
      <span className={`flex text-sm gap-1 ${className}`}>
        {arrow}
        {number}
        {isPercentage ? '%' : ''}
      </span>
    );
  };

  return (
    <div className=' bg-white rounded-md shadow-md'>
      <div className='flex items-center gap-x-4 p-6'>
        <div className='w-12 bg-indigo-500 p-3 rounded-md text-white'>{icon}</div>
        <div>
          <p className='text-gray-500'>{title}</p>
          <p className='flex items-baseline justify-center gap-x-3 text-3xl font-bold'>
            {body}
            {getIndicator()}
          </p>
        </div>
      </div>
      <div className=' bg-gray-100 rounded-b-md'>
        <a href='https://heroicons.com/' className='block px-6 py-4 text-indigo-600'>
          View all
        </a>
      </div>
    </div>
  );
};

const StatsWithBrandIcon = () => {
  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      <p className='text-xl col-span-full'>Last 30 Days</p>
      {items.map((item) => (
        <StatItemWithIcon key={item.title} {...item} />
      ))}
    </div>
  );
};

export { StatsWithBrandIcon };
