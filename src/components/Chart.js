import CandleStickChartWithHoverTooltip from "./CandleStickChartWithHoverTooltip";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Chart extends Component {
	renderChart = () => {
		if (!this.props.exchange.ticks) {
			return (
				<div className="unavailable">
					<p>Chart data not available.</p>
				</div>
			);
		}

		return (
			<CandleStickChartWithHoverTooltip
				type="hybrid"
				data={this.props.exchange.ticks}
			/>
		);
	};

	renderPairs = () => {
		return Object.keys(this.props.exchange.assets).map((assetKey, i) => {
			const asset = this.props.exchange.assets[assetKey];

			return (
				<Link
					to={`/market/${asset.symbol}`}
					className={`button ${
						this.props.exchange.currentMarket === asset.symbol ? "active" : ""
					}`}
					key={i}
				>
					{"ETH"}/{asset.symbol}
					<span
						className={
							asset.currentPrice < asset.previousPrice ? "sell" : "buy"
						}
					>
						{asset.currentPrice}
					</span>
				</Link>
			);
		});
	};

	render() {
		return (
			<div className="Chart card">
				<div className="chart__nav">
					<div className="outerWrapper">
						<div className="markets">
							<div className="fadeRight" />
							<div className="wrapper">{this.renderPairs()}</div>
						</div>
					</div>
				</div>
				{this.renderChart()}
			</div>
		);
	}
}

const mapStateToProps = ({ exchange }) => {
	return { exchange };
};

export default connect(mapStateToProps)(Chart);
