import Component from '../../Core/Component';
import "./ForYou.scss";
import Banner1 from "../../Assets/Images/ForYou/banner1.jpg";
import Banner2 from "../../Assets/Images/ForYou/banner2.jpg";


export default class ItemForYou extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return this.html`
    <div class="home__page">
    <div class="foryou__item">
      <div class="itemFirst">
          <img src="${Banner1}">
          <div class="title">
            <div><span>Playlist</span></div>
            <div><span>Chill</span></div>
          </div>
          <div class="button">
            <span><i class="fa-solid fa-play"></i></span>
          </div>
        </div>

        <div class="itemSecond">
          <div class="image">
            <img src="${Banner2}" alt="">
          </div>
          <div class="content">
            <div class="title">
              <div><span class = "textFirst">Playlist</span></div>
              <div><span class = "textSecond">Chill</span></div>
            </div>
            <div class="control">
              <div class="button">
                <span><i class="fa-solid fa-thumbs-down"></i></span>
                <span><i class="fa-solid fa-play"></i></span>
                <span><i class="fa-solid fa-forward-step"></i></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `
  }
}
