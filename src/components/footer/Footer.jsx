import { Col, Layout, Row } from "antd";
// import Image from 'next/image';

import { mq } from "../../styles/styles";
import Link from "../Link";
// import MobileDownloadLinks from '../MobileDownloadLinks';
import Typography from "../Typography";

const { Footer: AntdFooter } = Layout;

const footerItems = [
  {
    title: "A propos",
    items: [
      {
        href: "/",
        text: "Politique de confidentialité"
      },
      {
        href: "/",
        text: "Conditions générales"
      }
    ]
  },
  {
    title: "Contact",
    items: [
      {
        text: "contact@yourz.me"
      }
    ]
  },
  {
    title: "Coovz",
    items: [
      {
        text: "83, Avenue Aristide Briand - Lot 10 93240 Stainse"
      }
    ]
  }
];

const socialMedias = [
  {
    href: "/",
    icon: "twitter"
  },
  {
    href: "/",
    icon: "facebook"
  },
  {
    href: "/",
    icon: "google"
  }
];

const classes = {
  footer: {
    padding: 0
  },
  footerContent: {
    padding: "75px 69px 60px 22px"
  },
  footerBottom: mq({
    marginTop: [50, false, false, 92]
  }),
  stories: mq({
    marginTop: [20, false, false, 59],
    marginBottom: [20, false, false, 46]
  }),
  firstImage: {
    marginRight: 35
  },
  top: mq({
    display: "flex",
    flexDirection: ["column", false, false, "row"]
  }),
  topLeft: mq({
    marginBottom: [50, 50]
  }),
  topRight: mq({
    justifyContent: ["flex-start", false, false, "flex-end"],
    margin: [-10, false, -27]
  }),
  topRightItem: mq({
    margin: [10, false, 27]
  }),
  mobileDownloadLinks: mq({
    flexDirection: ["row", false, false, "column", "row"]
  }),
  rightFooterItemTitle: (theme) =>
    mq({
      marginBottom: [10, false, false, theme.spacing(7.7)]
    }),
  rightFooterContent: {
    padding: 0
  },
  rightFooterContentItem: (theme) =>
    mq({
      listStyle: "none",
      marginBottom: [10, false, false, theme.spacing(4.4)],
      width: [false, false, 180, 180, 210]
    }),
  link: {
    cursor: "pointer",
    letterSpacing: 1.1
  },
  socialMedias: mq({
    padding: 0,
    marginTop: [10, 0]
  }),
  socialMedia: {
    listStyle: "none",
    backgroundColor: "#C4C4C4",
    width: 41,
    height: 41,
    borderRadius: "50%"
  },
  twitter: {
    width: 18.76,
    height: 15
  },
  facebook: {
    width: 10,
    height: 19
  },
  google: {
    width: 19,
    height: 19
  }
};

const Footer = () => (
  <AntdFooter className="flexColumn" css={classes.footer}>
    <div css={classes.footerContent} className="flexColumn stretchSelf">
      {/* ------------- top  ------------- */}
      <div className="stretchSelf spaceBetween" css={classes.top}>
        {/* ------------- top left  ------------- */}
        <div css={classes.topLeft}>
          <div>
            <img
              src="/logo-dark.png"
              alt="logo yourz"
              width="147"
              height="56"
            />
          </div>
          <div css={classes.stories}>
            <Typography theme="lightDark">Your stories X Your Style</Typography>
          </div>
          {/* <MobileDownloadLinks className={classes.mobileDownloadLinks} /> */}
        </div>
        {/* ------------- top right  ------------- */}
        <div className="stretchSelf flex1">
          <div className="flexRow" css={classes.topRight}>
            {footerItems.map((footerItem, index) => (
              <div key={index} css={classes.topRightItem}>
                <div css={classes.rightFooterItemTitle}>
                  <Typography theme="dark" className="bold">
                    {footerItem.title}
                  </Typography>
                </div>
                <ul css={classes.rightFooterContent}>
                  {footerItem.items.map((item, i) => (
                    <li css={classes.rightFooterContentItem} key={i}>
                      {item.href ? (
                        <Link
                          href={item.href}
                          css={classes.link}
                          color="primary"
                        >
                          {item.text}
                        </Link>
                      ) : (
                        <Typography theme="lightDark">{item.text}</Typography>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ------------- bottom ------------- */}
      <div
        className="flexRow stretchSelf spaceBetween"
        css={classes.footerBottom}
      >
        {/* ------------- bottom left ------------- */}
        <div>
          <Typography theme="lightDark">
            © {new Date().getFullYear()} Coovz. Tous droits réservés.
          </Typography>
        </div>
        {/* ------------- bottom right ------------- */}
        <Row css={classes.socialMedias} gutter={16}>
          {socialMedias.map((social, index) => (
            <Col xs={8} key={index}>
              <div css={classes.socialMedia} className="flexCenter">
                <a href={social.href}>
                  <img
                    css={classes[social.icon]}
                    alt={social.icon}
                    src={`/icons/${social.icon}.svg`}
                  />
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  </AntdFooter>
);

export default Footer;
