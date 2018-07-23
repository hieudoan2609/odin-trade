import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './components/NavBar';
import Market from './components/Market';
import Account from './components/Account';
import Loading from './components/Loading';
import Footer from './components/Footer';
import { populatePriceChart, populateDepthChart } from './actions';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  componentWillMount = () => {
    this.props.populatePriceChart();
    this.props.populateDepthChart();
  };

  render() {
    if (this.props.chart.priceLoading || this.props.chart.depthLoading) {
      return <Loading />;
    }

    return (
      <Router>
        <div className="App">
          <NavBar />

          <div className="container">
            <Switch>
              <Route exact path="/" component={Market} />
              <Route path="/account" component={Account} />
              <Route path="/market/:pair" component={Market} />
            </Switch>
          </div>

          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ chart }) => {
  return { chart };
};

export default connect(mapStateToProps, {
  populatePriceChart,
  populateDepthChart
})(App);
