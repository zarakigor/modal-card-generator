import styles from "./footer.module.scss";
import Image from "next/image";
import {
  MdGolfCourse,
  MdCodeOff,
  MdIntegrationInstructions,
} from "react-icons/md";
import { SiAmazonaws } from "react-icons/si";
import Faq from "react-faq-component";

function Footer() {
  const data = {
    rows: [
      {
        title: "How do I pay for the essentials or premium plan?",
        content:
          "You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle. You can paywith a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.",
      },
      {
        title:
          "Can I cancel my essentials or premium plan subscription at my time?",
        content:
          "You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle. You can paywith a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.",
      },
      {
        title: "How do I pay for the essentials or premium plan?",
        content:
          "You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle. You can paywith a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.",
      },
      {
        title: "We need to add new users to our team, how will that be billed?",
        content:
          "You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle. You can paywith a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.",
      },
      {
        title: "How do I pay for the essentials or premium plan?",
        content:
          "You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle. You can paywith a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.",
      },
      {
        title:
          "Can I cancel my essentials or premium plan subscription at my time?",
        content:
          "You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle. You can paywith a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.",
      },
    ],
  };

  const faq_styles = {
    // bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "black",
    rowContentColor: "grey",
    rowTitleTextSize: "18px",
    rowContentTextSize: "16px",
    expandColor: "red",
  };

  const config = {
    tabFocus: true,
    expandIcon: "+",
    collapseIcon: "-",
  };

  return (
    <div className={styles.footer}>
      <h1>Conversion & UX ready popups & modals</h1>
      <div className={styles.container__top}>
        <div>
          <Image src="/images/pixel_perfect.svg" width="48" height="48" />
          <h3>Pixel Perfect</h3>
          <p>
            Helps you calculate your email marketing roi to measure success.
          </p>
        </div>
        <div>
          <Image src="/images/conversion_ready.svg" width="48" height="48" />
          <h3>Conversion Ready</h3>
          <p>
            Empowers your emails by generating afree code for a CTA in your
            subject line.
          </p>
        </div>
        <div>
          <Image src="/images/modern_useful.svg" width="48" height="48" />
          <h3>Modern & Useful</h3>
          <p>
            Enables you to estimate the total profit of your investment on a
            popup service.
          </p>
        </div>
      </div>

      <h1>Frequently Asked Questions</h1>
      <Faq data={data} styles={faq_styles} config={config} />

      <h1>Build great popups without code</h1>
      <div className={styles.container__bottom}>
        <div>
          <MdGolfCourse className={styles.footer_icon} />
          <h3>Targeting Options</h3>
          <p>Target +26 trigger to your visitors</p>
        </div>
        <div>
          <MdCodeOff className={styles.footer_icon} />
          <h3>No-Code</h3>
          <p>No code required while you’re creating a popup</p>
        </div>
        <div>
          <MdIntegrationInstructions className={styles.footer_icon} />
          <h3>Targeting Options</h3>
          <p>Integrated with your marketing and CRM platforms</p>
        </div>
        <div>
          <SiAmazonaws className={styles.footer_icon} />
          <h3>Targeting Options</h3>
          <p>Don’t worry about speed and Amazon AWS resources</p>
        </div>
      </div>
      <div>
        <Image src="/images/popupsmart_logo.svg" width="32" height="32" />
        <p className="text-xs tracking-tight mt-4">Powered by Popupsmart</p>
      </div>
    </div>
  );
}

export default Footer;
