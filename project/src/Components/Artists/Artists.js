import Component from '../../Core/Component';
import './Artists.scss';
import artist1 from '../../Assets/Images/Artist/chipu.jpg'
import artist2 from '../../Assets/Images/Artist/haanhtuan.jpg'
import artist3 from '../../Assets/Images/Artist/hoangthuylinh.jpg'
import artist4 from '../../Assets/Images/Artist/sontung.gif'
import artist5 from '../../Assets/Images/Artist/mono.jpg'


export default class Artists extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return this.html`
    <div class="row">
        <div class="col">
          <div class="Music__Author">
            <span class="Music__Author--image">
              <img src="${artist1}">
            </span>
            <div class="Music__Author--title">
              <p class="author">CHIPU</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="Music__Author">
            <span class="Music__Author--image">
              <img src="${artist2}">
            </span>
            <div class="Music__Author--title">
              <p class="author">HÀ ANH TUẤN</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="Music__Author">
            <span class="Music__Author--image">
              <img src="${artist3}">
            </span>
            <div class="Music__Author--title">
              <p class="author">HOÀNG THÙY LINH</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="Music__Author">
            <span class="Music__Author--image">
              <img src="${artist4}">
            </span>
            <div class="Music__Author--title">
              <p class="author">M-TP</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="Music__Author">
            <span class="Music__Author--image">
              <img src="${artist5}">
            </span>
            <div class="Music__Author--title">
              <p class="author">MONO</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    `
  }
}
