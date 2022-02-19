const items = [
  { title: 'Total Subscribers', body: '71,897' },
  { title: 'Avg. Open Rate', body: '58.16%' },
  { title: 'Avg. Click Rate', body: '24.57%' },
];

const StatItem = ({ title, body }) => {
  return (
    <div className='p-6 bg-white rounded-md shadow-md'>
      <p className='text-gray-500'>{title}</p>
      <p className='text-3xl font-bold'>{body}</p>
    </div>
  );
};

const StatsSimple = () => {
  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      <p className='text-xl col-span-full'>Last 30 Days</p>
      {items.map((item, index) => (
        <StatItem
          key={`${index}-${item.title}-${item.body}`}
          title={item.title}
          body={item.body}
        />
      ))}
    </div>
  );
};

export { StatsSimple };
