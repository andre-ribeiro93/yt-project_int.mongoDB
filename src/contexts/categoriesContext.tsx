import { createContext, useState, type ReactNode } from "react";

interface CategoryContextProps {
  children: ReactNode,
}

interface CategoryContextTypes {
  categoryId: string,
  setCategoryId: (categoryId: string) => void,
  selectedUid: string,
  setSelectedUid: (selectedUid: string) => void,
};

const initialValues = {
  categoryId: '0',
  setCategoryId: () => { },
  selectedUid: '01',
  setSelectedUid: () => { },
};


export const CategoryContext = createContext<CategoryContextTypes>(initialValues);

export const CategoryStorage = ({ children }: CategoryContextProps) => {

  const [categoryId, setCategoryId] = useState(initialValues.categoryId);
  const [selectedUid, setSelectedUid] = useState(initialValues.selectedUid);

  return (
    <CategoryContext.Provider value={{ categoryId, setCategoryId, selectedUid, setSelectedUid }}>
      {children}
    </CategoryContext.Provider>
  )
};