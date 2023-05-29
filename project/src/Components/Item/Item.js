import './Item.scss';
import Mono from "../../Assets/Images/Item/mono.jpg"
import HoangThuyLinh  from "../../Assets/Images/Item/hoangthuylinh.jpg"
import Sontung from "../../Assets/Images/Item/sontung.gif"
import Chipu from "../../Assets/Images/Item/chipu.jpg"
import Haanhtuan from "../../Assets/Images/Item/haanhtuan.jpg"
import Component from '../../Core/Component';


export default class Item extends Component {

  render() {
    return this.html`
    <div class="home__page">
    <div class="home__page--item">
        <div class="item">
            <img src="${Mono}" alt="">
            <div class="content">
              <a href=""><h6>Happy Hits </h6></a>
              <p>by Apple Music</p>
            </div>
        </div>
        <div class="item">
            <img src="${HoangThuyLinh}" alt="">
            <div class="content">
              <a href=""><h6>Happy Hits </h6></a>
              <p>by Apple Music</p>
            </div>
        </div>
        <div class="item">
            <img src="${Sontung}" alt="">
            <div class="content">
              <a href=""><h6>Happy Hits </h6></a>
              <p>by Apple Music</p>
            </div>
        </div>
        <div class="item">
            <img src="${Chipu}" alt="">
            <div class="content">
              <a href=""><h6>Happy Hits </h6></a>
              <p>by Apple Music</p>
            </div>
        </div>
        <div class="item">
            <img src="${Haanhtuan}" alt="">
            <div class="content">
              <a href=""><h6>Happy Hits </h6></a>
              <p>by Apple Music</p>
            </div>
        </div>
    </div>
  </div>
  `;
  }
}
