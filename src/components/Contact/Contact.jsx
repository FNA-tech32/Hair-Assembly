import React from "react";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

// Sample photo data
const photos = [
  { id: 1, src: "https://lh3.googleusercontent.com/p/AF1QipPX8WrLffgjc3jW1D0NcfmNrxl4pPrz84Bt9KyV=s1360-w1360-h1020", alt: "Hair Assembly Salon Interior 1" },
  { id: 2, src: "https://content3.jdmagicbox.com/v2/comp/delhi/z8/011pxx11.xx11.230925172652.d1z8/catalogue/pd-s-beauty-salon-rohini-sector-8-delhi-salons-d0tfvgp7ql.jpg", alt: "Hair Assembly Salon Interior 2" },
  { id: 3, src: "https://lh3.googleusercontent.com/p/AF1QipPSyMwvq_4Ol0CkTSJ7FbTLrpSMDu6GPPc1BzV4=s1360-w1360-h1020", alt: "Hair Assembly Salon Interior 3" },
  { id: 4, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwbzVV158l3eDGIzPZlztrvDYB4XxCUjZfiw&s", alt: "Hair Assembly Salon Interior 4" },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 py-10">
      {/* Header Section */}
      <div className="text-center mb-10 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-green-900 tracking-tight">
          Contact Hair Assembly
        </h1>
        <p className="text-lg text-gray-700 mt-2 max-w-2xl mx-auto">
          We’d love to hear from you! Reach out to us for appointments, bridal bookings, styling consultations, or any queries.
        </p>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Branch 1 Card */}
          <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 border border-green-100 flex flex-col justify-between hover:shadow-2xl transition-shadow">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="p-3 bg-green-100 text-green-800 rounded-xl">
                  <FaMapMarkerAlt className="text-xl" />
                </span>
                <div>
                  <span className="text-xs font-semibold tracking-wider text-green-700 uppercase">Location 1</span>
                  <h2 className="text-2xl font-bold text-gray-900">Branch 1 (Sector-7)</h2>
                </div>
              </div>

              <div className="space-y-3 text-gray-700">
                <p className="flex items-start gap-2">
                  <strong className="text-gray-900 min-w-20">Address:</strong>
                  <span>A-1/38 Sector-7 Rohini, New Delhi - 110085</span>
                </p>
                <p className="flex items-center gap-2">
                  <strong className="text-gray-900 min-w-20">Primary:</strong>
                  <a href="tel:+918130616206" className="text-green-700 font-semibold hover:underline">
                    +91 8130616206
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <strong className="text-gray-900 min-w-20">Alternative:</strong>
                  <a href="tel:+918587871230" className="text-gray-800 hover:text-green-700 hover:underline">
                    +91 8587871230
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <strong className="text-gray-900 min-w-20">Email:</strong>
                  <a href="mailto:hairassembly@gmail.com" className="text-gray-800 hover:text-green-700 hover:underline">
                    hairassembly@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap gap-3">
              <a
                href="tel:+918130616206"
                className="flex-1 min-w-[130px] flex items-center justify-center gap-2 bg-green-800 hover:bg-green-900 text-white font-medium py-2.5 px-4 rounded-lg transition-colors text-sm"
              >
                <FaPhoneAlt className="text-xs" /> Call Branch 1
              </a>
              <a
                href="https://wa.me/918130616206?text=Hello%20Hair%20Assembly%20Branch%201,%20I%20would%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[130px] flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-medium py-2.5 px-4 rounded-lg transition-colors text-sm"
              >
                <FaWhatsapp className="text-base" /> WhatsApp
              </a>
            </div>
          </div>

          {/* Branch 2 Card */}
          <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 border border-green-100 flex flex-col justify-between hover:shadow-2xl transition-shadow">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="p-3 bg-green-100 text-green-800 rounded-xl">
                  <FaMapMarkerAlt className="text-xl" />
                </span>
                <div>
                  <span className="text-xs font-semibold tracking-wider text-green-700 uppercase">Location 2</span>
                  <h2 className="text-2xl font-bold text-gray-900">Branch 2 (Sector-8)</h2>
                </div>
              </div>

              <div className="space-y-3 text-gray-700">
                <p className="flex items-start gap-2">
                  <strong className="text-gray-900 min-w-20">Address:</strong>
                  <span>D-14/226 Sector-8 Rohini, New Delhi - 110085</span>
                </p>
                <p className="flex items-center gap-2">
                  <strong className="text-gray-900 min-w-20">Primary:</strong>
                  <a href="tel:+918587871230" className="text-green-700 font-semibold hover:underline">
                    +91 8587871230
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <strong className="text-gray-900 min-w-20">Alternative:</strong>
                  <a href="tel:+919871818002" className="text-gray-800 hover:text-green-700 hover:underline">
                    +91 98718 18002
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <strong className="text-gray-900 min-w-20">Alt Email:</strong>
                  <a href="mailto:contact@hairassembly.com" className="text-gray-800 hover:text-green-700 hover:underline">
                    contact@hairassembly.com
                  </a>
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap gap-3">
              <a
                href="tel:+918587871230"
                className="flex-1 min-w-[130px] flex items-center justify-center gap-2 bg-green-800 hover:bg-green-900 text-white font-medium py-2.5 px-4 rounded-lg transition-colors text-sm"
              >
                <FaPhoneAlt className="text-xs" /> Call Branch 2
              </a>
              <a
                href="https://wa.me/918587871230?text=Hello%20Hair%20Assembly%20Branch%202,%20I%20would%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[130px] flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-medium py-2.5 px-4 rounded-lg transition-colors text-sm"
              >
                <FaWhatsapp className="text-base" /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Quick Info Bar */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-12 border border-green-50 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="p-3 bg-green-50 text-green-700 rounded-full">
              <FaClock className="text-2xl" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Working Hours</h4>
              <p className="text-sm text-gray-600">Mon - Sun: 10:00 AM - 8:30 PM</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="p-3 bg-green-50 text-green-700 rounded-full">
              <FaPhoneAlt className="text-2xl" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Quick Reservations</h4>
              <p className="text-sm text-gray-600">+91 8130616206 / +91 8587871230</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="p-3 bg-green-50 text-green-700 rounded-full">
              <FaEnvelope className="text-2xl" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Email Us</h4>
              <p className="text-sm text-gray-600">hairassembly@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Photos Grid Section */}
        <div>
          <h3 className="text-2xl font-bold text-green-900 mb-6 text-center">Inside Hair Assembly</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 group"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-56 object-cover group-hover:brightness-105 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
