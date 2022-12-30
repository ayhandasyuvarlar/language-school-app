import FooterExcerpt from "components/FooterExcerpt";
import { selectAllFooter } from "context/footerSlice";
import React from "react";
import { useSelector } from "react-redux";
import styled from "scss/footer.module.scss";
const Footer = () => {
  const { logo, name, footerList, phone, address } =
    useSelector(selectAllFooter);
  return (
    <footer className={styled.footer}>
      <div className={styled.footer__start}>
        <div className={styled.footer__logo}>
          <img src={logo} alt={logo} />
          <h1 title={name}>{name}</h1>
        </div>
        <p title={address}>{address}</p>
        <p title={phone}>{phone}</p>
      </div>
      <div className={styled.footer__list}>
        {footerList.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            {item.list.map((item) => (
              <div className={styled.footer__list__item}>
                <FooterExcerpt key={item.id} {...item} />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div style={styled.footer__socialBar}></div>
    </footer>
  );
};

export default Footer;
