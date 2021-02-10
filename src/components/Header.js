import React from "react";
import styles from "./Header.module.css";
import { BsCamera } from "react-icons/bs";
import { BiHeart, BiCompass, BiUser } from "react-icons/bi";
import Divider from "./Divider";
import SearchBar from "./SearchBar";
import Button from "./Button";

const headerStyle = {
  width: "100%",
  height: "64px",
};

const titleStyle = {
  fontFamily: "'Sacramento', cursive",
  fontSize: "32px",
};

export default function Header() {
  return (
    <header className={styles.header} style={headerStyle}>
      <div className={[styles.container, "container"].join(" ")}>
        <div className={styles.brand}>
          <BsCamera color="var(--color-icon)" size="48px" />
          <Divider />
          <span style={titleStyle}>Henrygram</span>
        </div>
        <SearchBar />
        <div className={styles.buttonGroup}>
          <Button>
            <BiUser className={styles.iconButton} />
          </Button>
          <Button>
            <BiHeart className={styles.iconButton} />
          </Button>
          <Button>
            <BiCompass className={styles.iconButton} />
          </Button>
        </div>
      </div>
    </header>
  );
}
