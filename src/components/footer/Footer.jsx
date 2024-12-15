import React from "react";

const Footer = () => {
    return (
      <footer className="bg-emerald-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AubriaStudio</h3>
            <p className="text-emerald-100">
              Empowering individuals through art and self-expression
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Programs</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-emerald-100 hover:text-orange-400">Art Classes</a></li>
              <li><a href="#" className="text-emerald-100 hover:text-orange-400">Workshops</a></li>
              <li><a href="#" className="text-emerald-100 hover:text-orange-400">Online Courses</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-emerald-100 hover:text-orange-400">About Us</a></li>
              <li><a href="#" className="text-emerald-100 hover:text-orange-400">Contact</a></li>
              <li><a href="#" className="text-emerald-100 hover:text-orange-400">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-emerald-100 hover:text-orange-400">Instagram</a></li>
              <li><a href="#" className="text-emerald-100 hover:text-orange-400">Twitter</a></li>
              <li><a href="#" className="text-emerald-100 hover:text-orange-400">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-emerald-800">
          <p className="text-center text-emerald-100">
            © 2024 AubriaStudio. All rights reserved.
          </p>
        </div>
      </footer>
    );
  };

  export default Footer;