import React from 'react';
import { EIcons, Icon } from '../../../../../common/Icons/Icon';
import s from './textContent.less';
import Title from './Title/Title';

interface ITextContent {
  author: string;
  authorImg: string;
  title?: string;
  imgSrc?: string;
}

const TextContent = ({ author, title, authorImg, imgSrc }: ITextContent) => {
  return (
    <div className={s.textContent}>
      <Title title={title} authorImg={authorImg} imgSrc={imgSrc} />
      <div>
        <div className={s.publicationInfo}>
          <div className={s.publicationTime}>
            <span className={`${s.publicationTime} ${s.wordPublished}`}>
              опубликовано{' '}
            </span>
            3 часа назад
          </div>
          <div className={s.author}>
            <img src={authorImg} alt="avatar" className={s.authorPhoto} />
            <a href="#userId" className={s.authorName}>
              {author}
            </a>
          </div>
        </div>
        <div className={s.publicationViews}>
          <Icon name={EIcons.views} size={[16, 11]} />
          <span className={s.timeViews}>1 час назад</span>
        </div>
      </div>
    </div>
  );
};

export default TextContent;
