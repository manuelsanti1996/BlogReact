import React from "react"

const Tag = ({ tag, active, onTagSelected }) => {
  
  const handleClick = () => {
    onTagSelected(tag);
  };

  return (
    <div className="inline-block mr-2 mt-2">
      <div
        className={`flex items-center px-2 py-1 border rounded-full text-sm font-medium cursor-pointer ${active ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        onClick={handleClick}
      >
        <button>{tag}</button>
      </div>
    </div>
  );
};

export default Tag;



/*workarounds: the tag parameter of your component represented an object(tag) and not a string({tag}
  The onTagSelected function was passed as a prop from the TagList component to the Tag component,
   and is called whenever the user selects a tag.*/
