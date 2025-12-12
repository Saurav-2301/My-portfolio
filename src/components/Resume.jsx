import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Download, Eye, X, Github, Linkedin, Mail } from "lucide-react";


const Alert = ({ title, description }) => (
  <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-md shadow-md">
    <h3 className="font-bold">{title}</h3>
    <p>{description}</p>
  </div>
);


const driveFileId = "148FMTx0U0fv8mv3YqQBC4BiDQE0R7W_h";

const Resume = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  // Preview URL for embedding
  const previewUrl = `https://drive.google.com/file/d/${driveFileId}/preview`;
  // Direct download URL for Google Drive (works when file is shared publicly)
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${driveFileId}`;

  const handleOpenDriveLink = () => {
    // open the drive view page in a new tab
    window.open(`https://drive.google.com/file/d/${driveFileId}/view`, "_blank", "noopener");
  };

  const handleDownload = (e) => {

    if (e && e.preventDefault) e.preventDefault();

    try {
      
      window.open(downloadUrl, "_blank", "noopener");


      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    } catch (err) {
     
      window.open(`https://drive.google.com/file/d/${driveFileId}/view`, "_blank", "noopener");
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden"
      >
        <div className="p-8">
          <h1 className="text-4xl font-extrabold mb-4 text-center text-gray-800">Saurav Singh</h1>
          <h2 className="text-xl text-center text-gray-600 mb-8">Web Developer</h2>

          <div className="flex justify-center space-x-4 mb-8">
            <SocialLink icon={<Github size={25} />} href="https://github.com/Saurav-2301" />
            <SocialLink icon={<Linkedin size={25} />} href="https://www.linkedin.com/in/saurav-singh-915a57257/" />
            <SocialLink icon={<Mail size={25} />} href="mailto:sauravsingh2153@gmail.com" />
          </div>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <ActionButton
              icon={<Eye size={20} />}
              text="Preview Resume"
              onClick={() => setIsPreviewOpen(true)}
              className="bg-teal-500 hover:bg-teal-600"
            />
            <ActionButton
              icon={<Download size={20} />}
              text="Download Resume"
              onClick={handleDownload}
              href={downloadUrl}
              className="bg-blue-500 hover:bg-blue-600"
            />
          </div>
        </div>
      </motion.div>

      {/* Preview Modal */}
      <AnimatePresence>
        {isPreviewOpen && <PreviewModal previewUrl={previewUrl} onClose={() => setIsPreviewOpen(false)} />}
      </AnimatePresence>

      {/* Alert */}
      <AnimatePresence>
        {showAlert && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 z-50"
          >
            <Alert title="Download" description="If your download didn't start, open the file view in Google Drive and click the download icon." />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SocialLink = ({ icon, href }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-blue-700 transition-colors"
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    {icon}
  </motion.a>
);

const ActionButton = ({ icon, text, onClick, href, className = "" }) => {
  
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${className} text-white font-bold py-3 px-6 rounded-full flex items-center justify-center transition-colors duration-300`}
    >
      {icon}
      <span className="ml-2">{text}</span>
    </motion.a>
  );
};

const PreviewModal = ({ previewUrl, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.9 }}
      className="bg-white rounded-lg shadow-xl p-4 w-full max-w-4xl"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Resume Preview</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition-colors" aria-label="Close preview">
          <X size={24} />
        </button>
      </div>

      {/* Embedded Drive preview (use /preview to embed) */}
      <iframe src={previewUrl} className="w-full h-[80vh]" title="Resume Preview" frameBorder="0" />
    </motion.div>
  </motion.div>
);

export default Resume;