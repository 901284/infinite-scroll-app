'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './Archive.module.scss';
import Card from '../Card';
import { useInView } from 'react-intersection-observer';
import { AnimatePresence, motion } from 'framer-motion';
import { fetchPosts } from '@/app/tools';

let page = 1;

const Archive = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const { ref, inView } = useInView();

  const fetchRef = useRef<number>(0);

  useEffect(() => {
    if (inView) {
      setLoading(true);
      fetchRef.current++;
      const fetchId = fetchRef.current;

      if (fetchId === fetchRef.current) {
        fetchPosts(page).then((res) => {
          setData([...data, ...res]);
          page++;
        });
        setLoading(false);
      }
    }
    setLoading(true)
  }, [inView]);

  const cardVariants = {
    initial: (index) => ({
      opacity: 0,
      x: -10,
      transition: {
        delay: 0.15 * index,
      },
    }),
    animate: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.15 * index,
      },
    }),
  };

  return (
    <AnimatePresence>
      <section className={`${styles.main} container`}>
        <div className={styles.results}>
          {!!data?.length &&
            data?.map((item, i) => (
              <motion.div
                variants={cardVariants}
                initial="initial"
                animate="animate"
                key={i}
                custom={i}
              >
                <Card
                  id={item?.id}
                  name={item?.name}
                  image={item?.image}
                  kind={item?.kind}
                  episodes={item?.episodes}
                  score={item?.score}
                />
              </motion.div>
            ))}
        </div>
        {loading && <div className="loader" ref={ref} />}
      </section>
    </AnimatePresence>
  );
};

export default Archive;
