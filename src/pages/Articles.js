import "../components/Articles/articles.css"
import ArticlesList from "../components/Articles/ArticlesList";


import TransitionPage from '../utils/TransitionPage';

const Articles = () => {
    return (
        <ArticlesList />
    );
  }
  
  export default TransitionPage( Articles );