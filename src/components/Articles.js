import React from 'react';
import { useParams, Switch, Route, useRouteMatch } from 'react-router-dom';
import useTeamsArticles from '../hooks/useTeamsArticles';
import Sidebar from './Sidebar';
import useArticle from '../hooks/useArticle';

function Article() {
  const { teamId, articleId } = useParams();

  const { response: article, loading } = useArticle({ teamId, articleId });

  if (loading) return null;

  return (
    <div className="panel">
      <article className="article">
        <h1 className="header">{article.title}</h1>
        <p>{article.body}</p>
      </article>
    </div>
  );
}

function Articles() {
  const { teamId } = useParams();
  const { path } = useRouteMatch();

  const { loading, response: articles } = useTeamsArticles(teamId);
  console.log(articles);
  if (loading === true) {
    return <div>LOADING</div>;
  }
  return (
    <div className="container two-column">
      Articles - {teamId}
      <Sidebar
        title="Articles"
        list={articles.map((article) => article.title)}
      />
      <Switch>
        <Route path={`${path}/:articleId`}>
          <Article />
        </Route>
        <Route path="*">
          <div className="sidebar-instruction"> Select an article</div>
        </Route>
      </Switch>
    </div>
  );
}

export default Articles;
