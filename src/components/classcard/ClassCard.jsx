import React from "react";

const ClassCard = ({ classItem, onClick }) => {
  // Fungsi untuk menghapus tag HTML dari deskripsi
  const stripHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer mb-6"
      onClick={onClick}
    >
      <div className="flex flex-col lg:flex-row">
        {/* Bagian kiri - Deskripsi dan Status */}
        <div className="flex-1 p-4">
          {/* Badge Status */}
          <div className="mb-2">
            <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm">
              {classItem.status}
            </span>
          </div>

          {/* Judul Kelas */}
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{classItem.title}</h3>

          {/* Deskripsi Kelas */}
          <div className="text-sm text-gray-600 mb-4">
            {stripHtmlTags(classItem.description)}
          </div>

          {/* Lokasi */}
          <div className="text-sm text-gray-500">
            <strong>Location: </strong>{classItem.location}
          </div>
        </div>

        {/* Bagian kanan - Gambar */}
        <div className="relative lg:w-1/3">
          {/* Menampilkan gambar jika ada */}
          {classItem.imageUrl && (
            <img
              src={`http://127.0.0.1:8000/storage/images/${classItem.imageUrl}`} // Pastikan ini URL yang benar
              alt={classItem.title}
              className="w-full h-48 object-cover rounded-r-xl"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
