import React from 'react'
import styles from './image-text.module.css'
// import BlockContent from './block-content'

import {imageUrlFor} from '../lib/image-url'
import {buildImageObj} from '../lib/helpers'
const ImageText = ({image, children}) => (
  <div className={styles.wrapper}>
    <div className={styles.imageWrapper}>
      {image && image.asset && (
        <img
          className={styles.image}
          src={imageUrlFor(buildImageObj(image))
            .width(400)
            .height(400)
            .url()}
          alt={image.alt}
        />
      )}
    </div>
    <div className={styles.text}>{children}</div>
  </div>
)
export default ImageText
