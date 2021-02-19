import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./hocs/Layout";
import Blog from "./components/Blog";
import BlogDetail from "./components/BlogDetail";
import Category from "./components/Category";
const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Blog} />
          <Route exact path="/blog/:id" component={BlogDetail} />
          <Route exact path="/category/:id" component={Category} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
