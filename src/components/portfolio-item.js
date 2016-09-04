import React from 'react';
import { Modal } from 'react-bootstrap';
import marked from 'marked';

class PortfolioItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMore: false };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }
  open() {
    this.setState({ showMore: true });
  }
  close() {
    this.setState({ showMore: false });
  }
  render() {
    const imgItems = this.props.portfolio.photos.map((imgItem) => {
      return (
        <img role="presentation" key={imgItem} src={imgItem} />
      );
    });
    const gitLink = this.props.portfolio.git ? <div className="git-link"> <a target="_blank" href={this.props.portfolio.git}> Github </a> </div> : '';
    return (
      <div key={this.props.portfolio.id} id={this.props.portfolio.id} className="portfolio-item">
        <div className="image">
          <div className="image-container"> <img role="presentation" src={this.props.portfolio.photos[0]} alt=" " /> </div>
          <button className="view-more-link" onClick={this.open}> <span> View More </span> </button>
        </div>
        <h2 className="title"> {this.props.portfolio.name} </h2>
        <Modal show={this.state.showMore} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title className="modal-header">{this.props.portfolio.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="modal-description"dangerouslySetInnerHTML={{ __html: marked(this.props.portfolio.description || '') }} />
            {gitLink}
            <div className="modal-images"> {imgItems}</div>
          </Modal.Body>
        </Modal>
      </div>
      );
  }
}

export default PortfolioItem;
