import { useContext, useRef } from "react";
import { useScrollButtons } from "../../hooks/useScrollButtons";
import { MenuContext } from "../../contexts/menusContext";
import { CategoryContext } from "../../contexts/categoriesContext";

import {
  ArrowButton,
  ButtonContent,
  CategoriesContainer,
  CategoriesWrapper,
  CategoryBox
} from "./categoriesStyles"

import { CaretLeft, CaretRight } from "phosphor-react";

import { categoriesItems } from "../../data/categoriesItems";


function Categories() {

  const scrollRef = useRef<HTMLDivElement>(null);
  const { showLeft, showRight } = useScrollButtons(scrollRef);
  const { openMenu } = useContext(MenuContext);
  const { setCategoryId, selectedUid, setSelectedUid } = useContext(CategoryContext);

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({
      left: dir === 'left' ? -350 : 350,
      behavior: 'smooth',
    });
  };

  //altera a renderização dos vídeos de acordo com a categoria clicada
  function searchCategory(id: string, uid: string) {
    setCategoryId(id)
    setSelectedUid(uid)
  };

  return (
    <CategoriesWrapper openMenu={openMenu}>

      {showLeft && (
        <ArrowButton onClick={() => scroll('left')} position='left'>
          <ButtonContent>
            <CaretLeft size={18} weight='regular' />
          </ButtonContent>
        </ArrowButton>
      )}

      <CategoriesContainer ref={scrollRef}>
        {categoriesItems.map((item) => (
          <CategoryBox
            selected={selectedUid === item.uid}
            onClick={() => searchCategory(item.id, item.uid)}
            key={item.uid}
          >
            <span>{item.name}</span>
          </CategoryBox>
        ))}
      </CategoriesContainer>

      {showRight && (
        <ArrowButton onClick={() => scroll('right')} position='right'>
          <ButtonContent>
            <CaretRight size={18} weight='regular' />
          </ButtonContent>
        </ArrowButton>
      )}

    </CategoriesWrapper>
  )
}

export default Categories