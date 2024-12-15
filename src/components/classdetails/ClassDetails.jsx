import React from "react";

const ClassDetails = ({ classItem, onClose }) => {
  if (!classItem) return null;

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(`I'm interested in the ${classItem.title} class!`)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full flex">
        {/* Bagian Kiri: Gambar */}
        <div className="w-1/3 mr-6">
          <img
            src={`http://127.0.0.1:8000/storage/images/${classItem.imageUrl}`} // Pastikan URL gambar sesuai
            alt={classItem.title}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>

        {/* Bagian Kanan: Deskripsi dan Status */}
        <div className="flex-1">
          {/* Badge Status */}
          <div className="mb-2">
            <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm">
              {classItem.status}
            </span>
          </div>

          {/* Judul Kelas */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">{classItem.title}</h2>

          {/* Deskripsi Kelas */}
          <div className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: classItem.description }} />

          {/* Lokasi */}
          <p className="text-gray-600 mb-4">
            <strong>Location: </strong>{classItem.location}
          </p>

          {/* Button Contact via WhatsApp */}
          <div className="flex justify-end">
            <button
              onClick={handleWhatsAppClick}
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Contact via WhatsApp
            </button>
          </div>
        </div>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ClassDetails;
