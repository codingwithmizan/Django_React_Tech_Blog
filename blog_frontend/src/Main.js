import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./component/pages/Home";
import SingleBlog from "./component/pages/SingleBlog";
import Layout from "./component/utills/Layout";
const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blogs/:slug" component={SingleBlog} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
