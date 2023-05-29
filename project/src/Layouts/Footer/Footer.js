import Component from "../../Core/Component";
import img from "../../Assets/Images/Artist/sontung.gif"
import "./Footer.scss"

export default class Footer extends Component {
  constructor() {
    super();
    this.state = {

    };
  }


  render() {
    return this.html`
    <footer class = "footer">
      <div class = "row">
        <div class ="col-4">
          <div class ="footer__info">
            <div class = "footer__info--image">
              <img src = "${img}"></img>
            </div>
            <div class = "footer__info--title">
              <p href="" class ="music__name">Em của ngày hôm qua</p>
              <p href="" class = "music__author">Sơn Tùng M-TP</p>
            </div>
            <div class = "footer__info--heart">
              <span><i class="fa-regular fa-heart"></i></span>
            </div>
          </div>
        </div>
        <div class ="col-4">
          <div class ="footer__button">
            <span><i class="fa-solid fa-backward-step"></i></span>
            <span><i class="fa-solid fa-play"></i></span>
            <span><i class="fa-solid fa-forward-step"></i></span>
          </div>
        </div>
        <div class ="col-4">
          <div class = "footer__control">
            <span><i class="fa-solid fa-list-music"></i></span>
            <span><i class="fa-solid fa-repeat"></i></span>
            <span><i class="fas fa-random"></i></span>
            <span><i class="fa fa-volume-down"></i></span>
            <input type="range"></input>
            <span class="angle"><i class="fa-solid fa-angle-up"></i></sp>
          </div>
        </div>
      </div>
    </footer>
    `
  }
}


