import { useRef } from 'react';
import logo from '/assets/images/logo-full.svg'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Ticket = ({ data }) => {
    const ticketRef = useRef()

    const downloadPDF = async() => {
        const element = ticketRef.current

        const canvas = await html2canvas(element, {scale: 2})

        const imgData = canvas.toDataURL("image/png")

        const pdf = new jsPDF({
            orientation: "landscape",
            unit: 'px',
            format: [canvas.width, canvas.height]
        })

        pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height)

        pdf.save("ticket.pdf")
    }





  return (
    <div className="flex flex-col items-center mt-10">
      <div ref={ticketRef} className="flex bg-black p-6 w-[350px] relative bg-[url(/assets/images/pattern-ticket.svg)] bg-contain bg-no-repeat">

        <div className=''>
            <h2 className="text-xl font-bold  mb-4">
          <img src={logo} alt="logo" className='w-40' />
          <p className='text-sm text-neutral-500'>Feb 2nd, 2026</p>
        </h2>
        

        <div className="pt-4 space-y-2 text-sm text-gray-500 font-bold">
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

      <button onClick={downloadPDF} className='mt-6 bg-orange-500 px-6 py-2 rounded-lg '>
        Download Ticket
      </button>
    </div>
  );
};

export default Ticket;
