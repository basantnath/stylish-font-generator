import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-2xl mx-auto w-full px-4 mt-[90px]">
      <div className=" overflow-hidden">
        <div className="p-6">
          <h2 className="text-3xl font-bold  text-indigo-600 mb-2 sm:text-center">
            About/Contact Font Lab
          </h2>
          <p className=" mt-2 text-gray-700 sm:text-center">
            Font Lab is dedicated to providing high-quality fonts for designers
            and developers. Our mission is to enhance your projects with
            beautiful typography.
          </p>
        </div>
        <div className="px-6 pb-6 space-y-6">
          <div className="flex sm:justify-center space-x-4">
            {[Facebook, Twitter, Instagram].map((Icon, index) => (
              <button
                key={index}
                className="p-2 border rounded-full  "
                style={{ borderColor: "#ff4550" }}
                aria-label={`Visit our ${Icon.name} page`}
              >
                <Icon className="h-5 w-5" style={{ color: "#ff4550" }} />
              </button>
            ))}
          </div>
          <div className="sm:text-center">
            <p className="mb-2 text-gray-700">Or reach us via email:</p>
            <button
              className="inline-flex items-center px-4 py-2 rounded-md transition-colors"
              style={{ backgroundColor: "#ff4550", color: "white" }}
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact@FontLab.com
            </button>
          </div>
          <p className=" text-gray-700 sm:text-center">
            We'd love to hear from you! Whether you have questions about our
            fonts, need technical support, or want to collaborate, don't
            hesitate to reach out.
          </p>
        </div>
      </div>
    </div>
  );
}
