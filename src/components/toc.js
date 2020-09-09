import React from "react";

const Items = ({ tableOfContents, depth }) => {
  return (
    <ul>
      {tableOfContents.map((item) => (
        <li key={item.url}>
          <a href={item.url}>{item.title}</a>
          {item.items && (
            <Items tableOfContents={item.items} depth={depth + 1} />
          )}
        </li>
      ))}
    </ul>
  );
};

const TOC = ({ tableOfContents }) => {
  return (
    <div className="toc-container">
      <h3 className="h6">Table of Contents</h3>
      <Items tableOfContents={tableOfContents} depth={0} />
    </div>
  );
};

export default TOC;
