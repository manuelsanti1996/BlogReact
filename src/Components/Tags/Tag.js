import React from "react"

const Tag = ({ tag, onTagSelected }) => {
  const handleClick = () => {
    onTagSelected(tag);
  };

  return (
    <div className="inline-block mr-2 mt-2">
      <div
        className="flex items-center px-2 py-1 border rounded-full bg-gray-200 text-sm font-medium text-gray-700 cursor-pointer"
        onClick={handleClick}
      >
        <button>{tag}</button>
      </div>
    </div>
  );
};

export default Tag;


/*workarounds: the tag parameter of your component represented an object(tag) and not a string({tag}*/
