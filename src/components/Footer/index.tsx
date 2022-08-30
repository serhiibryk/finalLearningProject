import { Layout } from "antd";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";

import useStyles from "./style";

const { Footer: FooterAnt } = Layout;

const Footer = () => {
  const classes = useStyles();
  const date = format(new Date(), "yyyy-MM-dd");
  const { t, i18n } = useTranslation();
  return (
    <FooterAnt className={classes.textAlign}>
      <div>
        <p>
          {" "}
          {t("rights")}&#174; &mdash;&mdash; {date}
        </p>
      </div>
    </FooterAnt>
  );
};

export default Footer;
