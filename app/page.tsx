import Image from "next/image";
import styles from "./page.module.css";
import { headers } from "next/headers";
import { UAParser } from "ua-parser-js";

export default async function Home() {
  const h = await headers();
  console.log(h.get("user-agent"));

  const { browser, device } = UAParser(h.get("user-agent") || "");

  return (
    <div className={styles.page}>
      <div>
        <div style={{ paddingBottom: "40px" }}>Demo</div>
        <div>Browser name: {browser.name}</div>
        <div>Browser type: {browser.type}</div>
        <div>Device model: {device.model}</div>
      </div>
    </div>
  );
}
