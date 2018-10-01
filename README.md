<!--rrcnlas
	READ.md
-->

# **MyReads Project**

This **MyReads** project, is a bookshelf app that allows user to select and categorize books :books: that have read :green_book:, are currently reading :blue_book:, or want to read :orange_book:. The application was built using React to develop a single-page from static to dynamic design. Provides an API server and client library :office: that is used to gather information.

Allows the user to find books on search :tada: page that will add book(s) :books: to the library :office:. The search :tada: page has a text input that may be used to find books :books:. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets the user to add the book(s) :books: to the library :office:. 

## To Begin 
	
 1. Get the [Starter Code](https://github.com/rrcanlas/reactnd-project-myreads-starter)

 2. Clone :dancers: the starter code from this [repository](https://github.com/rrcanlas/reactnd-project-myreads-starter).

 3. From inside the new directory, launch:rocket: a local client server by installing all project dependencies with `npm install` on your terminal :computer: then start the development server of your browser with `npm start`.
	
## My Development Strategy 

 1. After the fork :fork_and_knife: and clone :dancers: procedure from the [starter code](https://github.com/udacity/reactnd-project-myreads-starter), I launched:rocket: a local client server by running :running: `npm` start from my terminal :computer:. 
	
 2. Imported backend server BookApi.js on my editor and initialized an array for the books :books: then used the `getAll` method to fetch the all the books :books:. 
	
 3. Added a file :open_file_folder: for the shelf titles. A component with (:three: categories) for books :books: (currently reading :blue_book:, want to read :orange_book:, and read :green_book:).

 4. Added a file :open_file_folder: for the list of books :books:. A component that is tied to each book :books: instance and that be displayed on the main page :calling:.

 5. Installed `npm install --save escape-string-regexp sort-by` and added a file for the search :tada: page. A component where search :tada: result(s) that matches the Title or Author on the input field will be displayed on the page. It allows the user to select the categories (currently reading, want to read, and read) to place the book :book: in a certain shelf that will appear on the main page :calling: by using `swapBooks` method to update.

 6. Installed `npm install --save react-router-dom` for the *BrowserRouter Component* that links between the Main :calling: and the Search page :tada:.

 7. Wrote this :cool: :information_source: README.md :registered: 

 8. Pushed :punch: the project to my GitHub account.

 :sweat:

## Create React App

	This project was bootstrapped with Create React App. 

## License