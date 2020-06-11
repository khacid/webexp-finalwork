import * as React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import DhuLogo from './logo_static';

export const Footer = (): React.ReactElement => {
  return (
    <Wrapper>
      <Upper>
        <UnivLogo onClick={() => window.open('https://www.dhw.ac.jp/')}>
          <DhuLogo />
        </UnivLogo>
        <nav>
          <FacultyList>
            <FacultyItem>
              <a href="https://www.dhw.ac.jp/faculty/3dcg/" target="_blank" rel="norefferer">3DCG･VFX</a>
            </FacultyItem>
            <FacultyItem>
              <a href="https://www.dhw.ac.jp/faculty/game/" target="_blank" rel="norefferer">ゲーム･プログラミング</a>
            </FacultyItem>
            <FacultyItem>
              <a href="https://www.dhw.ac.jp/faculty/movie/" target="_blank" rel="norefferer">映像</a>
            </FacultyItem>
            <FacultyItem>
              <a href="https://www.dhw.ac.jp/faculty/graphic/" target="_blank" rel="norefferer">グラフィック</a>
            </FacultyItem>
            <FacultyItem>
              <a href="https://www.dhw.ac.jp/faculty/anime/" target="_blank" rel="norefferer">アニメ</a>
            </FacultyItem>
            <FacultyItem
              css={css`
                font-weight: bold;
              `}
            >
              <a href="https://www.dhw.ac.jp/faculty/web/" target="_blank" rel="norefferer">Web</a>
            </FacultyItem>
            <FacultyItem>
              <a href="https://www.dhw.ac.jp/faculty/media/" target="_blank" rel="norefferer">VR･メディアアート</a>
            </FacultyItem>
            <FacultyItem>
              <a href="https://www.dhw.ac.jp/faculty/business/" target="_blank" rel="norefferer">広告･起業</a>
            </FacultyItem>
          </FacultyList>
        </nav>
      </Upper>
      <Under>
        <p>
          <small>Copyright © 2020 Digital Hollywood Co.,Ltd. All Rights Reserved.</small>
        </p>
        <BackToTop type="button" onClick={() => window.scrollTo(0, 0)}>
          トップに戻る
        </BackToTop>
      </Under>
    </Wrapper>
  );
};

const UnivLogo = styled.div`
  svg {
    width: 80px;
    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 960px) {
    margin-bottom: 2em;
  }
`;
const FacultyList = styled.ul`
  list-style: none;
  display: inline-flex;
  align-items: baseline;
  li + li {
    margin-left: 1em;
  }
  @media screen and (max-width: 960px) {
    display: block;
    li + li {
      margin-left: 0;
      margin-top: 0.5em;
    }
  }
`;
const FacultyItem = styled.li`
  a {
    text-decoration: none;
    color: #353535;
    &:hover {
      opacity: 0.6;
    }
  }
`;
const Wrapper = styled.article`
  margin-top: 200px;
  margin-bottom: 100px;
  p > small {
    text-transform: uppercase;
  }
`;
const Upper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 960px) {
    display: block;
  }
`;

const Under = styled.div`
  margin-top: 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BackToTop = styled.button`
  outline: none;
  text-align: right;
  &:hover {
    opacity: 0.6;
  }
  &:after {
    content: '↑';
    font-size: 12px;
    margin-left: 0.5em;
  }
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
