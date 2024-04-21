const Footer = () => {
  return (
    <div className="bg-slate-700 py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-white">
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus dolorum nulla harum nostrum, dolore atque necessitatibus qui doloribus modi?</p>
          </div>
          <div className="text-white">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="text-white">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">Bharatpur, Chitwan, Nepal</p>
            <p className="text-sm">contact@example.com</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm text-gray-300">&copy; {new Date().getFullYear()} Unknown Company. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
