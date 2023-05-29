import Component from "../../Core/Component";
import "./Song.css"
import image from "../../Assets/Images/ForYou/banner1.jpg"

export default class Song extends Component {
  render() {
    return this.html`
    <div class="player">
      <div class="wrapper">
        <div class="details">
          <div class="track-art">
            <img src="${image}" class="track-art-image">
          </div>
          <div class="content">
            <div class="title">
              <div class="track-name">Track Name</div>
              <div class="track-artist">Track Artist</div>
            </div>
            <div class="heart">
              <span><i class="fa-regular fa-heart"></i></span>
            </div>
          </div>
        </div>

      <div class="slider_container timer">
        <div class="current-time">00:00</div>
        <input type="range" min="1" max="100" value="100" step="0.1" class="seek_slider">
        <div class="total-duration">00:00</div>
      </div>
      <div class="buttons">
        <div class="random-track">
          <i class="fas fa-random fa-2x" title="random"></i>
        </div>
        <div class="prev-track">
          <i class=" fa fa-step-backward fa-2x"></i>
        </div>
        <div class="play-pause-track">
          <i class="fa fa-play-circle fa-5x"></i>
        </div>
        <div class="next-track">
          <i class="fa fa-step-forward fa-2x"></i>
        </div>
        <div class="repeat-track">
          <i class="fa fa-repeat fa-2x" title="repeat"></i>
        </div>
      </div>
    </div>
    <div class="lyric_content">
      <div class="author">作曲 : Dabin</div>
      <div class="musicName">作词 : Dabin/Dia Frampton/Michael McEach</div>
      <p class="lyric">
      <div class="line1">
        <span>Where we are, we stay this way</span><br>
        <span>我们现在身处何方？我们就这样呆着</span>
      </div>
      <div class="line1">
        <span>Where we are, we stay this way</span><br>
        <span>我们现在身处何方？我们就这样呆着</span>
      </div>
      <div class="line1">
        <span>Where we are, we stay this way</span><br>
        <span>我们现在身处何方？我们就这样呆着</span>
      </div>
      <div class="line1">
        <span>Where we are, we stay this way</span><br>
        <span>我们现在身处何方？我们就这样呆着</span>
      </div>
      <div class="line1">
        <span>Where we are, we stay this way</span><br>
        <span>我们现在身处何方？我们就这样呆着</span>
      </div>
      <div class="line1">
        <span>Where we are, we stay this way</span><br>
        <span>我们现在身处何方？我们就这样呆着</span>
      </div>
      <div class="line1">
        <span>Where we are, we stay this way</span><br>
        <span>我们现在身处何方？我们就这样呆着</span>
      </div>
      <div class="line1">
        <span>Where we are, we stay this way</span><br>
        <span>我们现在身处何方？我们就这样呆着</span>
      </div>
      <div class="line1">
        <span>Where we are, we stay this way</span><br>
        <span>我们现在身处何方？我们就这样呆着</span>
      </div>
      <div class="line1">
        <span>Where we are, we stay this way</span><br>
        <span>我们现在身处何方？我们就这样呆着</span>
      </div>
    </div>
    </p>
  </div>
    `
  }
}
