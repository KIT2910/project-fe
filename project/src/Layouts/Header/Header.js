import Component from "../../Core/Component";
import Navigation from "../Navigation";
import defaultAvatar from "../../Assets/Images/default_avatar.jpg";
import "./Header.scss"

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      isFocusSearch: false,
      isShowAccount: false,
    };

    document.addEventListener("click", () => {
      this.handleFocusOutInput();
      this.handleHideAccount();
    });

    document.addEventListener("keyup", (e) => {
      if (e.key === "Escape") {
        this.handleHideAccount();
      }
    });
  }

  handleFocusOutInput = () => {
    if (this.state.isFocusSearch) {
      this.setState({
        isFocusSearch: false,
      });
    }
  };

  handleFocusInput = (e) => {
    e.stopPropagation();
    if (!this.state.isFocusSearch) {
      this.setState({
        isFocusSearch: true,
      });
    }
  };

  handleToggle = (e) => {
    e.stopPropagation();
    this.setState({
      isShowAccount: !this.state.isShowAccount,
    });
  };

  handleHideAccount = () => {
    if (this.state.isShowAccount) {
      this.setState({
        isShowAccount: false,
      });
    }
  };

  render() {
    const { isFocusSearch, isShowAccount } = this.state;

    return this.html`
    <header class="header">
      <div class="row">
        <div class="col-4">
          <div class="header__nav">
            <span>
              <i class="fa-solid fa-angle-left"></i>
            </span>
            <span>
              <i class="fa-solid fa-angle-right"></i>
            </span>
          </div>
        </div>
        <div class="col-4">
          <nav class="header__menu">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/explore">explore</a></li>
              <li><a href="/library">Library</a></li>
              
            </ul>
          </nav>
        </div>
        <div class="col-4">
          <div class="header__right">
            <form class="header__right--search">
              <div class="input-group ${isFocusSearch && "active"}">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input onfocus="${
                  this.handleFocusInput
                }"  type="search" placeholder="Search">
              </div>
            </form>
            <div class="header__right--account">
                <span onclick="${this.handleToggle}">
                  <img src="${defaultAvatar}" />
                </span>
                <ul class="${isShowAccount && "show"}">
                  <li><a href="">Settings</a</li>
                  <li><a href="">Login</a></li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
    `;
  }
}