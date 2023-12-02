import { useState, useEffect, useCallback } from "react";
import logo from "../../assets/logo.svg";
import useAsync from "../../hooks/useAsync";
import "./Navbar.css";
import { getApiItems } from "../../services/api";
const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [loginInfo, setLoginInfo] = useState([]);
  const [isLoading, loadingError, getApiItemsAsync] = useAsync(getApiItems);
  const { email, profileImageSource } = loginInfo;

  const handleLoginStatusInfo = useCallback(async () => {
    let result = await getApiItemsAsync("sample/user");
    if (!result) return;

    const userLoginInfo = result;
    if (userLoginInfo) {
      setIsLogin(true);
      setLoginInfo(userLoginInfo);
    }
  }, [getApiItemsAsync]);

  useEffect(() => {
    handleLoginStatusInfo();
  }, [handleLoginStatusInfo]);

  return (
    <div className="nav-background">
      <nav>
        <img className="logo-mobile" src={logo} alt="홈으로 연결된 Linkbrary 로고" />
        {isLogin ? (
          <div className="user-info">
            <img className="profile" src={profileImageSource} alt="user profile" />
            <p className="email">{email}</p>
          </div>
        ) : (
          <button className="cta cta-short">로그인</button>
        )}
        {loadingError?.message && <span>{loadingError.message}</span>}
      </nav>
    </div>
  );
};

export default Navbar;
