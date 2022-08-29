import { Layout } from "antd";
import { format } from "date-fns";

const { Footer: FooterAnt } = Layout;

const Footer = () => {
  const date = format(new Date(), "yyyy-MM-dd");

  return (
    <FooterAnt
      style={{
        textAlign: "center",
      }}
    >
      <div>
        <p> All rights reserved&#174; &mdash;&mdash; {date}</p>
      </div>
    </FooterAnt>
  );
};

export default Footer;
