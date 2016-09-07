import React from 'react';
import { portfolios } from '../data/portfolios';
import PortfolioItem from './portfolio-item';

class Portfolios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    window.addEventListener('scroll', (event) => {
      const portFoliosRect = this.refs.portfolios.getBoundingClientRect();
      const offset = 300;
      if (portFoliosRect.top <= 100 + offset) {
        this.props.changeToDown();
      }
      if (portFoliosRect.top > 100 + offset) {
        this.props.changeToUp();
      }
    });
  }

  render() {
    const portfolioItems = portfolios.map((portfolio) => {
      return (
        <PortfolioItem key={portfolio.id} portfolio={portfolio} />
      );
    });
    return (
      <div className="portfolios" ref="portfolios"id="portfolios">
        {portfolioItems}
      </div>
    );
  }
}

export default Portfolios;
