import React from 'react';
import { portfolios } from '../data/portfolios';
import PortfolioItem from './portfolio-item';

class Portfolios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const portfolioItems = portfolios.map((portfolio) => {
      return (
        <PortfolioItem key={portfolio.id} portfolio={portfolio} />
      );
    });
    return (
      <div className="portfolios" id="portfolios">
        {portfolioItems}
      </div>
    );
  }
}

export default Portfolios;
