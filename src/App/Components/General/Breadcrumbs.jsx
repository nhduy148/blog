import React from 'react';
import { Route, Link } from 'react-router-dom';


const Breadcrumbs = (props) => (
  <div className="breadcrumbs">
      <ul className='container'>
          <Route path='/:path' component={BreadcrumbsItem} />
      </ul>
  </div>
)

const BreadcrumbsItem = ({ match, ...rest }) => (
  <>
    <span>
        <li className={match.isExact ? 'breadcrumb-active' : undefined}>
            <Link to={match.url || ''}>
                {match.url}
            </Link>
        </li>
    </span>
    <Route path={`${match.url}/:path`} component={BreadcrumbsItem} />
  </>
)


export default Breadcrumbs;