type HeaderProps = {
  header: string;
};

const PageHeader = ({ header }: HeaderProps) => {
  return (
    <div className='flex justify-center bg-gray-900'>
      <h6 className='text-white py-2'>{header}</h6>
    </div>
  );
};

export default PageHeader;
