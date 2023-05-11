import React from "react";
import styles from "./Footer.module.css";
import {
	EmailShareButton,
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
	WhatsappShareButton,
} from "react-share";

import { EmailIcon, FacebookIcon, LinkedinIcon, TwitterIcon, WhatsappIcon } from "react-share";

const Footer = () => {
	const shareUrl = "localhost:3000"; // TODO: change to actual url

	return (
		<div className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.left}>
					<div className={styles.share}>
						<TwitterShareButton url={shareUrl} title="title" className={styles.shareButton}>
							<TwitterIcon size={32} round={true} />
						</TwitterShareButton>
						<FacebookShareButton url={shareUrl} title="title" className={styles.shareButton}>
							<FacebookIcon size={32} round={true} />
						</FacebookShareButton>
						<LinkedinShareButton url={shareUrl} title="title" className={styles.shareButton}>
							<LinkedinIcon size={32} round={true} />
						</LinkedinShareButton>
						<WhatsappShareButton url={shareUrl} title="title" className={styles.shareButton}>
							<WhatsappIcon size={32} round={true} />
						</WhatsappShareButton>
						<EmailShareButton url={shareUrl} title="title" className={styles.shareButton}>
							<EmailIcon size={32} round={true} />
						</EmailShareButton>
					</div>
				</div>
				<div className={styles.right}>
					<ul>
						<li>
							<a href="#home">Home</a>
						</li>
						<li>
							<a href="#about">About</a>
						</li>
						<li>
							<a href="#projects">Projects</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</div>
			</div>
			<p>Copyright Kevin Johnson - {new Date().getFullYear()}</p>
		</div>
	);
};

export default Footer;
