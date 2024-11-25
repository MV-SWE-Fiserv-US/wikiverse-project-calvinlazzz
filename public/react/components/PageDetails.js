import React from 'react';

export const PageDetails = ({ page, goBack }) => {

  return (
    <div>
      <button onClick={goBack}>Back to List</button>
      <h1>{page.title}</h1>
      <p><strong>Author:</strong> {page.author.name}</p>
      <p><strong>Content:</strong> {page.content}</p>
      <p><strong>Tags:</strong> {page.tags.map((tag,id) => {return <p>{tag.name}</p>} ) } </p>
      <p><strong>Created At:</strong> {new Date(page.createdAt).toLocaleString()}</p>
    </div>
  );
};