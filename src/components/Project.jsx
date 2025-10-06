/* eslint-disable react/prop-types */
import { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  demoUrl,
  communityUrl,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div
        className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900/50 to-primary/30 backdrop-blur-sm border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
        onClick={() => setIsHidden(true)}
      >
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
        </div>

        {/* Card Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-secondary transition-colors">
            {title}
          </h3>

          <p className="text-gray-300 text-sm mb-4 line-clamp-2">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag.id}
                className="px-3 py-1 text-xs bg-secondary/20 text-secondary rounded-full border border-secondary/30"
              >
                {tag.name}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="px-3 py-1 text-xs bg-secondary/10 text-secondary/60 rounded-full border border-secondary/20">
                +{tags.length - 3} more
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsHidden(true);
              }}
              className="flex items-center gap-2 px-4 py-2 bg-secondary/20 text-secondary rounded-lg border border-secondary/30 hover:bg-secondary/30 transition-all duration-200"
            >
              <span className="text-sm font-medium">View Details</span>
              <img src="assets/arrow-right.svg" className="w-4 h-4" />
            </button>

            <div className="flex gap-2">
              {href && (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 bg-secondary/20 text-secondary rounded-lg border border-secondary/30 hover:bg-secondary/30 transition-all duration-200"
                  title="View Project"
                >
                  <img src="assets/arrow-up.svg" className="w-4 h-4" />
                </a>
              )}
              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 bg-accent/20 text-accent rounded-lg border border-accent/30 hover:bg-accent/30 transition-all duration-200"
                  title="Live Demo"
                >
                  <img src="assets/arrow-up.svg" className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          demoUrl={demoUrl}
          communityUrl={communityUrl}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
