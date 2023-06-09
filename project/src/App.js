import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Assets/Styles/Style.scss";
import { publicRoute } from "./Routes/publicRoute";
import Component from "./Core/Component";
import DefaultLayout from "./Layouts/DefaultLayout";
export default class App extends Component {
  render = () => {
    const layout = this.compile(DefaultLayout);
    return layout;
  };
}
