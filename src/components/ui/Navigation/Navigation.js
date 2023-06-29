"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Navigation.module.sass";

export default function Navigation() {
  const options = [
    { key: 0, option: "Home", href: "/" },
    { key: 1, option: "About", href: "/about" },
    { key: 2, option: "Blog", href: "/blog" },
    { key: 3, option: "News", href: "/news" },
  ];

  const [activeOption, setActiveOption] = useState(options[0].option);

  const optionClick = (option) => {
    setActiveOption(option);
  };

  return (    
    <div className={styles.menuWrap}>
      <ul className={styles.subList}>
        {options &&
          options.map((data, i) => (
            <li
              key={data.key}
              className={`${activeOption === data.option ? styles.active : ""}`}
              onClick={() => optionClick(data.option)}
            >
              <Link href={data.href}>{data.option}</Link>
            </li>
          ))}
      </ul>
      <div className={styles.menuBtn}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
