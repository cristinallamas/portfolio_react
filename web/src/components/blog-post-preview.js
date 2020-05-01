import {Link} from 'gatsby'
import React from 'react'
import {cn, getBlogUrl} from '../lib/helpers'
import {format} from 'date-fns'
import styles from './blog-post-preview.module.css'
import {responsiveTitle3} from './typography.module.css'

function BlogPostPreview (props) {
  return (
    <Link className={styles.root} to={getBlogUrl(props.publishedAt, props.slug.current)}>
      {/* <div className={styles.leadMediaThumb}>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </div> */}

      <h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
      {props.publishedAt && <span>{format(props.publishedAt, 'YYYY/MM/DD')}</span>}
      {props.readingTimeInMinutes && (
        <React.Fragment>
          <br />
          Reading time: {props.readingTimeInMinutes} mins
        </React.Fragment>
      )}
      {/* {props._rawExcerpt && (
        <div className={styles.excerpt}>
          <BlockText blocks={props._rawExcerpt} />
        </div>
      )} */}
    </Link>
  )
}

export default BlogPostPreview
