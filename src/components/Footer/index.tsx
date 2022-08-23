import { Layout } from "antd";
import { format } from "date-fns";

const { Footer: FooterAnt } = Layout;

const Footer = () => {
  const a = format(new Date(), "yyyy-MM-dd");
  return (
    <FooterAnt
      style={{
        textAlign: "center",
      }}
    >
      <div>
        <p> All rights reserved&#174; &mdash;&mdash; {a}</p>
      </div>
    </FooterAnt>
  );
};

export default Footer;
