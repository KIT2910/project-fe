import Navigo from "navigo";
import Component from "../../Core/Component";
import Item from "../../Components/Item/Item";
import Artists from "../../Components/Artists/Artists";
import './Home.scss'
import ForYou from "../../Components/ForYou/ForYou";


export default class Home extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    const item = this.compile(Item)
    const artists = this.compile(Artists)
    const forYou = this.compile(ForYou)
    return this.html`

      <div class = "Home">

        <div class = "Home__page">
          <h3>by Apple Music</h3>
          <div>${item}</div>
        </div>

        <div class = "Home__page">
            <h3> Recommended Playlists</h3>
            <div>${item}</div>
            <div>${item}</div>
        </div>

        <div class = "Home__page">
          <h3>For You</h3>
          <div>${forYou}</div>
        </div>

        <div class = "Home__page--artist">
          <h3>Recommended Artists</h3>
          <div> ${artists}</div>
        </div>

        <div class = "Home__page--albums">
          <h3>Latest Albums</h3>
          <div>${item}</div>
          <div>${item}</div>
        </div>

        <div class = "Home__page--charts">
          <h3>Charts</h3>
          <div>${item}</div>
        </div>
      </div>
    `
  }
}
