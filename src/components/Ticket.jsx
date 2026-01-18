import logo from '/assets/images/logo-full.svg'

const Ticket = ({ data }) => {
  return (
    <div className="mt-20 flex justify-center">
      <div className="flex  p-6 w-[350px] relative bg-[url(/assets/images/pattern-ticket.svg)] bg-contain bg-no-repeat">

        <div className=''>
            <h2 className="text-xl font-bold  mb-4">
          <img src={logo} alt="logo" className='w-40' />
          <p className='text-sm text-neutral-500'>Feb 2nd, 2026</p>
        </h2>
        

        <div className="pt-4 space-y-2 text-sm">
          <p>
            <span className="font-semibold"></span> {data.name}
          </p>
          <p>
            <span className="font-semibold"></span> {data.email}
          </p>
          {/* <p>
            <span className="font-semibold">GitHub:</span> @{data.username}
          </p> */}
        </div>
        </div>

        <div className="mt-4 text-center text-ls font-bold text-gray-500 flex float-right  rotate-90">
          #{Math.floor(Math.random() * 100000)}
        </div>
      </div>
    </div>
  );
};

export default Ticket;
