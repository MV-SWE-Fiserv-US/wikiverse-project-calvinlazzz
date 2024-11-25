import React, { useState, useEffect } from 'react'
import { PagesList } from './PagesList'

// import and prepend the api url to any fetch calls
import apiURL from '../api'

export const App = () => {
  const [pages, setPages] = useState([])

  async function fetchPages () {
    try {
      const response = await fetch(`${apiURL}/wiki`)
      const pagesData = await response.json()
      setPages(pagesData)
    } catch (err) {
      console.log('Oh no an error! ', err)
    }
  }
  async function fetchPageDetails(slug) {
    try {
      const response = await fetch(`${apiURL}/wiki/${slug}`);
      const pageData = await response.json();
      setSelectedPage(pageData); 
    } catch (err) {
      console.log('Error fetching page details: ', err);
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
        <PageDetails page={selectedPage} goBack={() => setSelectedPage(null)} />
      ) : (
        <PagesList pages={pages} onPageClick={fetchPageDetails} />
      )}		</main>
  )
}
