import React from 'react';

export const PageDetails = ({ page, goBack }) => {

  return (
    <div>
      <button onClick={goBack}>Back to List</button>
      <h1>{page.title}</h1>
      <p><strong>Author:</strong> {page.author.name}</p>
      <p><strong>Content:</strong> {page.content}</p>
      <p><strong>Tags:</strong> {page.tags.map((tag,id) => {return <span key = {id}>{tag.name}</span>} ) } </p>
      <p><strong>Created At:</strong> {new Date(page.createdAt).toLocaleString()}</p>
      Finally, we want to to add a delete button that will remove the entry.

Create a button on the single page view (the one with the details on that page)
When the button is clicked, send a DELETE request to DELETE /wiki/:slug. Though we don’t need to send anything in the body of the request, we will need to call fetch a tad differently. This fetch is also not a GET, but a DELETE request. Here’s an example of how to create a DELETE request.
const response = await fetch('https://url.com/some-endpoint', {
  method: "DELETE"
});
const data = await response.json();
Again, re-fetch all the articles, and switch the view to show the list of articles.
    </div>
  );
};