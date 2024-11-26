import React from 'react';

export const PageDetails = ({ page, goBack,ond }) => {

  return (
    <div>
      <button onClick={goBack}>Back to List</button>
      <h1>{page.title}</h1>
      <p><strong>Author:</strong> {page.author.name}</p>
      <p><strong>Content:</strong> {page.content}</p>
      <p><strong>Tags:</strong> {page.tags.map((tag,id) => {return <span key = {id}>{tag.name}</span>} ) } </p>
      <p><strong>Created At:</strong> {new Date(page.createdAt).toLocaleString()}</p>
      <button onClick={() => onDelete(page.slug)}>Delete</button>
    </div>
  );
};