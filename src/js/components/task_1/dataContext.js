import React, {useState, createContext, useEffect} from 'react';

export const PageDataContext = createContext();
export const CategoriesContext = createContext();



export const SidebarProvider = (props) => {
  const [categories, setCategories] = useState([
    {categorie:"Item 11"},
    {categorie:"Item 2"},
    {categorie:"Item 3"},
    {categorie:"Item 4"},
    {categorie:"Item 5"},
    {categorie:"Item 6"},
    {categorie:"Item 7"}
  ]);

  return(
          <CategoriesContext.Provider value={[categories]}>
            {props.children}
          </CategoriesContext.Provider>
        )
};




export const PageProvider = (props) => {
  const [categories, setCategories] = useState([
                                                {topic:"Item 1"},
                                                {topic:"Item 2"},
                                                {topic:"Item 3"},
                                                {topic:"Item 4"},
                                                {topic:"Item 5"},
                                                {topic:"Item 6"},
                                                {topic:"Item 7"}
                                              ]);
  return(
    <PageDataContext.Provider value={[categories]}>
      {props.children}
    </PageDataContext.Provider>
  );
};
