import { createContext, useState, type ReactNode } from "react";

interface SearchContextProps {
  children: ReactNode,
}

interface SearchContextTypes {
  search: string,
  setSearch: (search: string) => void,
};

const initialValues = {
  search: '',
  setSearch: () => { },
};


export const SearchContext = createContext<SearchContextTypes>(initialValues);

export const SearchStorage = ({ children }: SearchContextProps) => {

  const [search, setSearch] = useState(initialValues.search);

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  )
};