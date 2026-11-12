import React from 'react';
import Location from "../../assets/Location.png";
import Phone from "../../assets/Phone.png";
import Message from "../../assets/message.png";

function Footer() {
  return (
    <>
      {/* Top CTA Section */}
      <div className='flex flex-col md:flex-row justify-between items-center bg-gray-950 text-white px-6 py-8 md:py-10 border-b border-gray-800'>
        <div className='text-center md:text-left'>
          <h2 className='text-xl md:text-2xl font-semibold'>
            HAIR ASSEMBLY: Step in and let us craft a look that turns heads!
          </h2>
          <p className='text-gray-400 text-sm mt-1'>Book your appointment today at Sector-7 or Sector-8 Rohini.</p>
        </div>
        <div className='mt-6 md:mt-0 flex gap-3'>
          <button
            className="bg-[#7fe5a3] hover:bg-[#68d18e] shadow-lg rounded-md text-black font-semibold py-3 px-6 md:py-3.5 md:px-8 transition-colors cursor-pointer"
            onClick={() => {
              const message = `Hello Hair Assembly, I am interested in booking an appointment. Can you provide more details?`;
              const whatsappLink = `https://wa.me/918130616206?text=${encodeURIComponent(message)}`;
              window.open(whatsappLink, "_blank");
            }}
          >
            Book via WhatsApp
          </button>
        </div>
      </div>

      {/* Bottom Information Section */}
      <div className='bg-black text-white'>
        <div className="container mx-auto flex flex-col md:flex-row items-start justify-between px-6 py-10 md:py-12 gap-8">
          {/* Contact & Reservations */}
          <div className="w-full md:w-1/3">
            <h3 className="font-bold text-xl mb-4 text-[#7fe5a3]">Hair Assembly</h3>
            <p className="text-gray-400 text-sm mb-4">
              Your premier beauty makeover and hair styling studio. Providing modern haircuts, bridal packages, nail art, and hair treatments.
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <img src={Location} alt="Location" className="w-5 h-5 mr-3 mt-0.5 object-contain" />
                <span className="text-gray-300">Sector-7 & Sector-8 Rohini, New Delhi</span> 
              </li>
              <li className="flex items-start">
                <img src={Phone} alt="Phone" className="w-5 h-5 mr-3 mt-0.5 object-contain" />
                <div>
                  <div className="text-gray-300">
                    <span className="text-gray-400 text-xs block">Primary:</span>
                    <a href="tel:+918130616206" className="hover:text-[#7fe5a3]">+91 8130616206</a>
                  </div>
                  <div className="text-gray-300 mt-1">
                    <span className="text-gray-400 text-xs block">Alternative:</span>
                    <a href="tel:+918587871230" className="hover:text-[#7fe5a3]">+91 8587871230</a> / <a href="tel:+919871818002" className="hover:text-[#7fe5a3]">+91 98718 18002</a>
                  </div>
                </div>
              </li>
              <li className="flex items-start">
                <img src={Message} alt="Email" className="w-5 h-5 mr-3 mt-0.5 object-contain" />
                <div>
                  <div>
                    <a href="mailto:hairassembly@gmail.com" className="hover:text-[#7fe5a3] text-gray-300">hairassembly@gmail.com</a>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs">Alt: </span>
                    <a href="mailto:contact@hairassembly.com" className="hover:text-[#7fe5a3] text-gray-400">contact@hairassembly.com</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Branches Section */}
          <div className="w-full md:w-1/3 space-y-4">
            <h3 className="font-bold text-xl mb-4 text-[#7fe5a3]">Our Branches</h3>
            <div className="space-y-4 text-sm">
              <div className="border-l-2 border-[#7fe5a3] pl-3">
                <h4 className="font-semibold text-white">Branch 1 (Sector-7)</h4>
                <p className="text-gray-400 text-xs mt-0.5">A-1/38 Sector-7 Rohini, New Delhi</p>
                <div className="mt-1">
                  <span className="text-gray-400 text-xs">Primary: </span>
                  <a href="tel:+918130616206" className="text-gray-200 hover:text-[#7fe5a3]">+91 8130616206</a>
                </div>
                <div>
                  <span className="text-gray-400 text-xs">Alt: </span>
                  <a href="tel:+918587871230" className="text-gray-300 hover:text-[#7fe5a3]">+91 8587871230</a>
                </div>
              </div>

              <div className="border-l-2 border-[#7fe5a3] pl-3">
                <h4 className="font-semibold text-white">Branch 2 (Sector-8)</h4>
                <p className="text-gray-400 text-xs mt-0.5">D-14/226 Sector-8 Rohini, New Delhi</p>
                <div className="mt-1">
                  <span className="text-gray-400 text-xs">Primary: </span>
                  <a href="tel:+918587871230" className="text-gray-200 hover:text-[#7fe5a3]">+91 8587871230</a>
                </div>
                <div>
                  <span className="text-gray-400 text-xs">Alt: </span>
                  <a href="tel:+919871818002" className="text-gray-300 hover:text-[#7fe5a3]">+91 98718 18002</a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="w-full md:w-1/3 space-y-4">
            <h3 className="font-bold text-xl mb-4 text-[#7fe5a3]">Follow Us</h3>
            <ul className="space-y-2.5 text-sm">
              <li> 
                <a
                  href="https://instagram.com/poojadeveshwar_pdsalon?igshid=ZDdkNTZiNTM="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#7fe5a3] transition-colors"
                >
                  Follow on Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100038810930708"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#7fe5a3] transition-colors"
                >
                  Follow on Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@hairmakeupbeautyexpertsalo2922"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#7fe5a3] transition-colors"
                >
                  Subscribe on YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://g.page/r/CRPnJvJocmsaEA0/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#7fe5a3] transition-colors"
                >
                  Review us on Google
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-900 py-4 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Hair Assembly. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
