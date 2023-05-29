import ExploreCom from "../../Components/Explore/ExploreCom";
import Component from "../../Core/Component";
import "./Explore.scss"

export default class Explore extends Component {
  render() {
    const item = this.compile(ExploreCom)
    return this.html`
    <div class="explore">
      <h1>Explore</h1>
      <div class="row">
        <div class = "explore__list">
          <button> Top 100 </button>
          <button> Nhạc Việt </button>
          <button> Nhạc Hàn </button>
          <button> Nhạc Âu Mỹ </button>
          <button> Nhạc Mới </button>
          <button> Top 100 </button>
          <button> Nhạc Việt </button>
          <button> Nhạc Hàn </button>
          <button> Nhạc Âu Mỹ </button>
          <button> Nhạc Mới </button>
          <button><i class="fa-solid fa-ellipsis"></i></button>
        </div>
      </div>
      <div class = "explore__item">
        <div class = "item">${item}</div>
        <div class = "item">${item}</div>
        <div class = "item">${item}</div>
        <div class = "item">${item}</div>
        <div class = "item">${item}</div>
      </div>

      <div class = "button__more">
        <button>Load More</button>
      </div>
    </div>
    `
  }
}
