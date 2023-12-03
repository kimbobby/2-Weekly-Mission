import { useState, useEffect, useCallback } from "react";
import logo from "../../assets/logo.svg";
import useAsync from "../../hooks/useAsync";
import "./Navbar.css";
import { getApiItems } from "../../services/api";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const NavContainer = styled.div`
  position: ${({ $location }) => ($location === "/shared" ? `fixed` : `static`)};
  top: 0;
  background-color: #edf7ff;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;
const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [loginInfo, setLoginInfo] = useState([]);
  const [isLoading, loadingError, getApiItemsAsync] = useAsync(getApiItems);
  const { email, image_source } = loginInfo;

  const handleLoginStatusInfo = useCallback(async () => {
    let result = await getApiItemsAsync("users/1");
    if (!result) return;
    const { data } = result;
    const userLoginInfo = data[0];

    if (userLoginInfo) {
      setIsLogin(true);
      setLoginInfo(userLoginInfo);
    }
  }, [getApiItemsAsync]);

  useEffect(() => {
    handleLoginStatusInfo();
  }, [handleLoginStatusInfo]);
  const location = useLocation();

  return (
    <NavContainer $location={location.pathname}>
      <nav>
        <img className="logo-mobile" src={logo} alt="홈으로 연결된 Linkbrary 로고" />
        {isLogin ? (
          <div className="user-info">
            <img className="profile" src={image_source} alt="user profile" />
            <p className="email">{email}</p>
          </div>
        ) : (
          <button className="cta cta-short">로그인</button>
        )}
        {loadingError?.message && <span>{loadingError.message}</span>}
      </nav>
    </NavContainer>
  );
};

export default Navbar;
