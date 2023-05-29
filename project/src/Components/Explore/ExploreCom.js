import './ExploreCom.scss';
import ExploreItem1 from "../../Assets/Images/Item/chipu.jpg"
import ExploreItem2 from "../../Assets/Images/Item/haanhtuan.jpg"
import ExploreItem3 from "../../Assets/Images/Item/hoangthuylinh.jpg"
import ExploreItem4 from "../../Assets/Images/Item/mono.jpg"
import ExploreItem5 from "../../Assets/Images/Item/sontung.gif"
import Component from '../../Core/Component';


export default class ExploreCom extends Component {
  constructor() {
    super();
    this.state = {
      isHover: false
    }
  }


  render() {
    return this.html`
      <div class="row">
        <div class="col">
          <div class="explore__item">
            <img src="${ExploreItem1}">
            <div class="explore__item--title">
              <span><i class="fa-solid fa-play"></i> 100K</span>
              <h5>Chipu</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="explore__item">
            <img src="${ExploreItem2}">
            <div class="explore__item--title">
              <span><i class="fa-solid fa-play"></i> 100K</span>
              <h5>Hà Anh Tuấn</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="explore__item">
            <img src="${ExploreItem3}">
            <div class="explore__item--title">
              <span><i class="fa-solid fa-play"></i> 100K</span>
              <h5>Hoàng Thùy Linh</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="explore__item">
            <img src="${ExploreItem4}">
            <div class="explore__item--title">
              <span><i class="fa-solid fa-play"></i> 100K</span>
              <h5>Mono</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="explore__item">
            <img src="${ExploreItem5}">
            <div class="explore__item--title">
              <span><i class="fa-solid fa-play"></i> 100K</span>
              <h5>Sơn Tùng M-TP</h5>
            </div>
          </div>
        </div>
      </div>
  `;
  }
}
