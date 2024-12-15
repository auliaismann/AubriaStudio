import React, { useEffect, useState } from 'react';

const MyClass = () => {
  const [myClasses, setMyClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMyClasses = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/my-classes"); // Adjust the endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch my classes");
        }
        const data = await response.json();
        setMyClasses(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMyClasses();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-8">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6">My Classes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {myClasses.map((classItem) => (
          <div key={classItem.id} className="border p-4 rounded-lg">
            <h3 className="text-xl font-semibold">{classItem.name}</h3>
            <p className="text-gray-600">{classItem.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyClass;