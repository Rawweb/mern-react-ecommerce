import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { IoMdStar } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
  {
    name: 'Sofia Harvetz',
    avatar: 'https://i.pravatar.cc/40?img=11',
    rating: 4,
    comment:
      'I bought it 3 weeks ago and now come back just to say "Awesome Product". I really enjoy it.',
    date: '3 weeks ago',
  },
  {
    name: 'Nicolas Jensen',
    avatar: 'https://i.pravatar.cc/40?img=15',
    rating: 5,
    comment: 'It fits perfectly into my space. Lightweight and elegant!',
    date: '2 weeks ago',
  },
  {
    name: 'Emma Watson',
    avatar: 'https://i.pravatar.cc/40?img=1',
    rating: 3,
    comment:
      'I bought it and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.',
    date: '2 weeks ago',
  },
];

const questions = [
  {
    question: 'Is the tray top removable?',
    answer: 'Yes, it’s designed to be easily detachable for serving.',
  },
  {
    question: 'Can this table hold hot items?',
    answer:
      'Yes, the surface is heat-resistant but avoid direct contact with flames.',
  },
  {
    question: 'Is assembly required?',
    answer: 'Minimal assembly required — no tools needed.',
  },
];

const ProductAccordion = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = section => {
    setOpenSection(prev => (prev === section ? null : section));
  };

  return (
    <div className="mt-6 space-y-6">
      {/* Additional Info */}
      <AccordionSection
        title="Additional Info"
        isOpen={openSection === 'info'}
        onClick={() => toggleSection('info')}
      >
        <h3 className="font-medium text-gray-500 mb-2">Details</h3>
        <p className="text-gray-700">
          The tray table is crafted with lightweight, durable materials, making
          it ideal for easy mobility and compact storage. Its sleek design fits
          seamlessly into any room aesthetic.
        </p>

        <h3 className="font-medium text-gray-500 mt-4 mb-2">Packaging</h3>
        <ul className="text-gray-700 list-none">
          <li>Width: 20" Height: 1½" Length: 21½"</li>
          <li>Weight: 7 lb 8 oz</li>
          <li>Package(s): 1</li>
        </ul>
      </AccordionSection>

      {/* Questions */}
      <AccordionSection
        title="Questions"
        isOpen={openSection === 'questions'}
        onClick={() => toggleSection('questions')}
      >
        {questions.map((q, idx) => (
          <div key={idx} className="mb-4">
            <h3 className="font-medium text-gray-800">Q: {q.question}</h3>
            <p className="text-gray-700 mt-1 pl-2 border-l-2 border-blue-500">
              A: {q.answer}
            </p>
          </div>
        ))}
      </AccordionSection>

      {/* Reviews */}
      <AccordionSection
        title="Reviews"
        isOpen={openSection === 'reviews'}
        onClick={() => toggleSection('reviews')}
      >
        {reviews.map((review, idx) => (
          <div key={idx} className="flex gap-4 mb-6 border-b pb-4">
            <img
              src={review.avatar}
              alt={review.name}
              className="rounded-full w-10 h-10 object-cover"
            />
            <div>
              <h4 className="font-semibold">{review.name}</h4>
              <div className="flex items-center text-yellow-500">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <IoMdStar key={i} className="w-4 h-4" />
                ))}
              </div>
              <p className="text-gray-600 mt-1 text-sm">{review.comment}</p>
              <div className="flex gap-4 mt-2 text-xs text-gray-500">
                <span>{review.date}</span>
                <button className="hover:underline text-black font-medium">
                  Like
                </button>
                <button className="hover:underline text-black font-medium">
                  Reply
                </button>
              </div>
            </div>
          </div>
        ))}
      </AccordionSection>
    </div>
  );
};

const AccordionSection = ({ title, isOpen, onClick, children }) => (
  <div>
    <div
      onClick={onClick}
      className="section-header flex items-center justify-between mb-4 border-b pb-2 cursor-pointer"
    >
      <h1 className="section-title font-medium uppercase">{title}</h1>
      <button>
        {isOpen ? (
          <FiChevronUp className="size-6" />
        ) : (
          <FiChevronDown className="size-6" />
        )}
      </button>
    </div>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="content"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden space-y-4"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default ProductAccordion;
