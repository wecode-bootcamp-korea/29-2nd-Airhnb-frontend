import { css } from 'styled-components';

const flexAlign = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const sectionStyle = css`
  display: flex;
  position: relative;
  height: 100vh;
`;

const sectionLeftStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(85, 16, 4, 1) 50%,
    rgba(6, 111, 133, 1) 100%
  );
`;

const logoStyle = css`
  position: absolute;
  top: 40px;
  left: 50px;
  width: 35px;
  cursor: pointer;
`;

const sectionLeftTextStyle = css`
  color: ${({ theme }) => theme.white};
  text-align: left;
  font-size: 50px;
  line-height: 60px;
`;

const sectionMainStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  background-color: ${({ theme }) => theme.white};
`;

const sectionMainTopStyle = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 40px 50px 0 0;
`;

const goToMainButtonStyle = css`
  width: 100px;
  height: 28px;
  border: none;
  border-radius: 25px;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.darkGray};
  font-size: 11px;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

const sectionMainBottomStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  border-top: 1px solid ${({ theme }) => theme.darkGray};
  z-index: 1000;
`;

const previousButtonStyle = css`
  margin-left: 45px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const nextButtonStyle = css`
  width: 85px;
  height: 50px;
  margin-right: 45px;
  color: white;
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.mainColor};
  font-size: 16px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export {
  flexAlign,
  sectionMainStyle,
  sectionLeftStyle,
  sectionStyle,
  sectionLeftTextStyle,
  logoStyle,
  sectionMainTopStyle,
  goToMainButtonStyle,
  sectionMainBottomStyle,
  previousButtonStyle,
  nextButtonStyle,
};
