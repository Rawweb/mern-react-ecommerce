import React from "react";
import articleImage1 from "../../assets/articles1.png";
import articleImage2 from "../../assets/articles2.png";
import articleImage3 from "../../assets/articles3.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const ArticlesSection = () => {
  const articles = [
    {
      image: articleImage1,
      title: "7 ways to decor your home",
      alt: "Decor Home",
    },
    {
      image: articleImage2,
      title: "Kitchen organization",
      alt: "Kitchen Organization",
    },
    {
      image: articleImage3,
      title: "Decor your bedroom",
      alt: "Bedroom Decor",
    },
  ];

  return (
    <section className="mt-10">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-3xl md:text-4xl font-semibold">Articles</h3>
          <div className="w-fit border-b-2 border-black hover:border-blue-500 transition duration-300">
            <Link className="inline-flex items-center gap-2 hover:text-blue-500 transition duration-300">
              <p className="text-xl">More Articles</p>
              <BsArrowRight className="h-6 w-6" />
            </Link>
          </div>
        </div>

        {/* Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div key={index} className="flex flex-col gap-4 group">
              {/* Image with hover scale */}
              <div className="overflow-hidden">
                <img
                  src={article.image}
                  alt={article.alt}
                  className="transition-transform duration-500 group-hover:scale-110 w-full h-auto"
                />
              </div>

              {/* Title */}
              <p className="text-l md:text-xl font-semibold">{article.title}</p>

              {/* Read More Link */}
              <div className="w-fit md:text-xl border-b-2 border-black hover:border-blue-500 transition duration-300">
                <Link className="inline-flex items-center gap-2 hover:text-blue-500 transition duration-300">
                  <p>Read More</p>
                  <BsArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
