import Image from "next/image";
import Navbar from "../Navbar/navbar";
import styles from "./header.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.top}>
        <Navbar />
        <h1 className={styles.title}>Simple modal card creator</h1>
        <p className={styles.p}>
          A utility-first CSS framework packed with classeslike flex, pt-4,
          text-center and rotate-90 that can becomposed to build any design,
          directly in your markup.
        </p>
        <button>Try it out now</button>
        <div className={styles.smalltext__container}>
          <div>
            <Image
              src="/images/check.svg"
              width="16"
              height="16"
              className="mr-9"
            />
            <p>Free and paid plans</p>
          </div>
          <div>
            <Image src="/images/check.svg" width="16" height="16" />
            <p>Setup in minutes</p>
          </div>
          <div>
            <Image src="/images/check.svg" width="16" height="16" />
            <p>No credit card required*</p>
          </div>
        </div>

        <Image
          src="/images/sample.png"
          width="800"
          height="468"
          className="mt-7"
        />
      </div>
      <div className={styles.bottom}>
        <div>
          <h2>3x</h2>
          <p>Increase Conversion Rate</p>
        </div>
        <div>
          <h2>120%</h2>
          <p>Email Subscribers</p>
        </div>
        <div>
          <h2>390%</h2>
          <p>More Customer Engagement</p>
        </div>
        <h3>Popupsmart meets all your business needs.</h3>
      </div>
    </div>
  );
}

export default Header;
