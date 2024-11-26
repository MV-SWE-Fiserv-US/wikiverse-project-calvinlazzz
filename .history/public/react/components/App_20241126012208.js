import React, { useState, useEffect } from 'react'
import  {PagesList}  from './PagesList'
import  {PageDetails}  from './PageDetails'
import { ArticleForm } from './ArticleForm.js'

// import and prepend the api url to any fetch calls
import apiURL from '../api'

export const App = () => {
  const [pages, setPages] = useState([])
  const [selectedPage, setSelectedPage] = useState(null); 
  const [isAddingArticle, setIsAddingArticle] = useState(false); 

  async function fetchPages () {
    try {
      const response = await fetch(`${apiURL}/wiki`)
      const pagesData = await response.json()
      setPages(pagesData)
      console.log(pagesData)

    } catch (err) {
      console.log('Oh no an error! ', err)
    }
  }
  async function fetchPageDetails(slug) {
    try {
      const response = await fetch(`${apiURL}/wiki/${slug}`);
      const pageData = await response.json();
      console.log(pageData)
      setSelectedPage(pageData); 
    } catch (err) {
      console.log('Error fetching page details: ', err);
    }
  }
  async function addArticle(articleData) {
    try {
      const response = await fetch(`${apiURL}/wiki`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(articleData)
      })
      const data = await response.json()
      console.log('Article added:', data)
      fetchPages() 
      setIsAddingArticle(false) 
    } catch (err) {
      console.log('Error adding article: ', err)
    }
  }
  async function deleteArticle(slug) {
    try {
      const response = await fetch(`${apiURL}/wiki/${slug}`, {
        method: 'DELETE'
      })
      const data = await response.json()
      console.log('Article deleted:', data)
      fetchPages() 
      setSelectedPage(null) 
    } catch (err) {
      console.log('Error deleting article: ', err)
    }
  }
  useEffect(() => {
    fetchPages()
  }, [])

  return (
		<main>
      <h1>WikiVerse</h1>
			<h2>An interesting 📚</h2>
      {selectedPage ? (
        <PageDetails page={selectedPage} goBack={() => setSelectedPage(null)} onDelete={deleteArticle} />
      ) : isAddingArticle ? (
        <ArticleForm onSubmit={addArticle} onCancel={() => setIsAddingArticle(false)} />
      ) : (
        <>
        <button onClick={() => setIsAddingArticle(true)}>Add Article</button>
        <PagesList pages={pages} onPageClick={fetchPageDetails} />
        </>
      )}		</main>
  )
}
