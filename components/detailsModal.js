import React from "react";
import styles from "../styles/details.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import Cancel from "../public/images/cancel_black.png";

const goToCode = (gitLink) => {
  window.open(gitLink, "_blank");
};

const goToSite = (siteLink) => {
  window.open(siteLink, "_blank");
};

export default function DetailsModal({ closeModal, data }) {

return (
	<motion.div className={styles.modal}>
		{/* <div className={styles.modal}> */}
		<div className={styles.modalBody}>
			<div className={styles.modal_image_view}>
				<div className={styles.preview_container}>
					<div className={styles.preview}>
						<Image
							width="150rem"
							objectFit="contain"
							height="150rem"
							src={data.body}
							alt="project icon"
							layout="fixed"
						/>
					</div>
				</div>
			</div>
			<div className={styles.modal_description_view}>
				<div className={styles.cancelContainer}>
					<Image
						src={Cancel}
						width={20}
						height={20}
						onClick={closeModal}
						priority
						layout="intrinsic"
						className={styles.cancel}
						alt="cancel button"
					/>
				</div>
				<h2>{data.title}</h2>
				<p>{data.description}</p>
				<div className={styles.pillsContainer}>
					{data.tools.map((el) => (
						<span key={el} className={styles.pills}>
							{el}
						</span>
					))}
				</div>
				<div className={styles.button_container}>
					{data.gitLink && (
						<button
							disabled={!data.gitLink}
							onClick={() => goToCode(data.gitLink)}
							className={` ${styles.button}`}>
							View Code
						</button>
					)}
					<button onClick={() => goToSite(data.siteLink)} className={styles.button}>
						View Project
					</button>
				</div>
			</div>
		</div>
		{/* </div> */}
	</motion.div>
);
}
