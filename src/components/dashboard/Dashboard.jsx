"use client";

import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import ClassCard from "../classcard/ClassCard";
import ClassDetails from "../classdetails/ClassDetails";

const Dashboard = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClass, setSelectedClass] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/events");
        if (!response.ok) {
          throw new Error("Failed to fetch classes");
        }
        const data = await response.json();
        setClasses(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchClasses();
  }, []);

  const filteredClasses = useMemo(() => {
    return classes.filter((classItem) => {
      return (
        classItem.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        classItem.description?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  }, [searchQuery, classes]);

  const handleCardClick = (classItem) => {
    setSelectedClass(classItem);
  };

  const handleCloseDetails = () => {
    setSelectedClass(null);
  };

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="flex justify-center items-center h-screen text-red-500">Error: {error}</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg p-6">
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-emerald-900">Aubria Studio</span>
          </div>
          <nav className="space-y-4">
            <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-emerald-900">
              <span>Home</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-emerald-900">
              <span>Class</span>
            </a>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-black">Welcome</h1>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-100"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-red-100 p-6 rounded-xl">
              <h3 className="text-red-600 font-semibold">UpComing</h3>
              <p className="text-sm text-gray-600">Get fit at home</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-xl">
              <h3 className="text-blue-600 font-semibold">OnGoing</h3>
              <p className="text-sm text-gray-600">Train at the gym</p>
            </div>
            <div className="bg-green-100 p-6 rounded-xl">
              <h3 className="text-green-600 font-semibold">Complete</h3>
              <p className="text-sm text-gray-600">Consistent training</p>
            </div>
          </div>

          {/* Popular Classes */}
          <h2 className="text-xl font-bold mb-4 text-black">Popular Course or Classes</h2>
          <div className="flex flex-col gap-6 text-black">
            {filteredClasses.length === 0 ? (
              <div className="text-center text-gray-500">
                No classes found.
              </div>
            ) : (
              filteredClasses.map((classItem) => (
                <ClassCard
                  key={classItem.id}
                  classItem={classItem}
                  onClick={() => handleCardClick(classItem)}
                />
              ))
            )}
          </div>
        </div>
      </div>

      {selectedClass && (
        <ClassDetails classItem={selectedClass} onClose={handleCloseDetails} />
      )}
    </div>
  );
};

export default Dashboard;
