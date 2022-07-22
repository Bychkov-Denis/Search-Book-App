import React from 'react';
import MyInput from '../input/MyInput';
import MySelect from '../select/MySelect' 

const Header = ({getQuery, fetchBooks, sortBooks, filteredByCategory}) => {

    const categories = ["All", "Art", "Biography", "Computers", "History", "Medical", "Poetry"];
    const methodsOfSort = ["Relevance", "Newest"];

    return (
        <header className="header d-flex justify-content-center align-items-center">
          <div className="container">
              <h1 className="display-2 text-center text-white">Books Search</h1>
              <MyInput getQuery={getQuery} fetchBooks={fetchBooks} />
              <div className="row justify-content-center align-items-center flex-nowrap">
                  <div className="col-auto">
                      <MySelect label={"Categories"} categories={categories} sortedFunction={filteredByCategory}/>
                  </div>
                  <div className="col-auto">
                      <MySelect label={"Sorting By"} categories={methodsOfSort} sortedFunction={sortBooks} />
                  </div>
              </div>
          </div>
      </header>
    );
}

export default Header;
