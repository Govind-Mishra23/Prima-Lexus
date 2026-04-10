// 404 Not Found Page
import { Link } from "react-router-dom";
import { FaHome, FaSearch } from "react-icons/fa";
import SEO from "../components/ui/SEO";

const NotFound = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-olive-50 to-white flex items-center justify-center px-4">
      <SEO
        title="Page Not Found - 404"
        description="The page you are looking for could not be found. Return to Prima Lexus homepage or explore our legal services."
        noindex
      />

      <div className="max-w-2xl w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-olive-200 select-none">404</h1>
          <div className="relative -mt-12">
            <FaSearch className="w-16 h-16 text-gold-600 mx-auto animate-pulse" />
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-olive-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-olive-600 mb-2">
            We couldn't find the page you're looking for.
          </p>
          <p className="text-olive-500">
            The page may have been moved, deleted, or the URL might be
            incorrect.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-gold-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gold-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <FaHome className="w-5 h-5" />
            Back to Home
          </Link>

          <Link
            to="/practice-areas"
            className="inline-flex items-center gap-2 bg-olive-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-olive-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Practice Areas
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-olive-200">
          <p className="text-olive-600 mb-4 font-medium">
            You might be looking for:
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/about"
              className="text-olive-700 hover:text-gold-600 transition-colors underline"
            >
              About Us
            </Link>
            <span className="text-olive-300">•</span>
            <Link
              to="/team"
              className="text-olive-700 hover:text-gold-600 transition-colors underline"
            >
              Our Team
            </Link>
            <span className="text-olive-300">•</span>
            <Link
              to="/contact"
              className="text-olive-700 hover:text-gold-600 transition-colors underline"
            >
              Contact Us
            </Link>
            <span className="text-olive-300">•</span>
            <Link
              to="/blog"
              className="text-olive-700 hover:text-gold-600 transition-colors underline"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
