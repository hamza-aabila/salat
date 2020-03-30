import React, { useState, useEffect, useContext } from 'react';
import moment from 'moment';
import styled, { css } from 'styled-components';
import { AppContext } from '../context/AppContext';
import { timesFromStringtoDate } from '../utils/dates';
import { DEFAULT_TIME_FORMAT } from '../settings';
import Spinner from '../common/Spinner';

const NAMES = require('../data/prayers');

const PrayerCard = () => {
  const { prayers, time, lang } = useContext(AppContext);

  const StyledUl = styled.ul`
    padding-top: 1em;
    height: 50vh;
    margin: 1vh 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media (min-width: 1200px) {
      height: 50vh;
    }
  `;

  const StyledName = styled.div`
    text-transform: capitalize;
  `;
  const StyledDifference = styled.div`
    color: ${props => props.theme.differenceColor};
  `;
  const StyledTime = styled.div``;

  const StyledNext = css`
    font-weight: 700;
    background-color: ${props => props.theme.color};
    color: ${props => props.theme.backgroundColor};
    padding: 0.5rem 0.4rem 0.5rem;
    border-radius: 2px;
  `;

  const StyledLi = styled.li`
    margin: 1.2rem 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-direction: ${() => (lang === 'fr' ? 'row' : 'row-reverse')};
    ${props => (props.className === 'next' ? StyledNext : '')}
  `;

  const prayer = (prayers || [])[0];

  let [diff, setDifference] = useState('');
  let [next, setNextOne] = useState('');

  useEffect(() => {
    if (prayer) {
      const times = timesFromStringtoDate(prayer);
      const nextOnes = Object.keys(times).filter(t => time.isBefore(times[t]));
      const next = nextOnes.length === 0 ? Object.keys(NAMES)[0] : nextOnes[0];
      setNextOne(next);
      const diff = moment(times[next].diff(time)).format(DEFAULT_TIME_FORMAT);
      setDifference(diff);
    }
  }, [time, prayer]);

  return prayer ? (
    <StyledUl>
      {Object.keys(NAMES).map(name => {
        return (
          <StyledLi key={name} className={name === next ? 'next' : ''}>
            <StyledName>{NAMES[name][lang]}</StyledName>
            {name === next && <StyledDifference>{diff}</StyledDifference>}
            <StyledTime>{(prayer as any)[name]}</StyledTime>
          </StyledLi>
        );
      })}
    </StyledUl>
  ) : (
    <Spinner />
  );
};
export default PrayerCard;