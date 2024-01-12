import React from 'react';
import { CardProps } from './Card.model';
import Image from 'next/image';
import styles from './Card.module.scss';
import { CiStar } from 'react-icons/ci';
import { BsCameraVideo } from 'react-icons/bs';

const Card = ({ id, name, image, kind, episodes, score }: CardProps) => {
  return (
    <div className={styles.main}>
      {image && (
        <figure>
          <Image
            src={`https://shikimori.one${image?.original}`}
            fill
            alt={id}
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={true}
          />
        </figure>
      )}
      <div className={styles.title}>
        {name && <h2>{name}</h2>}
        <h3>{kind ?? 'TV'}</h3>
      </div>
      <div className={styles.info}>
        <h4>
          <BsCameraVideo />
          {episodes ?? '0'}
        </h4>
        <h4>
          <CiStar />
          {score ?? '10'}
        </h4>
      </div>
    </div>
  );
};

export default Card;
