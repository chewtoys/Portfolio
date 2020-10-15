import React, { FC, useState } from "react";
import Devto from "../assets/svg/Devto";
import Github from "../assets/svg/Github";
import JRKLogo from "../assets/svg/JRKLogo";
import LinkedInBox from "../assets/svg/LinkedInBox";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Close from "../assets/svg/Close";
import Hamburger from "../assets/svg/Hamburger";
import ExternalLink from "../assets/svg/ExternalLink";

interface Props {
  isMobile: boolean;
  activeRef: number;
  isTop: boolean;
  onModalOpen: () => void;
  onModalClose: () => void;
}

const Navigation: FC<Props> = (props: Props) => {
  const { isMobile, activeRef, isTop } = props;

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      {isMobile ? (
        <>
          <nav className="mobile">
            <ul className="container">
              <li className="left">
                <ul>
                  <li className="logo">
                    <AnchorLink offset="100" href="#home">
                      <JRKLogo />
                    </AnchorLink>
                  </li>
                  <li className="divider">
                    <div></div>
                  </li>
                  <li className="icon">
                    <a
                      href="https://github.com/JackRKelly"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="main">
                        <Github />
                      </span>
                      <span className="sub">
                        <ExternalLink />
                      </span>
                    </a>
                  </li>
                  <li className="icon">
                    <a
                      href="https://dev.to/jackrkelly"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="main">
                        <Devto />
                      </span>
                      <span className="sub">
                        <ExternalLink />
                      </span>
                    </a>
                  </li>
                  <li className="icon">
                    <a
                      href="https://www.linkedin.com/in/jackkelly4/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="main">
                        <LinkedInBox />
                      </span>
                      <span className="sub">
                        <ExternalLink />
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="right">
                <ul>
                  <li
                    onClick={() => {
                      setIsNavOpen(true);
                    }}
                    className="logo"
                  >
                    <Hamburger />
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <nav
            className="mobile-full"
            style={{
              left: isNavOpen ? "0" : "-100%",
              pointerEvents: isNavOpen ? "auto" : "none",
            }}
          >
            <ul>
              <li
                onClick={() => {
                  setIsNavOpen(false);
                }}
                className="icon"
              >
                <Close />
              </li>
              <li
                onClick={() => {
                  setIsNavOpen(false);
                }}
                className="anchor"
              >
                <AnchorLink offset="70" href="#home">
                  Home
                </AnchorLink>
              </li>
              <li
                onClick={() => {
                  setIsNavOpen(false);
                }}
                className="anchor"
              >
                <AnchorLink offset="325" href="#about">
                  About
                </AnchorLink>
              </li>
              <li
                onClick={() => {
                  setIsNavOpen(false);
                }}
                className="anchor"
              >
                <AnchorLink offset="70" href="#work">
                  Work
                </AnchorLink>
              </li>
              <li
                onClick={() => {
                  setIsNavOpen(false);
                }}
                className="anchor"
              >
                <AnchorLink offset="50" href="#articles">
                  Articles
                </AnchorLink>
              </li>
              <li
                onClick={() => {
                  setIsNavOpen(false);
                }}
                className="anchor"
              >
                <AnchorLink offset="70" href="#contact">
                  Contact
                </AnchorLink>
              </li>
            </ul>
          </nav>
        </>
      ) : (
        <nav
          className="desktop"
          style={{ boxShadow: isTop ? "none" : "0 0 20px rgba(0, 0, 0, 0.16)" }}
        >
          <ul
            className="container"
            style={{ padding: isTop ? "20px 0" : "10px 0" }}
          >
            <li className="left">
              <ul>
                <li className={activeRef === 0 ? "active logo" : "logo"}>
                  <AnchorLink offset="100" href="#home">
                    <JRKLogo />
                  </AnchorLink>
                </li>
                <li className="divider">
                  <div></div>
                </li>
                <li className="icon">
                  <a
                    href="https://github.com/JackRKelly"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="main">
                      <Github />
                    </span>
                    <span className="sub">
                      <ExternalLink />
                    </span>
                  </a>
                </li>
                <li className="icon">
                  <a
                    href="https://dev.to/jackrkelly"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="main">
                      <Devto />
                    </span>
                    <span className="sub">
                      <ExternalLink />
                    </span>
                  </a>
                </li>
                <li className="icon">
                  <a
                    href="https://www.linkedin.com/in/jackkelly4/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="main">
                      <LinkedInBox />
                    </span>
                    <span className="sub">
                      <ExternalLink />
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="right">
              <ul>
                <li>
                  <AnchorLink
                    offset="150"
                    href="#about"
                    className={activeRef === 1 ? "anchor active" : "anchor"}
                  >
                    About
                  </AnchorLink>
                </li>
                <li>
                  <AnchorLink
                    offset="30"
                    href="#work"
                    className={activeRef === 2 ? "anchor active" : "anchor"}
                  >
                    Work
                  </AnchorLink>
                </li>
                <li>
                  <AnchorLink
                    offset="10"
                    href="#articles"
                    className={activeRef === 3 ? "anchor active" : "anchor"}
                  >
                    Articles
                  </AnchorLink>
                </li>
                <li>
                  <AnchorLink
                    offset="50"
                    href="#contact"
                    className={activeRef === 4 ? "anchor active" : "anchor"}
                  >
                    Contact
                  </AnchorLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navigation;
