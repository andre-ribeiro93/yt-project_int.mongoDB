import { CopyrightContainer, FooterContent } from "./footerStyles";

import { footerItems } from "../../data/footerItems";
import { useNavigate } from "react-router-dom";
import { Copyright } from "phosphor-react";

function Footer() {

  const navigate = useNavigate();

  return (
    <footer>
      <FooterContent>
        {footerItems.slice(0, 7).map((item, index) => (
          <span
            key={index}
            onClick={() => navigate(item.link)}
          >
            {item.name}
          </span>
        ))}
      </FooterContent>

      <FooterContent>
        {footerItems.slice(7).map((item, index) => (
          <span
            key={index + 6}
            onClick={() => navigate(item.link)}
          >
            {item.name}
          </span>
        ))}
      </FooterContent>

      <CopyrightContainer>
        <Copyright size={13} weight='regular' color='#909090'/>
        <span>2025 André Ribeiro</span>
      </CopyrightContainer>
    </footer>
  )
}

export default Footer;