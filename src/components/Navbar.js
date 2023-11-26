import logo from "../assets/logo.svg";

const Navbar = ({ loginClick, isLogin }) => {
  return (
    <div className="nav-background">
      <nav>
        <img className="logo-mobile" src={logo} alt="홈으로 연결된 Linkbrary 로고" />

        {
          /* {isLogin?(<img src={}/>
        // <span>{}</span>): }*/
          <button className="cta cta-short" onClick={loginClick}>
            <span>로그인</span>
          </button>
        }
      </nav>
    </div>
  );
};

export default Navbar;
