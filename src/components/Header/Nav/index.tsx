// Assuming that the TypeScript types for styles, perspective, and slideIn are defined.

import React from 'react';
import styles from './style.module.scss';

import { motion } from 'framer-motion';
import { links, footerLinks } from './data';
import { perspective, slideIn } from "./anim";
import ToggleButton from '@/components/ui/toggle';

interface Link {
  title: string;
  href: string;
}

export default function Index() {

  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {links.map((link: Link, i: number) => {
          const { title, href } = link;
          return (
            <div key={`b_${i}`} className={styles.linkContainer}>
              <motion.div
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <a href={href}>{title}</a>
                
              </motion.div>
            </div>
          );
        })}
      </div>
      <motion.div className={styles.footer}>
        {footerLinks.map((link: Link, i: number) => {
          const { title } = link;
          return (
            <motion.a
              variants={slideIn}
              custom={i}
              initial="initial"
              animate="enter"
              exit="exit"
              key={`f_${i}`}
            >
              {title}
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
}
