import * as React from 'react';
import { withPrefix } from 'gatsby';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { OIConfig, ArticleHeading, EnHeading, JpHeading, Paragraph } from './shared';

type FeatureProps = {
  url: string;
};

const hVars = {
  visible: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  },
  hidden: {
    opacity: 0
  }
};

const h2Vars = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  },
  hidden: {
    opacity: 0,
    y: 30
  }
};

const intersectionConfig = {
  rootMargin: '0px 0px -40% 0px',
  threshold: 0,
  triggerOnce: true
};

export const Features = (): React.ReactElement => {
  const [HRef, HInView] = useInView(OIConfig);
  const [F1Ref, F1InView] = useInView(intersectionConfig);
  const [F2Ref, F2InView] = useInView(intersectionConfig);
  const [F3Ref, F3InView] = useInView(intersectionConfig);

  return (
    <Container>
      <ArticleHeading
        animate={HInView ? 'visible' : 'hidden'}
        variants={hVars}
        ref={HRef}
        css={css`
          margin-left: 64px;
          margin-top: 64px;
          @media screen and (max-width: 960px) {
            margin: 0;
            padding: 32px 0 32px 32px;
          }
        `}
      >
        <EnHeading>CHARACTERISTICS OF LEARNING</EnHeading>
        <JpHeading>学びの特色</JpHeading>
      </ArticleHeading>
      <FeatureArticle
        css={css`
          @media screen and (max-width: 960px) {
            display: inline-flex;
            width: 100%;
            margin: 0;
            flex-direction: column-reverse;
          }
        `}
        ref={F1Ref}
        initial={{ x: 200, y: 0 }}
        animate={F1InView ? 'visible' : 'hidden'}
        variants={hVars}
      >
        <FeatureDescription>
          <h3 className="gradient-text_orange">
            基礎から先端技術まで
            <span className="features-description_small">Webサイト制作に関わるすべてを学ぶ</span>
          </h3>
          <Paragraph
            initial="hidden"
            animate={F1InView ? 'visible' : 'hidden'}
            variants={hVars}
            transition={{ delay: 0.2 }}
          >
            デザイン系、コード（プログラミング）系の2系統の授業があり、両方を複合的に学んだり、片方に特化して学ぶことができます。Webサイト制作プロジェクト演習ではひとつのテーマについてグループを組み、得意な技術を活かすことができます。
          </Paragraph>
          <CurriculumList
            initial={{ x: 100 }}
            animate={F1InView ? 'visible' : 'hidden'}
            variants={hVars}
            transition={{ delay: 0.4 }}
          >
            <motion.span initial="hidden" variants={hVars}>
              授業
            </motion.span>
            <ul>
              <motion.li initial="hidden" variants={hVars}>
                Webサイト制作実践演習
              </motion.li>
              <motion.li initial="hidden" variants={hVars}>
                Webデザイン演習
              </motion.li>
            </ul>
          </CurriculumList>
        </FeatureDescription>
        {/* eslint-disable-next-line prettier/prettier */}
        <FeatureImage css={css`
            border-radius: 5px 0 0 5px;
          `}
          url={withPrefix('/images/feature/feature-1.jpg')}
        />
      </FeatureArticle>
      <FeatureArticle
        css={css`
          @media screen and (max-width: 960px) {
            margin: 0;
            width: 100%;
            flex-direction: column;
          }
        `}
        ref={F2Ref}
        initial={{ x: -200, y: 0 }}
        animate={F2InView ? 'visible' : 'hidden'}
        variants={hVars}
      >
        {/* eslint-disable-next-line prettier/prettier */}
        <FeatureImage
          css={css`
            border-radius: 0 5px 5px 0;
          `}
          url={withPrefix('/images/feature/feature-2.jpg')}
        />
        <FeatureDescription>
          <h3 className="gradient-text_orange">
            新しいWeb表現を探る
            <span className="features-description_small">複合的な学びが得られるカリキュラム</span>
          </h3>
          <Paragraph
            initial="hidden"
            animate={F2InView ? 'visible' : 'hidden'}
            variants={hVars}
            transition={{ delay: 0.2 }}
          >
            サイト構築だけでなく、デザインの基礎から動画撮影やゲーム開発に必要なプログラミングまで横断的に学ぶことができます。動画や音楽、ゲームなどを盛り込んだ、バリエーション豊かなサイトの構築手法が身につきます。
          </Paragraph>
          <CurriculumList
            initial={{ x: -100 }}
            animate={F2InView ? 'visible' : 'hidden'}
            variants={hVars}
            transition={{ delay: 0.4 }}
          >
            <motion.span initial="hidden" variants={hVars}>
              授業
            </motion.span>
            <ul>
              <motion.li initial="hidden" variants={hVars}>
                映像制作演習
              </motion.li>
              <motion.li initial="hidden" variants={hVars}>
                デザインベーシック
              </motion.li>
            </ul>
          </CurriculumList>
        </FeatureDescription>
      </FeatureArticle>
      <BusinessArticle
        css={css`
          @media screen and (max-width: 960px) {
            margin: 0 !important;
            width: 100%;
          }
        `}
        ref={F3Ref}
        initial="hidden"
        animate={F3InView ? 'visible' : 'hidden'}
        variants={h2Vars}
      >
        <FeatureDescription
          css={css`
            width: 500px;
            filter: drop-shadow(0px 0px 4px #00000040);
            @media screen and (max-width: 960px) {
              height: auto;
              h3 {
                font-size: 25px;
              }
            }
          `}
        >
          <h3>
            Webサービスをビジネスに
            <span className="features-description_small">つなげる知識も身につける</span>
          </h3>
          <Paragraph
            initial={{ y: 50 }}
            animate={F3InView ? 'visible' : 'hidden'}
            variants={h2Vars}
            transition={{ delay: 0.2 }}
          >
            Webサイト制作技術と並行して、リサーチ基礎、プランニング基礎、インターネットマーケティングなど、ビジネス領域の科目を学ぶことでビジネスに活かせるWebの制作を学べます。また新たなWebサービスを生み出すために必要な知識やビジネス的な視点も養うことができます。
          </Paragraph>
          <CurriculumList
            initial={{ y: -150 }}
            animate={F3InView ? 'visible' : 'hidden'}
            variants={h2Vars}
            transition={{ delay: 0.6 }}
          >
            <motion.span initial="hidden" variants={hVars}>
              授業
            </motion.span>
            <ul>
              <motion.li initial="hidden" variants={hVars}>
                Webプランニング概論
              </motion.li>
              <motion.li initial="hidden" variants={hVars}>
                マーケティング基礎
              </motion.li>
            </ul>
          </CurriculumList>
        </FeatureDescription>
      </BusinessArticle>
    </Container>
  );
};

const FeatureArticle = styled(motion.article)`
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 500px;
  @media screen and (max-width: 960px) {
    width: 100%;
    display: inline-flex;
    flex-flow: column;
    margin-top: 0 !important;
  }
`;

const BusinessArticle = styled(motion.article)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 500px;
  background: center/cover url(${withPrefix('./images/feature/feature-3.jpg')});
  color: white;
  @media screen and (max-width: 960px) {
    width: 100%;
    display: inline-flex;
    flex-flow: column;
  }
`;

const FeatureDescription = styled.div`
  min-width: 500px;
  width: 50%;
  height: fit-content;
  margin: 64px;
  h3 {
    font-size: 32px;
    margin-bottom: 16px;
    span {
      display: block;
      font-size: 26px;
    }
  }
  @media screen and (max-width: 960px) {
    margin: 0;
    min-width: 0;
    width: 100%;
    padding: 32px 32px 48px 32px;
    flex-direction: column-reverse;
    h3 {
      font-size: 26px;
      span {
        font-size: 18px;
      }
    }
  }
`;

const FeatureImage = styled.div`
  width: 100%;
  height: 100%;
  background: center/cover url(${(props: FeatureProps) => props.url});
  @media screen and (max-width: 960px) {
    margin: 0;
    padding: 32px;
    width: 100%;
    height: 300px;
    border-radius: 0;
  }
`;

const CurriculumList = styled(motion.aside)`
  display: inline-flex;
  margin-top: 16px;
  ul {
    list-style: none;
    display: flex;
    li + li {
      margin-left: 1em;
    }
  }
  span {
    font-weight: bold;
    margin-right: 1em;
  }
  @media screen and (max-width: 960px) {
    flex-flow: column;
    margin: 0;
    margin-top: 2em;
    width: 90vw;
    ul {
      display: block;
      li + li {
        margin-left: 0;
        margin-top: 0.5em;
      }
    }
    span {
      margin-right: 0;
      margin-bottom: 0.5em;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  article + article {
    margin-top: 64px;
  }
  @media screen and (max-width: 960px) {
    display: block;
    margin: 0;
  }
`;
