import styles from "../styles/Layout.module.scss";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";

import CallButton from "./CallToActionButton/CallButton";
import { style } from "@mui/system";
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logobar}>
        <ul className={styles.logo}>
          <li>
            <Link href="/">
              <a>
                <img src="/logo.svg" height={48} width={48} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <h1>Solheim tannlegesenter</h1>
              </a>
            </Link>
          </li>
        </ul>

        {/* <ul className={styles.mobileNav}>
          <li>
            <MenuIcon sx={{ fontSize: '3rem' }} />
          </li>
        </ul> */}
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="#bestil-time">
                <a> Bestil time</a>
              </Link>
            </li>

            <li>
              <Link href="#priser">
                <a> Priser</a>
              </Link>
            </li>
            <li>
              <Link href="#tjenester">
                <a> Kampanjer</a>
              </Link>
            </li>
            <li>
              <Link href="#finn-oss">
                <a> Finn oss</a>
              </Link>
            </li>
          </ul>
        </nav>

        <ul className={styles.actionBtn}>
          <li>
            <Link href="tel:4797326724">
              <a>
                <CallButton />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
